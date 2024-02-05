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
            <div className="contact-container  ">
                <h1 >Contact</h1>
                <div className="contact-mazen">
                    <div className='contact-info'>
                    <div className='email '>
                        <div className='icon'>
                        <MdEmail size='1.5rem' />
                        </div>
                        <div className="info">
                        <h4>Email:</h4>
                        <h6>mazen.eltayeb1997@gmail.com</h6>
                        </div>
                    </div>
                    <div className='call'>
                        <div className='icon'>
                        <IoCall size='1.5rem'  />
                        </div>
                        <div className="info">
                        <h4>Call:</h4>
                        <h6>+201002955430</h6>
                        </div>
                    </div>
                    <div className='location'>
                        <div className='icon'>
                        <IoLocationSharp size='1.5rem'  />
                        </div>
                        <div className="info">
                        <h4>Location:</h4>
                        <h6>Egypt,Ismailia,Elsheikh zayed</h6>
                        </div>
                    </div>
                    <div className="map">
                    <iframe
                         src="https://maps.google.com/maps?q=30.611042133054895,%2032.27859403318359&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" />
                    </div>
                   <SocialMedia/>
                    </div>
                    <div className='send-email'>
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