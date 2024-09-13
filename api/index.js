if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
};



const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User.js');
const Post = require("./models/Post.js")
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs =require('fs');
const path = require("path");

// const __dirname = path.dirname("");
// const buildPath = path.join(__dirname , "../client/build");


// app.use(express.static(buildPath));

// app.get('/*', function(req, res) {
//   res.sendFile(
//     path.join(buildPath, 'index.html'),
//     function(err) {
//       if (err) {
//         res.status(500).send('Error loading index.html');
//       }
//     }
// );
// });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

app.use(cors({credentials:true , origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads' , express.static(__dirname + '/uploads'));
// app.use(express.urlencoded({ extended: true }));

app.post("/register" , async (req,res)=>{
    const {username , password} = req.body;
    try{
        const user = new User({
            username,
             password: bcrypt.hashSync(password , salt)
            });
        const userDoc =  await user.save();
        res.json(userDoc);
    }catch(e){
       res.status(400).json(e)
    }
    
});

app.post("/login" , async (req,res)=>{
   const {username , password} = req.body;
        const user = await User.findOne({username});
        const passOk = bcrypt.compareSync(password, user.password)
        if(passOk){
           jwt.sign({username , id: user._id} , process.env.SECRET , {} , (err , token)=>{
            if (err) throw err;
            res.cookie('token' , token).json({
                id:user._id,
                username:user.username
            });
           })
        }else{
            res.status(400).json('wrong credentials')
        }
          
})


app.get("/profile", (req, res) => {
    const { token } = req.cookies;

    // Check if the token is provided
    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    jwt.verify(token, process.env.SECRET, (err, info) => {
        if (err) {
            return res.status(403).json({ error: "Forbidden: Invalid token" });
        }

        res.json(info);
    });
});




app.post("/logout", (req, res) => {
    // Clear the token cookie
    res.clearCookie('token');
    // Send a response indicating successful logout
    res.json({ message: 'Logged out' });
});




app.post("/post" ,uploadMiddleware.single('file'), async (req , res)=>{
   
    try{
        const {originalname , path} = req.file;
        const parts = originalname.split(".");
        const ext = parts[parts.length - 1];  // get the extension of the file
        const newpath = path +"."+ ext;
        fs.renameSync(path, newpath);  
    
        const {token }= req.cookies;
        console.log(token);

           jwt.verify(token, process.env.SECRET, {} ,async  (err, info)=>{
            //if (err) throw err;

           
            const {title, content, summary} = req.body;
            
            const postDoc =  await Post.create({
            title,
            content,
            summary,
            author: info.id,
            cover: newpath,
    
            });
            res.json(postDoc);
            });  
    }catch(err){
        console.error(err);
       res.status(500).json({ error: 'Internal server error' });
    }
    

});

app.put("/post", uploadMiddleware.single('file'), async (req, res) => {
    let newpath = null;
    if (req.file) {
        const { originalname, path } = req.file;
        const parts = originalname.split(".");
        const ext = parts[parts.length - 1];  // get the extension of the file
        newpath = path + "." + ext;
        fs.renameSync(path, newpath);  // rename the file with the extension
    }
    
    const { token } = req.cookies;
    jwt.verify(token, process.env.SECRET, {}, async (err, info) => {
        if (err) throw err;

        const { id, title, content, summary } = req.body;

        const  postDoc = await Post.findById(id);
         

        const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
        if (!isAuthor) {
            return res.status(403).json("You are not the author of this post");
        }
     
        await postDoc.updateOne({
            title,
            content,
            summary,
            cover: newpath ? newpath : postDoc.cover
        })

            res.json(postDoc);
        
    });
});

app.get("/post" , async (req,res)=>{
    res.json(
        await Post.find()
        .populate('author' , ['username'])
        .sort({createdAt: -1})
        .limit(20)
    );
});

app.delete("/post/:id", async (req, res) => {
   
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json("Invalid id");  // return error if the id is not valid
        }

        const postDoc = await Post.findOneAndDelete({_id: id});
        if(!postDoc){
            return res.status(404).json("Post not found");  // return error if the post is not found
        }
        res.json(postDoc);
        });
        


app.get("/post/:id" , async (req ,res)=>{
    const {id} = req.params;  // get the id of the post from the url parameters
    const post = await Post.findById(id).populate('author' , ['username']);
    res.json(post);
})

const PORT = process.env.PORT || 8080 ;
app.listen(PORT , ()=>{
    console.log("Server is running on port " + PORT);  // server started successfully
});
