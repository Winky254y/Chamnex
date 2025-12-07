import React from 'react'

export default function Header(){
  return (
    <header className="site-header site-header--navy">
      <div className="brand">
        <img src="/src/assets/logo.svg" alt="ChamNex" className="logo-img" />
      </div>
      <nav className="nav">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact" className="cta">Contact</a>
        <button className="hamburger" aria-label="menu">☰</button>
      </nav>
    </header>
  )
}
