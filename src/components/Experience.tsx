"use client";

import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--surface-alt)', padding: 0 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '600px' }}>
        
        {/* Left Column: Image */}
        <div style={{ position: 'relative' }}>
          <Image 
            src="/hero_image.jpg"
            alt="Clinic Interior"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Right Column: Text Content */}
        <div style={{ padding: '6rem 4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ 
            display: 'block',
            fontSize: '0.7rem', 
            fontWeight: '600', 
            color: 'var(--accent-dark)', 
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>The Shrina K Experience</span>
          
          <h2 style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: '3.5rem', 
            color: 'var(--primary)', 
            fontWeight: '400',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            maxWidth: '500px'
          }}>More Than a Clinic.<br/>A Space for You.</h2>
          
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1rem', 
            lineHeight: '1.7',
            marginBottom: '2.5rem',
            maxWidth: '450px'
          }}>
            Step into a space designed for comfort, care and confidence. Our clinic blends advanced technology with a calming environment, because your beauty journey should feel as good as the results.
          </p>

          <button className="btn" style={{ 
            background: 'var(--primary)', 
            color: '#fff', 
            padding: '1rem 2rem', 
            borderRadius: '9999px',
            fontSize: '0.9rem',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            alignSelf: 'flex-start'
          }}>
            Take a Tour <span>→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
