
import { Container } from "react-bootstrap";

import "./project.css"
import { AllProject,Bootestrap,Javascript, React } from "./ProjectCard";
import { useState } from "react";
function Project (){
    const [project,setProject]=useState(<AllProject/>)
    const activeButtom = document.querySelectorAll(".project-title div")
    activeButtom.forEach((e)=>{
        e.onclick=function(){
            activeButtom.forEach((el)=>{
                el.classList.remove("active-buttom")
            })
            e.classList.add("active-buttom")
        }
    })
return(
    <div className="project-conteiner">
 
        <div className="project-title">
        <div className="active-buttom" onClick={()=>setProject(<AllProject/>)}>All</div>
            {/* <div onClick={()=>setProject(<AllProject/>)}>HTML,CSS</div> */}
            <div onClick={()=>setProject(<Bootestrap/>)}>Bootestrap</div>
            <div onClick={()=>setProject(<Javascript/>)}>JavaScript</div>
            <div onClick={()=>setProject(<React/>)}>React</div>
        </div>
        <div className="product-container row row-gap-3">
       {project}
        </div>
   
    </div>
)
}

export default Project;