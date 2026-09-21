"use client";

import Image from "next/image";
import Link from "next/link";

export default function Treatments() {
  const treatments = [
    { title: "SKIN TREATMENTS", subtitle: "Healthy, radiant\nand youthful skin" },
    { title: "ANTI-AGING SOLUTIONS", subtitle: "Look younger,\nfeel confident" },
    { title: "HAIR TREATMENTS", subtitle: "Stronger hair\nfor a brighter you" },
    { title: "ADVANCED AESTHETICS", subtitle: "Non-surgical,\nnatural enhancements" }
  ];

  return (
    <section id="treatments" style={{ background: 'var(--surface-alt)', padding: '6rem 0' }}>
      <div className="container">
        
        {/* Header Area */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <div>
            <span style={{ 
              display: 'block',
              fontSize: '0.7rem', 
              fontWeight: '600', 
              color: 'var(--accent-dark)', 
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>Our Treatments</span>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)',
              fontSize: '3.5rem', 
              color: 'var(--primary)', 
              fontWeight: '400',
              lineHeight: '1.1',
              margin: 0
            }}>Personalized Treatments. Real Results.</h2>
          </div>
          <Link href="#all-treatments" className="btn" style={{ 
            background: 'transparent', 
            color: 'var(--primary)', 
            padding: '0.8rem 1.5rem', 
            borderRadius: '9999px',
            fontSize: '0.9rem',
            border: '1px solid var(--primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none'
          }}>
            Explore All Treatments <span>→</span>
          </Link>
        </div>
        
        {/* Cards Area */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {treatments.map((t, i) => (
            <div key={i} style={{ 
              position: 'relative',
              height: '450px',
              borderRadius: '200px 200px 24px 24px',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              {/* Background Image (Using hero image as placeholder) */}
              <Image 
                src="/hero_image.jpg"
                alt={t.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              
              {/* Overlay Gradient */}
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to bottom, rgba(244, 242, 235, 0) 50%, rgba(244, 242, 235, 0.9) 100%)' 
              }}></div>
              
              {/* Content */}
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '40%'
              }}>
                <div>
                  <h3 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    color: 'var(--primary)', 
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em'
                  }}>{t.title}</h3>
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '0.9rem', 
                    lineHeight: '1.4', 
                    whiteSpace: 'pre-line' 
                  }}>
                    {t.subtitle}
                  </p>
                </div>
                <div style={{ 
                  alignSelf: 'flex-end',
                  width: '36px', 
                  height: '36px', 
                  borderRadius: '50%', 
                  background: 'var(--primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '1.2rem'
                }}>
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
