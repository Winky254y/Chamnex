import React from 'react'

const items = [
  {title:'Solar Panel Installation', desc:'High-efficiency solar systems tailored to your needs — save on electricity.'},
  {title:'Interior & Exterior Lighting', desc:'Design-led lighting that elevates homes and commercial spaces.'},
  {title:'Meter Board Repairs & Upgrades', desc:'Safe upgrades and timely repairs to keep power flowing.'},
  {title:'Full Electrical Installations', desc:'New builds, rewiring, and electrical fit-outs for homes & businesses.'},
  {title:'Fault Tracing & Repairs', desc:'Quick diagnostics and fixes to minimise downtime.'},
  {title:'Maintenance Contracts', desc:'Regular servicing and priority response plans.'}
]

export default function Services(){
  return (
    <section id="services" className="services">
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <h2>What We Offer</h2>
        <p style={{color:'var(--muted)'}}>From solar installations to complete electrical works – you name it, we fix it!</p>
        <div className="services-grid" style={{marginTop:18}}>
          {items.map((s,idx)=> (
            <div key={idx} className="service-card">
              <div style={{display:'flex',gap:12,alignItems:'center'}}>
                <div style={{width:56,height:56,borderRadius:12,background:'linear-gradient(135deg,var(--accent),rgba(255,155,26,0.8))',display:'flex',alignItems:'center',justifyContent:'center',color:'#07111a',fontWeight:800}}>⚡</div>
                <div style={{flex:1}}>
                  <h3>{s.title}</h3>
                  <p style={{color:'#567287'}}>{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
