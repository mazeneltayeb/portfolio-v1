import { useEffect } from "react"
import "./rateSkills.css"
import { FaBootstrap } from "react-icons/fa";



import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";

const titlebutton = document.querySelectorAll(".skill-container .skill-title div")
const span = document.querySelectorAll(".span-container span")
export function FrontEnd(){
    useEffect(()=>{
        const span = document.querySelectorAll(".span-container span")
       span.forEach((span)=>{
          span.style.width = span.dataset.rate
      })
      },[])

    return(
        <div className="rate-Skill-container">
<div className="frontend">
    <h3>Front End</h3>
    <div className="html">
        <h5>HTML5</h5>
        <div className="span-container">
        <span  data-rate="93%"></span>
        </div>
    </div>
    <div className="css">
        <h5>CSS3</h5>
        <div className="span-container">
        <span data-rate="95%"></span>
        </div>
    </div>
    <div className="javascript">
        <h5>JavaScript</h5>
        <div className="span-container">
        <span data-rate="90%"></span>
        </div>
    </div>
    <div className="oop">
        <h5>OOP</h5>
        <div className="span-container">
        <span data-rate="80%"></span>
        </div>
    </div>
    <div className="react">
        <h5>Reacr.js</h5>
        <div className="span-container">
        <span data-rate="70%"></span>
        </div>
    </div>
    <div className="icons">
        <span className="white-background-color-icons">
        <FaHtml5 color="#e34c26"/>
        </span>
        <span className="white-background-color-icons">
    <FaCss3Alt color="#2965f1" />
    </span>
    <span className="black-background-color-icons">
    <IoLogoJavascript color="#f0db4f" />
    </span>
    <FaReact color="#087EA4" />
            </div>
  </div>

        </div>
  
    )
}
export function Tools(){
     useEffect(()=>{
      const span = document.querySelectorAll(".span-container span")
     span.forEach((span)=>{
        span.style.width = span.dataset.rate
    })
    },[])
    return(
        <div className="rate-Skill-container">
 <div className="tools">
            <h3>Tools</h3>
     <div className="git&github">
        <h5>Git&GitHub</h5>
        <div className="span-container">
        <span data-rate="60%"></span>
        </div>
    </div>
    <div className="visualstudiocode">
        <h5>Visual Studio Code</h5>
        <div className="span-container">
        <span data-rate="80%"></span>
        </div>
    </div>
    <div className="redux">
        <h5>Redux Toolkit</h5>
        <div className="span-container">
        <span data-rate="80%"></span>
        </div>
    </div>
    <div className="responsivedesign">
        <h5>Responsive Design</h5>
        <div className="span-container">
        <span data-rate="85%"></span>
        </div>
    </div>
    <div className="icons">
        <span className="git-icon">
        <FaGitAlt color="#e34c26"/>
        </span>
        <span className="">
        <FaGithub color="white" />
    </span>
    <span className="">
    <SiVisualstudiocode color="#0078d7" />
    </span>
    <TbBrandRedux color="#764abc"/>
            </div>
        </div>
        </div>
       
    )
}

export function SoftSkills(){
    useEffect(()=>{
        const span = document.querySelectorAll(".span-container span")
       span.forEach((span)=>{
          span.style.width = span.dataset.rate
      })
      },[])
    return(
        <div className="rate-Skill-container">
  <div className="softskills">
    <h3>Soft Skills</h3>
     <div className="problemsolving">
        <h5>Problem Solving</h5>
        <div className="span-container">
        <span data-rate="100%"></span>
        </div>
    </div>
    <div className="communication">
        <h5>Communication</h5>
        <div className="span-container">
        <span data-rate="80%"></span>
        </div>
    </div>
    <div className="creativity">
        <h5>Creativity</h5>
        <div className="span-container">
        <span data-rate="85%"></span>
        </div>
    </div>
    <div className="organization">
        <h5>Organization</h5>
        <div className="span-container">
        <span data-rate="90%"></span>
        </div>
    </div>
    <div className="customerservice">
        <h5>Customer Service</h5>
        <div className="span-container">
        <span data-rate="80%"></span>
        </div>
    </div>
    <div className="researcher">
        <h5>Researcher</h5>
        <div className="span-container">
        <span data-rate="87%"></span>
        </div>
    </div>
    <div className="attentiontodetail">
        <h5>Attention To Detail</h5>
        <div className="span-container">
        <span data-rate="92%"></span>
        </div>
    </div>
   
  </div>
        </div>

    )
}

export function FrameworkAndLibrary(){
    useEffect(()=>{
        const span = document.querySelectorAll(".span-container span")
       span.forEach((span)=>{
          span.style.width = span.dataset.rate
      })
      },[])

      return(
     
        <div className="rate-Skill-container">
            <div className="library">
            <h3>Library</h3>
         <div className="bootstrap">
            <h5>Bootstrap</h5>
            <div className="span-container">
            <span data-rate="88%"></span>
            </div>
        </div>
        <div className="twilightcss">
            <h5>Twilight CSS</h5>
            <div className="span-container">
            <span data-rate="70%"></span>
            </div>
        </div>
        <div className="fontawesome">
            <h5>Font Awesome</h5>
            <div className="span-container">
            <span data-rate="75%"></span>
            </div>
        </div>
        <div className="axios">
            <h5>Axios</h5>
            <div className="span-container">
            <span data-rate="80%"></span>
            </div>
        </div>
        <div className="sweetalirt">
            <h5>sweetalirt</h5>
            <div className="span-container">
            <span data-rate="80%"></span>
            </div>
        </div>
            <div className="icons">
            <FaReact color="#E91E63" />
            <BiLogoTailwindCss color="#38BDF8" />
            <span className="white-background-color-icons">
            <FaBootstrap color="#7311F5" />
            </span>
            </div>
      </div>
            </div>
        
      )
}




