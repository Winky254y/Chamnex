import React from 'react'

export default function Hero(){
  return (
    <section className="hero hero--with-bg">
      <div className="hero-inner">
        <div>
          <div className="kicker">⚡ Your Trusted Electrical Partner</div>
          <h1>Power Your Future with <span className="accent">ChamNex</span></h1>
          <p className="hero-sub">Professional Electrical & Solar Installation Services in Nairobi & Beyond</p>
          <div className="hero-cta">
            <a className="btn btn-whatsapp" href="https://wa.me/254722905171" target="_blank" rel="noreferrer">WhatsApp Us Now</a>
            <a className="btn btn-call" href="tel:+254722905171">Call 0722 905 171</a>
          </div>
        </div>
        <aside className="hero-aside">
          <div className="why-card">
            <h3>Reliable · Affordable · Professional</h3>
            <p style={{color:'var(--muted)',marginTop:8}}>Get a FREE site visit and quotation when you contact us today!</p>
          </div>
        </aside>
      </div>
    </section>
  )
}
