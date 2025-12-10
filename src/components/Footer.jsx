import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div style={{maxWidth:900,margin:'0 auto',width:'100%'}}>
        <div style={{fontWeight:700,fontSize:'clamp(14px, 3vw, 16px)'}}>ChamNex Electrical Installation Services</div>
        <div style={{color:'var(--muted)',marginTop:4,fontSize:'clamp(12px, 2vw, 13px)'}}>Serving Nairobi | Machakos | Kajiado | Kiambu | Thika</div>
        <div style={{marginTop:6,color:'var(--muted)',fontSize:'clamp(12px, 2vw, 13px)'}}>© {new Date().getFullYear()} ChamNex — All rights reserved</div>
      </div>
    </footer>
  )
}
