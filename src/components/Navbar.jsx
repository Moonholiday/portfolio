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
      </ul>
      <ul className='right'>
        <li><a href="www.google.com"><img src={github} alt='github'/></a></li>
        <li><Link to="/contact"><img src={linkedin} alt='linkedin'/></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
