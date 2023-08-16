import React from 'react'
import logo from '../logo.png'
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand" href="/"><img className="logo" src={ logo} alt="logo..." /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#header">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutme">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#experience">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact Me</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
  )
}
