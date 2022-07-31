import React from 'react'
import '../styles/styles.css'

function Navbar () {
  return (
    <nav className="navbar" data-scroll-section>
      <h1 className="logo"><a href="/">Sakshyam</a></h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">More</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
