import '../styles/index.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-black flex justify-center text-white text-xl p-12'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </div>
  )
}

export default Footer;
