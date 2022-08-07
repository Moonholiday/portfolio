import React from 'react'
import '../styles/styles.css'
import logo from '../sakshyam.png'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav className="navbar" data-scroll-section>
      <h1 className="logo"><Link to="/"><img src={logo} /></Link></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/more">More</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
