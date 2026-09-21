"use client";

import Image from "next/image";

export default function Pricing() {
  const services = [
    { name: "Skin Consultation", price: "₹1,500" },
    { name: "Acne Treatment", price: "₹4,000" },
    { name: "Hydra Facial", price: "₹3,500" },
    { name: "PRP Hair Treatment", price: "₹6,500" },
    { name: "Laser Hair Removal", price: "₹5,000" },
    { name: "Skin Rejuvenation", price: "₹7,000" },
    { name: "Anti-Aging Treatment", price: "₹8,000" },
    { name: "Fillers & Injectables", price: "₹12,000" },
  ];

  return (
    <section id="pricing" style={{ background: 'var(--surface-alt)', padding: '6rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
        
        {/* Left Column */}
        <div>
          <span style={{ 
            display: 'block',
            fontSize: '0.65rem', 
            fontWeight: '600', 
            color: 'var(--accent-dark)', 
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>Our Services</span>
          <h2 style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: '3rem', 
            color: 'var(--primary)', 
            fontWeight: '400',
            lineHeight: '1.1',
            marginBottom: '1.5rem'
          }}>Simple, Transparent<br/>Pricing.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '3rem' }}>
            Premium care, with complete clarity.
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
            gap: '0.5rem'
          }}>
            View Full Price List <span>→</span>
          </button>
        </div>

        {/* Right Column: Services List */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem 3rem', alignContent: 'start' }}>
          {services.map((item, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              paddingBottom: '1rem', 
              borderBottom: '1px solid var(--surface-border)' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image src="/hero_image.jpg" alt={item.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-primary)' }}>{item.name}</span>
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--primary)' }}>{item.price}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
