"use client";

import Image from "next/image";

export default function Results() {
  const images = [
    "/result-1.jpg",
    "/result-2.jpg",
    "/result-3.jpg",
    "/result-4.jpg"
  ];

  return (
    <section id="results" style={{ background: 'var(--primary)', color: '#fff', padding: '6rem 0' }}>
      <div className="container">
        
        {/* Top Text Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ 
            display: 'block',
            fontSize: '0.65rem', 
            fontWeight: '600', 
            color: 'var(--accent)', 
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>Real People. Real Results.</span>
          <h2 style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: '3.5rem', 
            fontWeight: '400',
            lineHeight: '1.1',
            marginBottom: '1rem'
          }}>Transformations That Speak</h2>
          <p style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: '1.5rem', 
            fontWeight: '400',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.7)'
          }}>"Subtle changes. A more confident me."</p>
        </div>

        {/* Horizontal Image Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
           {images.map((src, idx) => (
             <div key={idx} style={{ position: 'relative', height: '400px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
               <Image 
                 src={src} 
                 alt={`Transformation ${idx + 1}`} 
                 fill 
                 style={{ objectFit: 'cover' }} 
                 sizes="(max-width: 768px) 100vw, 25vw"
                 onError={(e) => { e.currentTarget.src = "/hero_image.jpg"; }} 
               />
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
