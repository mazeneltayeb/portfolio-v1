
import './App.css';
import Footer from './Footer';
import About from './comopents/About';
import Contact from './comopents/Contact';
import Education from './comopents/Education';
import Home from './comopents/Home';
import NavBar from './comopents/NavBar';
import Skill from './comopents/Skill';
import Project from './comopents/project/Projects';
import Skills from './comopents/skills/Skills';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='education' element={<Education/>}/>
      <Route path='skills' element={<Skills/>}/>
      <Route path='project' element={<Project/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
