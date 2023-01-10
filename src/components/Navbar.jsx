import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/sakshyam.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import '../styles/index.css';

function Navbar() {
  return (
    <nav className="bg-black flex items-center justify-between">
      <Link to="/"><img className="w-10 m-6" src={logo} alt='Sakshyam' /></Link>
      <ul className='inline-flex'>
        <li><Link className="text-white m-5" to="about">About</Link></li>
        <li><Link className="text-white m-5" to="projects">Projects</Link></li>
        <li><Link className="text-white m-5" to="contact">Contact</Link></li>
        <li><Link className="text-white m-5" to="/">Resume</Link></li>
      </ul>
      <ul className='inline-flex'>
        <li><a href="https://github.com/Moonholiday" target='_blank' rel='noreferrer'><img className="w-10 m-5" src={github} alt='github' /></a></li>
        <li><a href="https://www.linkedin.com/in/sakshyam-shrestha-b00a25243/" target='_blank' rel='noreferrer'><img className="w-10 m-5" src={linkedin} alt='linkedin' /></a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
