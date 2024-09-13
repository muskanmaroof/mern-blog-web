import { useEffect, useState } from "react";
import Post from "../Post"
import "./IndexPage.css";
import NewsLetter from "../component/NewsLetter";
import makeup from "../Assets/makk.avif";

export default function IndexPage(){
  const[posts , setPosts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/post" ).then(response=>{
            response.json().then(posts=>{
                setPosts(posts);
            });
        });
    });

    return(
       <div className="home-page" >
            <div className="home-container">
                <div className="home-info">
                    <h2 className="author">Hi, I'm Emily  </h2>
                    <h1> I am a passionate makeup remedies expert who has been writing about natural remedies for makeup since 2015. </h1>
                    <p>I am dedicated to helping you discover the best ways to enhance your natural beauty. With years of experience in the beauty industry,
                        I've learned that true confidence comes from knowing what works best for your unique skin and style.
                        Through this blog, I share my knowledge, tips, and DIY remedies to help you achieve a 
                        radiant look that reflects your inner glow. Whether you’re a beauty enthusiast or someone
                        looking to elevate your self-care routine, I’m here to guide you every step of the way.
                    </p>
                    <button>MORE ABOUT ME</button>
                   
                </div>
                <div className="blog-info">
                    <div className="blog-text">
                        <h2>"Transform Your Beauty Naturally – Boost Your Glow with Proven Makeup Remedies!"</h2>
                        <p>Unlock the secret to radiant skin and timeless beauty with our 
                            natural makeup remedies. Our carefully curated solutions blend the power 
                            of nature with expert techniques to enhance your glow without harsh chemicals.
                        </p>
                        <button>START TODAY</button>
                    </div>
                    <div className="blog-pic">
                        <img src={makeup} alt="makeup"/>
                    </div>
                </div>
                <NewsLetter/>
                <div className='post-head'>
                    <h1>BLOG POST</h1>
                </div>
                <main>
                    {posts.length > 0 && posts.map(post =>(
                    <Post key={post._id} {...post}/>
                    ))}
                </main>
            </div>
            
        </div>
    );
} 