"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" style={{ padding: '0', background: 'var(--surface-alt)', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 1.8fr', minHeight: '80vh', width: '100%' }}>

        {/* Left Column: Quote */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '4rem 2rem 4rem 4rem',
          position: 'relative'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '3rem',
            lineHeight: '1.2',
            color: 'var(--primary)',
            fontStyle: 'italic',
            fontWeight: '400',
            position: 'relative',
            zIndex: 1
          }}>
            <span style={{
              position: 'absolute',
              top: '-2rem',
              left: '-2rem',
              fontSize: '8rem',
              color: 'rgba(28, 46, 37, 0.05)',
              fontFamily: 'var(--font-heading)',
              zIndex: -1
            }}>“</span>
            "Beauty isn't<br /> about changing<br /> you—it's about<br /> bringing out the<br /> best version of you."
          </h2>
        </div>

        {/* Middle Column: Doctor Image */}
        <div style={{ position: 'relative', height: '100%', minHeight: '600px', background: '#fff' }}>
          <Image
            src="/doctor_shrina.jpg"
            alt="Dr. Sneha Wanve"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Right Column: Expert Details */}
        <div style={{
          padding: '6rem 4rem 6rem 4rem',
          display: 'flex',
          justifyContent: 'space-between',
          background: 'var(--background)'
        }}>
          <div style={{ maxWidth: '500px' }}>
            <span style={{
              display: 'block',
              fontSize: '0.7rem',
              fontWeight: '600',
              color: 'var(--accent-dark)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>Meet the Expert</span>

            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3.5rem',
              color: 'var(--primary)',
              marginBottom: '0.5rem',
              fontWeight: '400',
              lineHeight: '1.1'
            }}>Dr. Sneha Wanve</h3>

            <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '2rem', fontWeight: '500' }}>
              Founder & Aesthetic Specialist
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              With a passion for aesthetic medicine and a commitment to natural, beautiful results, Dr. Sneha Wanve combines medical expertise with an artistic eye to deliver personalized care.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem', padding: 0 }}>
              {[
                { text: "MBBS", icon: "⚕️" },
                { text: "MD - Dermatology (or relevant)", icon: "🔬" },
                { text: "Advanced Aesthetic & Laser Training", icon: "✨" },
                { text: "Years of Experience in Aesthetic Medicine", icon: "🏆" }
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '500' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '1px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'var(--primary)' }}>
                    {item.icon}
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>

            <button className="btn" style={{
              background: 'var(--primary)',
              color: '#fff',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Read Her Story <span>→</span>
            </button>
          </div>

          {/* Far Right Vertical Image Accent */}
          <div style={{
            width: '120px',
            background: 'var(--primary)',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '2rem'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'url(/hero_image.jpg)',
              backgroundSize: 'cover',
              opacity: 0.3,
              mixBlendMode: 'overlay'
            }}></div>
            <div style={{
              color: '#fff',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
              transform: 'rotate(180deg)',
              letterSpacing: '0.5em',
              fontSize: '0.7rem',
              fontWeight: '300',
              zIndex: 2,
              opacity: 0.8
            }}>
              SCIENCE ART CARE BEAUTY
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
