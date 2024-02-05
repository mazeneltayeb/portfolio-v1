
import "./about.css"
import img from "../img/personal-img-about - Copy.jpeg"
function About(){
    return(
      < div className="about">
        <h1 className="mb-4 h1-about">About <span>Me</span></h1>
      <div className="main-about d-flex flex-column  text-center ">
        <div className=" img-container align-self-center  mb-4">
          <img  src={img}/>
        </div>
        <h2 className="mb-3">Front-End Developer</h2>
        <p>I am Mazen Muhammad. I live in Ismailia, one of the governorates of Egypt. I graduated from the Faculty of Commerce, Suez Canal University.
           During my studies at the university, I started many trade projects (printing paper and preparing study materials for students - a small café - raising and selling chickens - motorcycle trading)
            and in the last year in At university, I worked as an accountant in one of the wholesale food trading companies, and after I graduated and completed my conscription period in the army,
            I worked as a data entry person in a protection company, one of the investment companies of the Egyptian Ministry of Interior. While working, I studied and learned in order to be a destination developer.
           I learned on my own and now I am a front-end developer waiting for the opportunity to show everything I have learned to create responsive and special websites.</p>
    </div>
      </div>
    
    )
}

export default About;