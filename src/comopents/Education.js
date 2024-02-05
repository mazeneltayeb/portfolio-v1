import "./education.css"
function Education(){
return(
    <>
    <div className="education text-center p-5 mt-5 ">
    <h1>My <span>Education</span></h1>
    <div className="row grid gap-3 row-gap-5   justify-content-center mb-5">
        <div className="acountant col-lg-4 col-md-6 col-sm-12 ">
            <h6>2015 - 2021</h6>
            <h3>Bachelor of Commerce</h3>
            <h4>Faculty of Commerce,</h4>
            <h5>From : Suez Canal University</h5>
            <p>
            I majored in accounting
            </p>
        </div>
        <div className="elzero col-lg-4 col-md-6 col-sm-12 ">
            <h6>2023 - 2024</h6>
            <h3>Front-End Developer Track</h3>
            <h4>Self-Study,</h4>
            <h5> From : Elzero Web School</h5>
           <p>I learned : HTML - CSS - JavaScript - OOP - Responsive Web Design - Git & Github ,and Bootstrap</p>
        </div>
        <div className="react col-lg-4 col-md-6 col-sm-12 ">
            <h6>2024</h6>
            <h3>Front-End Tools (React.js)</h3>
            <h4>Self-Study,</h4>
            <h5> From : Multiple Sources</h5>
           <p>I learned : React.js - React Router - Redux-Toolkit - Tailwind CSS</p>
        </div>
    </div>
    </div>
    </>
)
}
export default Education;