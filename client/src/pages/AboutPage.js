import React from 'react';
import './AboutPage.css';
import myImage from '../Assets/girl3.png';
import team from "../Assets/images-r.png";
import teamTwo from "../Assets/team-11.png";

export default function AboutPage(){
    return (
        <div className='about-container' >
           <div className='about-div'>
              <h1 >About Us</h1>
              <h3>"Every flaw is a canvas for transformation; let your makeup be the art that reveals your inner glow."</h3>
              <p >
                Welcome to our website! We are dedicated to providing you with the best makeup remedies and tips. Our mission is to help you feel confident and beautiful every day.
              </p>
              <p >
                Our team of experts works tirelessly to bring you the latest and greatest in makeup remedies, skincare tips, and beauty hacks. Whether you're looking for solutions to common skin problems or just want to learn how to apply makeup like a pro, we've got you covered.
              </p>
              <p >
                Thank you for visiting our site. We hope you find the information helpful and inspiring. If you have any questions or feedback, please don't hesitate to contact us.
              </p>
            </div>
            <div className='about-info'>
                <div className='about-info-main'>
                    <div className='author'>
                        <h2>Hi, I'm Emily Johnson, and I’m a passionate makeup remedies expert who writes about natural remedies for makeup. </h2>
                        <p>I am dedicated to helping you discover the best ways to enhance your natural beauty. With years of experience in the beauty industry,
                           I've learned that true confidence comes from knowing what works best for your unique skin and style.
                          Through this blog, I share my knowledge, tips, and DIY remedies to help you achieve a 
                          radiant look that reflects your inner glow. Whether you’re a beauty enthusiast or someone
                           looking to elevate your self-care routine, I’m here to guide you every step of the way.
                        </p>
                    </div>
                    <div className='author-img'>
                        <div className='img'>
                         <img src={myImage} alt='profile-photo'/> 
                        </div>
                        
                    </div>
                </div>
                <div className='about-quote'>
                   
                    <h2>
                        "Makeup is like a brushstroke on a blank canvas. 
                        It’s a form of art that enhances the beauty that’s already there. 
                        It’s both a personal expression and a tool for transformation, turning everyday
                         moments into something extraordinary."
                    </h2>
                </div>
            </div>
            <div className='about-team'>
                <div>
                    <h2 >Our Team</h2>
                    <p >
                        Our team is made up of passionate makeup enthusiasts, skincare experts, and beauty professionals. We are committed to providing you with accurate and up-to-date information that you can trust.
                    </p>
                    <p >
                        Stay beautiful, stay confident, and stay connected with us!
                    </p>
                </div>
                <div className='about-team-img'>
                    <div className='team-img'>
                         <img src={myImage} alt='profile-photo' className='img-one item'/> 
                         <img src={team} alt='profile-photo' className='img-two item'/>
                         <img src={teamTwo} alt='profile-photo' className='img-three item'/>
                    </div>
                </div>
                <div className='team-info'>
                    <div className='team-member'>
                        <h3>Emily Johnsonn–Chief Executive Officer (CEO)</h3>
                        <p>Emily is a passionate makeup remedies expert who has been writing about natural remedies for makeup since 2015. She is a skincare guru and a certified beauty therapist. Emily has a background in cosmetology and has dedicated her life to helping others achieve their natural beauty goals.</p>
                    </div>
                    <div className='team-member'>
                        <h3>Amy Davis–Chief Technology Officer (CTO)</h3>
                        <p>Amy is a skincare expert with a background in cosmetology. She has been using natural remedies for makeup for over 10 years and has a deep love for helping others achieve their skin's best looks. Amy has a strong foundation in nutrition and has been practicing yoga and meditation to
                            improve her overall well-being and her ability to make beautiful makeup choices.
                        </p>
                    </div>
                    <div className='team-member'>
                        <h3>Sarah Thompson–Head of Marketing</h3>
                        <p>Sarah is a certified beauty therapist with a background in cosmetology. She has been using natural remedies for makeup for over 5 years and has a deep love for helping others achieve their skin's best looks. Sarah has a strong foundation in nutrition and has been practicing yoga and meditation to
                            improve her overall well-being and her ability to make beautiful makeup choices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};




    