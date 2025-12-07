import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="contact">
      <div className="contact-grid">
        <div className="panel">
          <h2>Contact Us</h2>
          <p style={{color:'var(--muted)'}}>Main office: Mwiki, Kasarani — We serve Nairobi & nearby counties.</p>
          <p style={{marginTop:8,fontWeight:700}}>Call / WhatsApp: <a href="tel:+254722905171">0722 905 171</a></p>
          <p style={{color:'var(--muted)',marginTop:8}}>Send an email or drop a message via WhatsApp for a FREE site visit & quotation.</p>
        </div>

        <div className="panel">
          <h3>Quick Enquiry</h3>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We will contact you shortly.')}}>
            <div style={{display:'grid',gap:8}}>
              <input placeholder="Your name" style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent',color:'inherit'}} required />
              <input placeholder="Phone or WhatsApp" style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent',color:'inherit'}} required />
              <textarea placeholder="Project details or message" rows={4} style={{padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.04)',background:'transparent',color:'inherit'}} />
              <button className="btn btn-call" type="submit">Request Free Visit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
