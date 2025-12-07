import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div style={{maxWidth:900,margin:'0 auto'}}>
        <div style={{fontWeight:700}}>ChamNex Electrical Installation Services</div>
        <div style={{color:'var(--muted)',marginTop:6}}>Serving Nairobi | Machakos | Kajiado | Kiambu | Thika</div>
        <div style={{marginTop:8,color:'var(--muted)'}}>© {new Date().getFullYear()} ChamNex — All rights reserved</div>
      </div>
    </footer>
  )
}
