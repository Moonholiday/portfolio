import React from 'react'
import '../styles/styles.css'
import logo from '../sakshyam.png'
import github from '../github.png'
import linkedin from '../linkedin.png'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav className="navbar" data-scroll-section>
      <Link to="/" className='logo'><img src={logo} alt='Sakshyam'/></Link>
      <ul className='left'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      <ul className='right'>
        <li><a href="https://github.com/Moonholiday" target='_blank'><img src={github} alt='github'/></a></li>
        <li><a href="https://www.linkedin.com/in/sakshyam-shrestha-b00a25243/" target='_blank'><img src={linkedin} alt='linkedin'/></a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
