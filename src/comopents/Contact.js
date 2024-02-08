import { MdEmail } from "react-icons/md";
import { IoCall,IoLocationSharp  } from "react-icons/io5";
import SocialMedia from "./SocialMedia";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css'
function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_4uuuuvg', 'template_rdpt1uj', form.current, 'L_HXR6PHafDM1aQ8B')
        .then((result) => {
            console.log(result.text);
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
            <div className="contact-container container">
                <div className="contact-mazen row">
                    <div className='contact-info col-lg-6 col-md-6 col-sm-12'>
                           <h2 >Contact</h2>
                    <div className='email'>
                        <div data="mazen.eltayeb1997@gmail.com"  className='icon'>
                        <MdEmail size='1.5rem' />
                        </div>
                    </div>
                    <div className='call'>
                        <div data="+201002955430" className='icon'>
                        <IoCall  size='1.5rem'  />
                        </div>
                        <div className="info">
                        </div>
                    </div>
                    <div className='location'>
                        <div data="Egypt,Ismailia,Elsheikh zayed"  className='icon'>
                        <IoLocationSharp size='1.5rem'/>
                        </div>
                    </div>
                    <div className="map">
                    <iframe
                         src="https://maps.google.com/maps?q=30.611042133054895,%2032.27859403318359&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" />
                    </div >
                    <div className="social-media-contact">
                    <SocialMedia />
                    </div>
                    </div>
                    <div className='send-email col-lg-6 col-md-6 col-sm-12'>
                    <form  ref={form} onSubmit={sendEmail}>
                        <input placeholder="Your Name " type="text" name="user_name"></input>
                        <input placeholder="Your Email " type="email" name="user_email"></input>
                        <input placeholder="subject" name="subject" type="text"></input>
                        <textarea placeholder="Massage" name="message"  className="massege" type="text"></textarea>
                        <input  type="submit" value="Send" ></input>
                    </form>
                    </div>
                </div>
            </div>
    )
}

export default Contact;