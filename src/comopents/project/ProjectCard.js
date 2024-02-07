import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projects from './project.json'
import "./project.css"
import { FaGithub } from "react-icons/fa6";
import { BsBrowserChrome } from "react-icons/bs";


export function AllProject(){
    return (
      <>
      {projects.map((project)=>{
      return(
      <Card className=' col-lg-3 col-md-6 col-sm-6'   key={project.id} >
          <Card.Img variant="top" src={project.image} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>
            {project.description}
            </Card.Text>
            <div className='buttom'>
      <Button href={project.githup}  target="_blank" variant="primary">
      <FaGithub />
      </Button>
      <Button href={project.link}  target="_blank" variant="primary">
      <BsBrowserChrome />
      </Button>
      </div>
          </Card.Body>
        </Card>
      )
      })}
      </>
  
    )
}

export function Bootestrap(){
  return (
    <>
    {projects.map((project)=>{
      if(project.category === "bootstrap"){
        return(
    <Card className='col-lg-3 col-md-6 col-sm-6'   key={project.id} >
    <Card.Img variant="top" src={project.image} />
    <Card.Body>
      <Card.Title>{project.title}</Card.Title>
      <Card.Text>
      {project.description}
      </Card.Text>
      <div className='buttom'>
      <Button href={project.githup}  target="_blank" variant="primary">
      <FaGithub />
      </Button>
      <Button href={project.link}  target="_blank" variant="primary">
      <BsBrowserChrome />
      </Button>
      </div>
    </Card.Body>
  </Card>
        )
      }
    })}
    </>

  )
}


export function Javascript(){
  return (
    <>
    {projects.map((project)=>{
      if(project.category === "javascript"){
        return(
    <Card className=' col-lg-3 col-md-6 col-sm-6'   key={project.id} >
    <Card.Img variant="top" src={project.image} />
    <Card.Body>
      <Card.Title>{project.title}</Card.Title>
      <Card.Text>
       {project.description}
      </Card.Text>
      <div className='buttom'>
      <Button href={project.githup}  target="_blank" variant="primary">
      <FaGithub />
      </Button>
      <Button href={project.link}  target="_blank" variant="primary">
      <BsBrowserChrome />
      </Button>
      </div>
    </Card.Body>
  </Card>
        )
      }
    })}
    </>

  )
}

export function React(){
  return (
    <>
    {projects.map((project)=>{
      if(project.category === "react"){
        return(
    <Card className='col-lg-3 col-md-6 col-sm-6'   key={project.id} >
    <Card.Img variant="top" src={project.image} />
    <Card.Body>
      <Card.Title>{project.title}</Card.Title>
      <Card.Text>
      {project.description}
      </Card.Text>
      <div className='buttom'>
      <Button href={project.githup}  target="_blank" variant="primary">
      <FaGithub />
      </Button>
      <Button href={project.link}  target="_blank" variant="primary">
      <BsBrowserChrome />
      </Button>
      </div>
    </Card.Body>
  </Card>
        )
      }
    })}
    </>

  )
}
