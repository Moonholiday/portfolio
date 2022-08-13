import React from 'react'
import '../styles/styles.css'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className="footer" data-scroll-section>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </div>
  )
}

export default Footer;
