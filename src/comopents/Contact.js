import { MdEmail } from "react-icons/md";
import { IoCall,IoLocationSharp  } from "react-icons/io5";
import SocialMedia from "./SocialMedia";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import './contact.css'
function Contact(){
    const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     const input = document.querySelectorAll(".send-email form input")
    //     input.forEach((el)=>{
       
    //         const emptyMassage= document.querySelector(".empty-massage") 
    //         if(el.value==""){
    //             el.style.border="2px solid red"
    //             emptyMassage.style.display="block"
                
    //         }
    //         else{
    //             emailjs.sendForm('service_4uuuuvg', 'template_rdpt1uj', form.current, 'L_HXR6PHafDM1aQ8B')
    //             .then((result) => {
    //                 console.log(result.text);
    //                 e.target.reset()
    //             }, (error) => {
    //                 console.log(error.text);
    //             });
    //             el.style.border="2px solid white"
    //             emptyMassage.style.display="none"
    //         }
    //     })
    // };

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //   emailjs.sendForm('service_4uuuuvg', 'template_rdpt1uj', form.current, 'L_HXR6PHafDM1aQ8B')
    //     .then((result) => {
    //         console.log(result.text);
    //         e.target.reset()
    //     }, (error) => {
    //         console.log(error.text);
    //     });
        
    // };



    const sendEmail = (e) => {
        e.preventDefault();
      emailjs.sendForm('service_4uuuuvg', 'template_rdpt1uj', form.current, 'L_HXR6PHafDM1aQ8B')
        .then((result) => {
            const sendSuccess= document.querySelector(".send-success")
            sendSuccess.style.display="block"
            sendSuccess.style.display="none"

            console.log(result.text);
            e.target.reset()
        }, (error) => {
            const sendField=document.querySelector(".send-field")
            sendField.style.display="block"
            sendField.style.display="none"
            console.log(error.text);
        });
        
    };
    return(
        <>
          <span className="send-success"> <div>
          <FaCheck size="1rem"/> <h6>Your Massage Sended Sucsisfuly</h6> 
            </div>
        </span>
          <span className="send-field">
             <div> <ImCross /><h6>Your Massage Sended not</h6></div> 
             </span>
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
                        <input placeholder="Your Name "  type="text" name="user_name" required title="Please enter your name"></input>
                        <input placeholder="Your Email " type="email" name="user_email" required></input>
                        <input placeholder="subject" name="subject" type="text" required></input>
                        <textarea placeholder="Massage" name="message"  className="massege" type="text"></textarea>
                        <input  type="submit" value="Send" ></input>
                        <h3 className="empty-massage">! we can t send your massege empty</h3>
                    </form>
                    </div>
                </div>
            </div> 
        </>
      
    )
}

export default Contact;