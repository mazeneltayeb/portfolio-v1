import { useState } from "react";
import { FrameworkAndLibrary, FrontEnd, SoftSkills, Tools} from "./RateSkill";
import "./skill.css"
import { Container } from "react-bootstrap";

const span = document.querySelectorAll(".span-container span")
function Skill (){

const divs = document.querySelectorAll(".skill-container .skill-title div")



const [rate,setRate]=useState(<FrontEnd/>)

    return(
        <section className="skill-container p-5">
          <div className="ttt">
<div className="row  justify-content-between">
<div className="skill-title-container col-lg-6 col-md-6  col-sm-6 ">
  <div className="skill-title row gap-5 row-gap-5 ">
        <div onClick={()=>setRate(<FrontEnd />)}  className="front-end col-lg-6 col-md-6 col-sm-6">Front-End</div>
        <div onClick={()=>setRate(<Tools/>)}  className="tool col-lg-6 col-md-6 col-sm-6">Tools</div>
        <div onClick={()=>setRate(<SoftSkills/>)} className="soft-skill col-lg-6 col-md-6 col-sm-6">Soft Skills</div>
        <div onClick={()=>setRate(<FrameworkAndLibrary/>)} className="library col-lg-6 col-md-6 col-sm-6">Library</div>
  </div>
    </div>
    <div className="skill-rate row col-lg-6 col-md-6  col-sm-6">
      <div>
        {rate}
      </div>
    </div>
</div>
</div>
</section>
    )
}

export default Skill;

