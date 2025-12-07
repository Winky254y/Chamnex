import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Areas from './components/Areas'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Areas />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
