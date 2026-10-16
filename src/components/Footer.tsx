'use client';

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ 
      background: '#859F8D', 
      color: '#FFFFFF', 
      paddingTop: '5rem', 
      paddingBottom: '2.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.15)'
    }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', marginBottom: '4rem' }}>

          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ position: 'relative', width: '220px', height: '75px', marginBottom: '0.5rem' }}>
                <Image 
                  src="/shrina-logo.png" 
                  alt="Shrina Korean Aesthetic Clinic" 
                  fill 
                  style={{ objectFit: 'contain' }} 
                />
              </div>
            </div>

            <p style={{ color: 'rgba(255, 255, 255, 0.95)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Shrina Korean Aesthetic Clinic is Pune's premier destination for advanced Korean-inspired skin, hair, and aesthetic treatments, renowned for luxury, precision, and trusted medical expertise.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem' }}>
              {/* Instagram */}
              <a href="https://www.instagram.com/shrina_aesthetic_clinic/" target="_blank" rel="noopener noreferrer" style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(28, 46, 37, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', transition: 'all 0.3s' }} onMouseOver={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseOut={e => { e.currentTarget.style.background = 'rgba(28, 46, 37, 0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/918979797220" target="_blank" rel="noopener noreferrer" style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(28, 46, 37, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)', transition: 'all 0.3s' }} onMouseOver={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-2px)'; }} onMouseOut={e => { e.currentTarget.style.background = 'rgba(28, 46, 37, 0.25)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              </a>
            </div>
          </div>

          {/* Useful Links Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '600', marginBottom: '1.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>USEFUL LINKS</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}>Home</Link>
              <a href="/#about" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}>About Us</a>
              <Link href="/treatments" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}>Treatments</Link>
              <Link href="/blog" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}>Blog</Link>
              <Link href="/book" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}>Book Now</Link>
            </div>
          </div>

          {/* Contact Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: '600', marginBottom: '1.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>CONTACT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Location 1 */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <strong style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.05em' }}>LOCATION 1</strong>
                  <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Motiram Complex, First Floor, Paud Rd,<br />
                    Next to City Hospital, Guruganesh Nagar,<br />
                    Kothrud, Pune, Maharashtra 411038
                  </span>
                </div>
              </div>

              {/* Location 2 */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '3px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <strong style={{ color: '#FFFFFF', fontSize: '0.85rem', letterSpacing: '0.05em' }}>LOCATION 2</strong>
                  <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    Shop No. UG-11, Beside Richfeel, Gate D,<br />
                    East Court Phoenix, Beside Phoenix Marketcity,<br />
                    Viman Nagar, Pune, Maharashtra 411014
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span style={{ color: 'rgba(255,255,255,0.95)', fontSize: '0.95rem', fontWeight: '500' }}>8979797220</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <a href="mailto:shrinakbeauty1999@gmail.com" style={{ color: 'rgba(255,255,255,0.95)', fontSize: '0.95rem', textDecoration: 'none' }}>shrinakbeauty1999@gmail.com</a>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span style={{ color: 'rgba(255,255,255,0.95)', fontSize: '0.95rem', marginTop: '2px' }}>
                  Open: 10:00 AM - 7:00 PM
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          paddingTop: '2rem',
          color: 'rgba(255, 255, 255, 0.85)',
          fontSize: '0.9rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <span>Copyright © 2026 Shrina . All rights reserved</span>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'var(--primary)',
          color: '#fff',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 50,
          boxShadow: '0 4px 15px rgba(28,46,37,0.25)'
        }}
        title="Back to Top"
        aria-label="Back to Top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '-2px' }}>
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span style={{ fontSize: '0.65rem', fontWeight: 'bold' }}>TOP</span>
      </button>
    </footer>
  );
}
