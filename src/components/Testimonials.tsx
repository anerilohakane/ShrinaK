"use client";

import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarti Mehta",
      text: `"The entire experience was so comfortable and professional. My skin has never looked better. Highly recommend Shrina K!"`,
      stars: "★★★★★"
    },
    {
      name: "Rohan Sharma",
      text: `"Noticeable results and a very supportive team. Dr. Shrina K truly understands her patients."`,
      stars: "★★★★★"
    },
    {
      name: "Neha Kapoor",
      text: `"A beautiful clinic with a warm atmosphere. The treatments are effective and completely safe."`,
      stars: "★★★★★"
    }
  ];

  return (
    <section style={{ background: 'var(--background)', padding: '6rem 0' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ 
            display: 'block',
            fontSize: '0.65rem', 
            fontWeight: '600', 
            color: 'var(--accent-dark)', 
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>Kind Words. Brighter Smiles</span>
          <h2 style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: '3rem', 
            color: 'var(--primary)', 
            fontWeight: '400',
            lineHeight: '1.1'
          }}>What Our Patients Say</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ 
              background: '#FFFFFF', 
              padding: '2rem', 
              borderRadius: '16px',
              border: '1px solid var(--surface-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                 <div style={{ width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                   <Image src="/doctor_shrina.jpg" alt={t.name} fill style={{ objectFit: 'cover' }} />
                 </div>
                 <div>
                   <h4 style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{t.name}</h4>
                   <div style={{ color: '#F59E0B', fontSize: '0.75rem', letterSpacing: '0.1em' }}>{t.stars}</div>
                 </div>
               </div>
               <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', fontStyle: 'italic' }}>
                 {t.text}
               </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
