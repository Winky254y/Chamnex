import React, { useState } from 'react'

export default function Contact(){
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    e.target.reset()
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-grid">
        <div className="panel">
          <h2>Contact Us</h2>
          <p style={{color:'var(--muted)'}}>Main office: Mwiki, Kasarani — We serve Nairobi & nearby counties.</p>
          <p style={{marginTop:8,fontWeight:700}}><a href="tel:+254722905171" style={{color:'var(--accent)',textDecoration:'none',transition:'all 0.3s ease'}} onMouseEnter={(e) => e.target.style.textDecoration = 'underline'} onMouseLeave={(e) => e.target.style.textDecoration = 'none'}>Call / WhatsApp: 0722 905 171</a></p>
          <p style={{color:'var(--muted)',marginTop:8}}>Send an email or drop a message via WhatsApp for a FREE site visit & quotation.</p>
        </div>

        <div className="panel">
          <h3>Quick Enquiry</h3>
          <form onSubmit={handleSubmit}>
            <div style={{display:'grid',gap:8}}>
              <input placeholder="Your name" style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent',color:'inherit',fontFamily:'inherit'}} required />
              <input placeholder="Phone or WhatsApp" style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent',color:'inherit',fontFamily:'inherit'}} required />
              <textarea placeholder="Project details or message" rows={4} style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent',color:'inherit',fontFamily:'inherit',resize:'none'}} />
              <button className="btn btn-call" type="submit">Request Free Visit</button>
              {submitted && <div style={{padding:10,background:'rgba(24, 195, 123, 0.2)',color:'var(--accent-2)',borderRadius:8,textAlign:'center',fontWeight:700,animation:'fadeIn 0.3s ease'}}>✓ Thanks! We'll contact you shortly.</div>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
