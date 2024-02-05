import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./navbar.css"
import { useState } from 'react';

import { Link } from 'react-router-dom';



function NavBar(){
  const [activeTog,setActiveTog]=useState(false)
  const handledToggler=()=>{
    setActiveTog(!activeTog)
  }


  window.onscroll=function(){
    let scrollerY=document.querySelector(" .scroll-y ")
let heigth = document.documentElement.scrollHeight - document.documentElement.clientHeight
let scrollTop = document.documentElement.scrollTop
scrollerY.style.width= `${scrollTop / heigth * 100 }%`

  }
    return(
      <>
            <Navbar expand="lg" className="main-nav sticky-top relative ">
              <Container> 
                <Link className='navbar-brand' to="/" >Mazen.</Link>
                <div aria-controls="basic-navbar-nav"  className={`toggler ${activeTog ? "active":""}`} onClick={handledToggler}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <ul>
                  <Nav className={ `pt-3    ms-lg-auto ${activeTog ? "active":""} il-container`}>
                    <Link className='nav-link'  to="/" >Home</Link>
                    <Link className='nav-link'  to="/about">About</Link>
                    <Link className='nav-link'  to="/education">Education</Link>
                    <Link className='nav-link'  to="/skills">Skills</Link>
                    <Link className='nav-link'  to="/project">Project</Link>
                    <Link className='nav-link'  to="/contact">Contoct</Link>
                  </Nav>
                </ul>
              </Container>
              <div className='scroll-y-contaier'>
              <div className="scroll-y abslute"></div>
              </div>
            </Navbar>
            </>
    )
}

export default NavBar;