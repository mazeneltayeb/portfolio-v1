import { useEffect, useState } from "react";
import "./skills.css"
import {FrameworkAndLibrary, FrontEnd, SoftSkills, Tools } from "../RateSkill";
import { Container } from "react-bootstrap";


function Skills(){
    const [rateSkill,setRateskill]=useState(<FrontEnd/>)
    const titlebutton = document.querySelectorAll(".button-skill div")
    const span = document.querySelectorAll(".span-container span")

        titlebutton.forEach((e)=>{
            e.onclick=function(){
        titlebutton.forEach((el)=>{
        el.classList.remove("active")
        })
        this.classList.add("active")
            }
        })  
return(
        <div className="skill-button-rate-contaier ">
        <div className="button-skill">
        <div onClick={()=>setRateskill(<FrontEnd />)} className="front-end"   >Front-End</div>
        <div onClick={()=>setRateskill(<Tools/>)} className="tool">Tools</div>
        <div onClick={()=>setRateskill(<SoftSkills/>)} className="soft-skill">Soft Skills</div>
        <div onClick={()=>setRateskill(<FrameworkAndLibrary/>)} className="library">Library</div>
        </div>
        <div className="rate-skill">
{rateSkill}
        </div>
    </div>
)
}
export default Skills;
















// titlebutton.forEach((e)=>{
//     if(e.classList.contains("active")){
//         span.forEach((e)=>{

//         })
//      }
// })
       
// titlebutton[0].classList.contains("active")?console.log("lll"):console.log("nono")
    // const [activeTog,setActiveTog]=useState(false)
    // const handledToggler=()=>{
    //     setActiveTog(!activeTog)
    //   }

           // if(e.classList.contains("active")){
        //     span.forEach((el)=>{
        //        console.log(el)
        //     })
        // }else{
        //     console.log("mmm")
        // }

    // titlebutton.forEach((e)=>{
    //     if(e.classList.contains("active")){
        
    //         span.forEach((el)=>{
    //             console.log(el)
    //         })
          
    //     }
    // })

 
  // span.style.width = span.dataset.rate

  //     <div className="skill-button-rate-contaier p-5">
//         <div className="button-skill">
//         <div onClick={()=>frontend.}  className="front-end"  >Front-End</div>
//         <div onClick={()=>setRateskill(<Tools/>)} className="tool">Tools</div>
//         <div onClick={()=>setRateskill(<SoftSkills/>)} className="soft-skill">Soft Skills</div>
//         <div onClick={()=>setRateskill(<FrameworkAndLibrary/>)} className="library">Library</div>
//         </div>
//         <div className="rate-skill">
//         <div className="rate-Skill-container frontend">
//             <div className="">
//             <h3>Front End</h3>
//             <div className="html">
//                 <h5>HTML5</h5>
//                 <div className="span-container">
//                 <span  data-rate="80%"></span>
//                 </div>
//             </div>
//             <div className="css">
//                 <h5>CSS3</h5>
//                 <div className="span-container">
//                 <span data-rate="70%"></span>
//                 </div>
//             </div>
//             <div className="javascript">
//                 <h5>JavaScript</h5>
//                 <div className="span-container">
//                 <span data-rate="90%"></span>
//                 </div>
//             </div>
//             <div className="oop">
//                 <h5>OOP</h5>
//                 <div className="span-container">
//                 <span data-rate="20%"></span>
//                 </div>
//             </div>
//             <div className="react">
//                 <h5>Reacr.js</h5>
//                 <div className="span-container">
//                 <span data-rate="20%"></span>
//                 </div>
//             </div>
//         </div>
//         </div>
//             <div className="rate-Skill-container tools">
//             <div className="tools">
//                         <h3>Tools</h3>
//                 <div className="git&github">
//                     <h5>Git&GitHub</h5>
//                     <div className="span-container">
//                     <span data-rate="60%"></span>
//                     </div>
//                 </div>
//                 <div className="visualstudiocode">
//                     <h5>Visual Studio Code</h5>
//                     <div className="span-container">
//                     <span data-rate="80%"></span>
//                     </div>
//                 </div>
//                 <div className="responsivedesign">
//                     <h5>Responsive Design</h5>
//                     <div className="span-container">
//                     <span data-rate="85%"></span>
//                     </div>
//                 </div>
//                     </div>
//                     </div>
//         <div className="rate-Skill-container softskills">
//   <div className="">
//     <h3>Soft Skills</h3>
//      <div className="problemsolving">
//         <h5>Problem Solving</h5>
//         <div className="span-container">
//         <span data-rate="100%"></span>
//         </div>
//     </div>
//     <div className="communication">
//         <h5>Communication</h5>
//         <div className="span-container">
//         <span data-rate="80%"></span>
//         </div>
//     </div>
//     <div className="creativity">
//         <h5>Creativity</h5>
//         <div className="span-container">
//         <span data-rate="85%"></span>
//         </div>
//     </div>
//     <div className="organization">
//         <h5>Organization</h5>
//         <div className="span-container">
//         <span data-rate="90%"></span>
//         </div>
//     </div>
//     <div className="customerservice">
//         <h5>Customer Service</h5>
//         <div className="span-container">
//         <span data-rate="80%"></span>
//         </div>
//     </div>
//     <div className="researcher">
//         <h5>Researcher</h5>
//         <div className="span-container">
//         <span data-rate="87%"></span>
//         </div>
//     </div>
//     <div className="attentiontodetail">
//         <h5>Attention To Detail</h5>
//         <div className="span-container">
//         <span data-rate="92%"></span>
//         </div>
//     </div>
   
//   </div>
//         </div>
//         <div className="rate-Skill-container library">
//             <div className="">
//             <h3>Library</h3>
//          <div className="bootstrap">
//             <h5>Bootstrap</h5>
//             <div className="span-container">
//             <span data-rate="88%"></span>
//             </div>
//         </div>
//         <div className="twilightcss">
//             <h5>Twilight CSS</h5>
//             <div className="span-container">
//             <span data-rate="70%"></span>
//             </div>
//         </div>
//         <div className="fontawesome">
//             <h5>Font Awesome</h5>
//             <div className="span-container">
//             <span data-rate="75%"></span>
//             </div>
//         </div>
//         <div className="axios">
//             <h5>Axios</h5>
//             <div className="span-container">
//             <span data-rate="80%"></span>
//             </div>
//         </div>
//       </div>
//             </div>
//         </div>
//         </div>