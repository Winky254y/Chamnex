import React from 'react'

const sample = [
  {tag:'Solar', title:'Solar Roof Install', img:'/src/assets/placeholder1.svg'},
  {tag:'Lighting', title:'Outdoor Garden Lighting', img:'/src/assets/placeholder2.svg'},
  {tag:'Electrical', title:'Meter Board Installation', img:'/src/assets/placeholder3.svg'},
  {tag:'Electrical', title:'Rewiring Project', img:'/src/assets/placeholder4.svg'}
]

export default function Portfolio(){
  return (
    <section className="portfolio-section">
      <div style={{maxWidth:1100,margin:'0 auto',width:'100%'}}>
        <h2 style={{textAlign:'center'}}>Our Work</h2>
        <p style={{textAlign:'center',color:'var(--muted)'}}>See the quality of our installations and repairs across Kenya</p>
        <div style={{display:'flex',gap:8,justifyContent:'center',marginTop:14,flexWrap:'wrap'}}>
          <button className="tag-btn active">All</button>
          <button className="tag-btn">Solar</button>
          <button className="tag-btn">Lighting</button>
          <button className="tag-btn">Electrical</button>
        </div>

        <div className="portfolio-grid" style={{marginTop:14,display:'grid',gridTemplateColumns:'repeat(1,1fr)',gap:12}}>
          {sample.map((p,idx)=> (
            <div key={idx} className="portfolio-card">
              <div className="portfolio-img" style={{backgroundImage:`url(${p.img})`}} />
              <div style={{padding:10}}>
                <div className="portfolio-tag">{p.tag}</div>
                <h3 style={{margin:'6px 0 0 0',fontSize:'clamp(14px, 3vw, 16px)'}}>{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
