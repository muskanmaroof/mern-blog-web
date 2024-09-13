import Button from '../component/RippleButton';
import { IoIosPhonePortrait} from "react-icons/io";
import { FaMapMarkerAlt  , FaGlobeEurope, FaEnvelope} from "react-icons/fa";
import "./ContactPage.css";


export default function ContactPage(){
    return(
            <div className="contact-page">
              <div className="contact-side-info">
              <h3> Get in Touch </h3>             
               <h4> We'd love to hear from you! Whether you have questions, feedback,
               or just want to share your favorite makeup remedies, feel free to reach out. 
               Here’s how you can contact us:</h4> 
              </div>
               <section className="section contact padd-15" id="contact">
                  
                <div className="container padd-15">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2 className=" top-bottom">Contact</h2>
                        </div> 
                    </div>
                    <h3 className="contact-title padd-15 top-bottom">Have You Any Question ?</h3>
                    <h4 className="contact-sub-title padd-15 top-bottom">I'M AT YOUR SERVICE</h4>
                     <div className="row" /*style={{paddingLeft: "140px"}}*/> 
                    
                    <div className="contact-info padd-15 bottom-top">
                        <div className="icon"><i className="fa fa-phone"><IoIosPhonePortrait className='fa' /></i></div>
                        <h4>Call Us On</h4>
                        <p>+92 0000000</p>
                    </div>
                    
                    <div className="contact-info padd-15 bottom-top">
                        <div className="icon"><i className="fa fa-map-marker-alt"><FaMapMarkerAlt className='fa' /></i></div>
                        <h4>Office</h4>
                        <p>Karachi</p>
                    </div>
                    
                    <div className="contact-info padd-15 bottom-top">
                        <div className="icon"><i className="fa fa-envelope"><FaEnvelope className='fa'/></i></div>
                        <h4>Email</h4>
                        <p>abcd@gmail.com</p>
                    </div>
                    

                    <div className="contact-info padd-15 bottom-top">
                        <div className="icon"><i className="fa fa-globe-europe"><FaGlobeEurope className='fa'/></i></div>
                        <h4>Website</h4>
                        <p>www.rankplaza.com</p>
                    </div>
                
                    </div>
                    <h3 className="contact-title padd-15 top-bottom">SEND ME AN EMAIL</h3>
                    <h4 className="contact-sub-title padd-15 top-bottom">I'M VERY RESPONSIVE TO MESSAGES</h4>
                
                    <form action="https://api.web3forms.com/submit" method="POST">
                    <div className="row" /*style={{paddingLeft: "160px;"}}*/>
                    <div className="contact-form padd-15 bottom-top">
                        
                        <input type="hidden" name="access_key" value="5f5df2e6-ed60-432c-acf9-c3d7d3b9baaa"/>
                        <div className="row">
                        <div className="form-item col-6 padd-15">
                            <div className="form-group ">
                            <input type="text" className="form-control" placeholder="Name" name="Name" required/>
                            </div>
                        </div>
                        <div className="form-item col-6 padd-15">
                            <div className="form-group ">
                            <input type="email" className="form-control" placeholder="Email" name="Email" required/>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="form-item col-12 padd-15">
                            <div className="form-group ">
                            <input type="text" className="form-control" placeholder="subject" name="Subject" required />
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="form-item col-12 padd-15">
                            <div className="form-group ">
                            <textarea  className="form-control" placeholder="Message" name="Message" required></textarea>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="form-item col-12 padd-15">
                            <Button  ripple={"#fff"} >Send Message</Button>
                        </div>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </section> 
        </div>
      
    )
}