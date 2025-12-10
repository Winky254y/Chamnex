import React from 'react'

export default function About(){
  return (
    <section id="about" style={{padding:'20px 16px',animation:'fadeIn 0.8s ease-out'}}>
      <div style={{maxWidth:900,margin:'0 auto',width:'100%'}}>
        <h2 style={{animation:'fadeInUp 0.8s ease-out',fontSize:'clamp(1.5rem, 5vw, 2rem)'}}>About ChamNex</h2>
        <p style={{color:'var(--muted)',animation:'fadeInUp 0.8s ease-out 0.1s backwards',fontSize:'clamp(14px, 2vw, 15px)'}}>Based in Mwiki, Kasarani, ChamNex Electrical Installation Services provides professional electrical work across Nairobi, Machakos, Kajiado, Kiambu and Thika. Our team is trained for both residential and commercial projects with a focus on safety and longevity.</p>
        <p style={{marginTop:12,animation:'fadeInUp 0.8s ease-out 0.2s backwards',fontSize:'clamp(14px, 2vw, 15px)'}}>We prioritise clean installations, modern materials and clear communication. Get a free site visit and quotation today.</p>
      </div>
    </section>
  )
}
