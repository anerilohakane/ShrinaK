"use client";

import Image from "next/image";

export default function Results() {
  return (
    <section id="results" style={{ background: 'var(--primary)', color: '#fff', padding: '6rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '2rem', alignItems: 'center' }}>
        
        {/* Left Column */}
        <div>
          <span style={{ 
            display: 'block',
            fontSize: '0.65rem', 
            fontWeight: '600', 
            color: 'var(--accent)', 
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>Real People. Real Results.</span>
          <h2 style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: '3rem', 
            fontWeight: '400',
            lineHeight: '1.1',
            marginBottom: '2rem'
          }}>Transformations<br/>That Speak</h2>
          <button className="btn" style={{ 
            background: 'transparent', 
            color: '#fff', 
            padding: '0.8rem 1.5rem', 
            borderRadius: '9999px',
            fontSize: '0.85rem',
            border: '1px solid rgba(255,255,255,0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: 'pointer'
          }}>
            View More Results <span>→</span>
          </button>
        </div>

        {/* Middle Column: Before/After */}
        <div style={{ position: 'relative', height: '400px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)' }}>
           {/* Static placeholder for Before/After */}
           <div style={{ display: 'flex', height: '100%' }}>
             <div style={{ flex: 1, position: 'relative' }}>
               <Image src="/hero_image.jpg" alt="Before" fill style={{ objectFit: 'cover', filter: 'grayscale(50%) contrast(0.8)' }} />
               <span style={{ position: 'absolute', bottom: '1rem', left: '1.5rem', fontSize: '0.75rem', letterSpacing: '0.1em' }}>BEFORE</span>
             </div>
             <div style={{ width: '2px', background: '#fff', position: 'relative', zIndex: 10 }}>
               <div style={{ 
                 position: 'absolute', 
                 top: '50%', 
                 left: '50%', 
                 transform: 'translate(-50%, -50%)',
                 width: '32px',
                 height: '32px',
                 background: '#fff',
                 borderRadius: '50%',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 color: 'var(--primary)',
                 fontSize: '0.6rem',
                 fontWeight: 'bold',
                 boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
               }}>
                 ◀▶
               </div>
             </div>
             <div style={{ flex: 1, position: 'relative' }}>
               <Image src="/hero_image.jpg" alt="After" fill style={{ objectFit: 'cover', filter: 'brightness(1.1) contrast(1.1)' }} />
               <span style={{ position: 'absolute', bottom: '1rem', right: '1.5rem', fontSize: '0.75rem', letterSpacing: '0.1em' }}>AFTER</span>
             </div>
           </div>
        </div>

        {/* Right Column */}
        <div style={{ paddingLeft: '2rem' }}>
          <h3 style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: '1.75rem', 
            fontWeight: '400',
            fontStyle: 'italic',
            lineHeight: '1.3',
            marginBottom: '1rem'
          }}>"Subtle changes.<br/>A more confident me."</h3>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', marginBottom: '3rem' }}>— A Real Patient</p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', background: 'transparent', color: '#fff', cursor: 'pointer' }}>←</button>
            <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)', background: 'transparent', color: '#fff', cursor: 'pointer' }}>→</button>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.1em' }}>01 <span style={{ color: 'rgba(255,255,255,0.3)' }}>/ 04</span></span>
          </div>
        </div>

      </div>
    </section>
  );
}
