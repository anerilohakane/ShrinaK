"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D3B888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
          <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
          <circle cx="20" cy="10" r="2" />
        </svg>
      ),
      title: "Korean Expertise, Dubai Standards",
      desc: "Our dermatologists and skin specialists are trained in Korea's world-renowned aesthetic techniques, the same standards that made K-beauty a global benchmark."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D3B888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 14.5a2.5 2.5 0 0 1-5 0V6a2.5 2.5 0 0 1 5 0v8.5Z" />
          <path d="M11 6v8" />
          <path d="M14 2v2" />
          <path d="M10 2v2" />
          <path d="M10 10h4" />
          <path d="M10 6h4" />
        </svg>
      ),
      title: "Where Science Meets Beauty",
      desc: "We don't guess, we diagnose. Every treatment is backed by advanced technology and clinical precision, designed to deliver visible, lasting results."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D3B888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(135 12 12)" />
        </svg>
      ),
      title: "Skincare, Personalised to You",
      desc: "Your skin has its own story. That's why every treatment plan at Yeppeun starts with a one-on-one consultation. Never one-size-fits-all."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D3B888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M12 5 9.5 9 7 8" />
          <path d="M12 14v-2.5l2-1.5" />
        </svg>
      ),
      title: "Results Our Clients Come Back For",
      desc: "From glass-skin glow to visible scar and pigmentation correction, our loyal clientele and growing list of success stories speak for themselves."
    }
  ];

  return (
    <section style={{ position: 'relative', background: '#FCFAF5', padding: '6rem 0', overflow: 'hidden' }}>
      {/* Background Image Map */}
      <div style={{ position: 'absolute', right: '-5%', top: '0', width: '50%', height: '100%', opacity: 0.15, zIndex: 0, pointerEvents: 'none' }}>
        <img
          src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200"
          alt="Background Face"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Fade to background color so image blends nicely */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #FCFAF5 0%, transparent 100%)' }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px' }}>

        {/* Header Area */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.4rem 1.5rem',
            border: '1px solid #B69359',
            borderRadius: '999px',
            color: '#B69359',
            fontSize: '0.85rem',
            fontWeight: '600',
            letterSpacing: '0.05em',
            marginBottom: '1.5rem',
            textTransform: 'uppercase'
          }}>
            WHY CHOOSE US
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            color: 'var(--primary)',
            fontWeight: '400',
            lineHeight: '1.1',
            marginBottom: '1.5rem'
          }}>
            Why Choose <span style={{ color: '#B69359' }}>Shrina Korean Asthetic Clinic?</span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '700px' }}>
            Shrina Korean Asthetic Clinic offers personalised treatment plans designed around your individual needs, goals, and desired results.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          {reasons.map((item, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '3rem 2rem',
              border: '1px solid #EBE4D5',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '2rem'
              }}>
                {item.icon}
              </div>
              <h4 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontWeight: '400',
                color: 'var(--primary)',
                marginBottom: '1rem',
                lineHeight: '1.25'
              }}>
                {item.title}
              </h4>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
