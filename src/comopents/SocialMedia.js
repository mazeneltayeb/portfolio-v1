import { FaFacebookSquare,FaInstagram,FaGithub,FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./socialmedia.css"
function SocialMedia(){
    return(
        <div className="social-media">
            <a target="_black" href="https://www.facebook.com/mazenxhunter/" className="facebook">
            <FaFacebookSquare size='1.5rem' color="#1877f2" />  
            </a>
            <a target="_black" href="https://www.instagram.com/mazen_elbahtiny/?hl=ar" className="instagram">
            <FaInstagram size='1.5rem' color="#d62976"  />
            </a>
            <a target="_black" href="https://twitter.com/MazenElBahteny"className="twitter">
            <FaXTwitter size='1.5rem' color="#14171a"/>
            </a>
            <a target="_black" href="https://github.com/mazeneltayeb" className="github">  
            <FaGithub size='1.5rem' color="#fafafa" />
            </a>
            <a target="_black" href="https://www.linkedin.com/in/mazen-mohamed-2b3a72259/" className="github">  
            <FaLinkedinIn size='1.5rem' color="#fafafa" />
            </a>
        </div>
    )
}

export default SocialMedia;