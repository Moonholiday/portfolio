import React from 'react';
import '../styles/styles.css';
import logo from '../assets/sakshyam.png';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import { Link } from 'react-scroll';

function Navbar () {
  return (
    <nav className="navbar" data-scroll-section>
      <Link to="home" activeClassName='active' offset={-300} spy={true} smooth={true}  duration={500} className='logo'><img src={logo} alt='Sakshyam'/></Link>
      <ul className='left'>
        <li><Link to="about" activeClassName='active' offset={-300} spy={true} smooth={true} duration={250}>About</Link></li>
        <li><Link to="projects" activeClassName='active' offset={-300} spy={true} smooth={true}  duration={250}>Projects</Link></li>
        <li><Link to="contact" activeClassName='active' offset={-300} spy={true} smooth={true}  duration={250}>Contact</Link></li>
        <li><Link to="/" activeClassName='active' offset={-300} spy={true} smooth={true}  duration={250}>Resume</Link></li>
      </ul>
      <ul className='right'>
        <li><a href="https://github.com/Moonholiday" target='_blank' rel='noreferrer'><img src={github} alt='github'/></a></li>
        <li><a href="https://www.linkedin.com/in/sakshyam-shrestha-b00a25243/" target='_blank' rel='noreferrer'><img src={linkedin} alt='linkedin'/></a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
