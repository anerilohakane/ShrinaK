"use client";

import Image from "next/image";

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--surface-alt)', padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative Background Element */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'var(--primary)', opacity: 0.03, filter: 'blur(60px)' }}></div>
      
      <div className="container grid-responsive-experience" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Left Column: Artistic Image Layout */}
        <div style={{ position: 'relative', height: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Main Arched Image */}
          <div style={{ 
            position: 'absolute', 
            top: '5%', 
            left: '5%', 
            width: '75%', 
            height: '80%', 
            borderRadius: '250px 250px 16px 16px', 
            overflow: 'hidden',
            boxShadow: '0 25px 50px rgba(0,0,0,0.1)'
          }}>
            <Image 
              src="/hero_image.jpg"
              alt="Client Relaxing"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          {/* Secondary Floating Image */}
          <div style={{ 
            position: 'absolute', 
            bottom: '5%', 
            right: '0%', 
            width: '45%', 
            height: '40%', 
            borderRadius: '16px', 
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(28,46,37,0.2)',
            border: '8px solid var(--surface-alt)'
          }}>
            <Image 
              src="/hero_clinic.jpg"
              alt="Clinic Interior"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ height: '1px', width: '40px', background: 'var(--accent-dark)' }}></div>
            <span style={{ 
              fontSize: '0.7rem', 
              fontWeight: '600', 
              color: 'var(--accent-dark)', 
              letterSpacing: '0.25em',
              textTransform: 'uppercase'
            }}>The Shrina K Experience</span>
          </div>
          
          <h2 style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
            color: 'var(--primary)', 
            fontWeight: '400',
            lineHeight: '1.05',
            marginBottom: '2rem'
          }}>More Than a Clinic.<br/>A Space for You.</h2>
          
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1.05rem', 
            lineHeight: '1.8',
            marginBottom: '3rem',
            maxWidth: '90%'
          }}>
            Step into a sanctuary designed exclusively for your comfort, care, and confidence. Our clinic flawlessly blends advanced aesthetic technology with a deeply calming environment, ensuring your journey feels just as beautiful as the results.
          </p>
          
          <div className="grid-responsive-2" style={{ marginBottom: '3rem' }}>
            {[
              { title: "Relaxing Ambiance", desc: "A calming, immaculate space designed for peace." },
              { title: "Advanced Tech", desc: "State-of-the-art, evidence-based treatments." },
              { title: "Absolute Privacy", desc: "Unhurried, completely confidential consultations." },
              { title: "Expert Care", desc: "Personalized attention from Dr. Sneha Wanve." }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-dark)', fontSize: '1rem' }}>✦</span> {item.title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <a href="https://www.instagram.com/shrina_aesthetic_clinic/" target="_blank" rel="noopener noreferrer" className="btn" style={{ 
            background: 'var(--primary)', 
            color: '#fff', 
            padding: '1rem 2.5rem', 
            borderRadius: '9999px',
            fontSize: '0.95rem',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            alignSelf: 'flex-start',
            textDecoration: 'none',
            boxShadow: '0 10px 20px rgba(28,46,37,0.1)'
          }}>
            Take a Tour <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
