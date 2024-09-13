const mongoose = require('mongoose');
const {Schema , model} = mongoose;

const PostSchema = new Schema({
    title:{
        type:String,
    },
    summary:{
        type : String,
    },
    content:{
        type :String
    },
    cover:{
        type:String,
        set: (v)=>
            v === ""
        ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds-photos%2Fmakeup-products-pictures&psig=AOvVaw15jXqOQlWacJsDzIlLNgEU&ust=1723630324515000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCyk9Pd8YcDFQAAAAAdAAAAABAE"
        : v,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds-photos%2Fmakeup-products-pictures&psig=AOvVaw15jXqOQlWacJsDzIlLNgEU&ust=1723630324515000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCyk9Pd8YcDFQAAAAAdAAAAABAE"
        
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true,
});

const PostModel = model("Post" , PostSchema);

module.exports = PostModel;