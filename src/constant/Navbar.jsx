import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import { TypingEffect } from '../components'

const Navbar = () => {
  return (
    <div className='header'>
      <div className='nav-bar'>
        <div className='logo'>INVADER</div>
        <div className='nav-links'>
          <ul>
            {['Contact', 'Pricing', 'Projects', 'Skills', 'Blog'].map((e) => (
              <li key={e}>
                <Link to={`/${e}`}>{e}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='section-content'>
        <div className='content'>
          <h1>Brayan Pulido</h1>
          <TypingEffect />
        </div>
      </div>
    </div>
  )
}

export default Navbar
