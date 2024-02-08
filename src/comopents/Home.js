import { Container,Row ,Image } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import img from '../img/personal-img-home.png'
import "./home.css"
import SocialMedia from "./SocialMedia";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Home (){
// 
return(
  <>
   <Container className="home">
<Row className="home-row text-center  ">
    <div className="main-description col-lg-6 col-md-6 col-sm-12">
    <Card>
      <Card.Body>
        <div className="my-name">
        <Card.Title>Hi,Iam Mazen Mohamed</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Front-End Developer</Card.Subtitle>
        </div>
        <Card.Text>
  I am a Fresh Front-End Developer live in Ismaiali,Egypt
  i looking for job opportunity In order to show everything
  I have learned in order to build websites that are more responsive and have their own character
        </Card.Text>
        <div className="card-buttom-container">
        <a className="resume" target="_blank" href="https://drive.google.com/file/d/1SpNT1xJVu_2zPiFbSjqbUr4a3ZcjkAIR/view?usp=drive_link" >Resume <FaArrowUpRightFromSquare /> </a>
        </div>
          <div className="social-media-home">
            <SocialMedia />
          </div>
      </Card.Body>
      
    </Card>
    </div>
    <div  className="prsonal-img col-lg-6 col-md-6 col-sm-12">
    <Image className="main-img"  src={img}/>
    </div>
</Row>
    </Container>
  </>
   
)
}

export default Home ;