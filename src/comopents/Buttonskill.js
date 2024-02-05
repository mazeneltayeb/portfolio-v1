import { useState } from "react"
import { FrameworkAndLibrary, FrontEnd, SoftSkills, Tools} from "./RateSkill";




export function FrontEndButton(){
   
    return(
<div  className="front-end col-lg-6 col-md-6 col-sm-12">Front End</div>
    )
}
export function ToolsButton(){

    return(
<div  className="tool col-lg-6 col-md-6 col-sm-12">Tools</div>
    )
}
export function SoftSkillsButton(){
 
    return(
<div className="soft-skill col-lg-6 col-md-6 col-sm-12">Soft Skills</div>
    )
}
export function LibraryButton(){
 
    return(
<div  className="soft-skill col-lg-6 col-md-6 col-sm-12">Library</div>
    )
}