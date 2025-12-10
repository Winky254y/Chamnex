import React from 'react'

const areas = [
  {title:'Nairobi', desc:'Our home base - serving all of Nairobi County'},
  {title:'Machakos', desc:'Machakos town and surrounding areas'},
  {title:'Kajiado', desc:'Kajiado County and nearby regions'},
  {title:'Kiambu', desc:'Kiambu County services and suburbs'}
]

export default function Areas(){
  return (
    <section style={{padding:'32px 24px',background:'linear-gradient(180deg, rgba(7,18,34,0.9), rgba(7,18,34,0.95))',color:'#fff',animation:'fadeIn 0.8s ease-out'}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <h2 style={{textAlign:'center',animation:'fadeInUp 0.8s ease-out'}}>Areas We Serve</h2>
        <p style={{textAlign:'center',color:'rgba(255,255,255,0.7)',animation:'fadeInUp 0.8s ease-out 0.1s backwards'}}>We proudly serve the greater Nairobi metropolitan area and surrounding counties</p>
        <div style={{marginTop:18,display:'grid',gap:12}}>
          {areas.map((a,idx)=> (
            <div key={idx} style={{border:'1px solid rgba(255,165,0,0.14)',padding:20,borderRadius:12,background:'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)',animation:`fadeInUp 0.8s ease-out ${0.2 + idx * 0.1}s backwards`,transition:'all 0.3s ease',cursor:'pointer'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255, 155, 26, 0.5)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,165,0,0.14)'}>
              <h3 style={{margin:'0 0 6px 0'}}>{a.title}</h3>
              <p style={{margin:0,color:'rgba(255,255,255,0.8)'}}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
