'use client';

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: 'var(--primary)', color: '#fff', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>

          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              {/* Mandala SVG placeholder for Shrina  logo */}
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '0.5rem' }}>
                <path d="M50 10C50 10 65 30 50 50C35 30 50 10 50 10Z" stroke="var(--accent)" strokeWidth="2" />
                <path d="M50 90C50 90 65 70 50 50C35 70 50 90 50 90Z" stroke="var(--accent)" strokeWidth="2" />
                <path d="M90 50C90 50 70 35 50 50C70 65 90 50 90 50Z" stroke="var(--accent)" strokeWidth="2" />
                <path d="M10 50C10 50 30 35 50 50C30 65 10 50 10 50Z" stroke="var(--accent)" strokeWidth="2" />
                <path d="M78 22C78 22 70 45 50 50C60 30 78 22 78 22Z" stroke="var(--accent)" strokeWidth="2" />
                <path d="M22 78C22 78 30 55 50 50C40 70 22 78 22 78Z" stroke="var(--accent)" strokeWidth="2" />
                <path d="M22 22C22 22 45 30 50 50C30 40 22 22 22 22Z" stroke="var(--accent)" strokeWidth="2" />
                <path d="M78 78C78 78 55 70 50 50C70 60 78 78 78 78Z" stroke="var(--accent)" strokeWidth="2" />
                <circle cx="50" cy="50" r="10" stroke="var(--accent)" strokeWidth="2" />
              </svg>
              <div style={{ textAlign: 'center', fontFamily: 'var(--font-heading)' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '400', letterSpacing: '0.05em', margin: 0, lineHeight: 1, color: 'var(--accent)' }}>Shrina </h2>
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', opacity: 0.8, color: 'var(--accent)' }}>skin clinic</span>
              </div>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Shrina  Skin Clinic is located in Jumeirah, which stands as Dubai's premier destination for top-tier clinics, renowned for its luxury, excellence, and trusted medical expertise.
            </p>

            <div style={{ display: 'flex', gap: '0.8rem' }}>
              {/* Instagram */}
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* TikTok */}
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
              {/* Snapchat */}
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.646 15.354C3 16 2.5 17 2.5 17c0 .5.5 1 2.5 1s2.5 1.5 2.5 1.5c1.5 0 2.5-.5 2.5-.5.5-.5 1-.5 1-.5s.5 0 1 .5c0 0 1 .5 2.5.5s1-1.5 2.5-1.5 2.5-.5 2.5-1 0-1-2.146-1.646C18.5 14 17 12.5 17 9.5 17 6.5 14.5 4 12 4S7 6.5 7 9.5c0 3-1.5 4.5-2.354 5.854z"></path></svg>
              </a>
              {/* YouTube */}
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.13 1 12 1 12s0 3.87.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.87 23 12 23 12s0-3.87-.42-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
              </a>
              {/* Facebook */}
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Useful Links Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '600', marginBottom: '1.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>USEFUL LINKS</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none' }}>Home</Link>
              <Link href="/about" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none' }}>About Us</Link>
              <Link href="/treatments" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none' }}>Treatments</Link>
              <Link href="/shop" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none' }}>Shop</Link>
              <Link href="/blog" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none' }}>Blog</Link>
              <Link href="/wishlist" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none' }}>Wishlist</Link>
              <Link href="/book" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', textDecoration: 'none' }}>Book Now</Link>
            </div>
          </div>

          {/* Contact Column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: '600', marginBottom: '1.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CONTACT</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', lineHeight: '1.5' }}>Villa No. 124, Jumeirah 2, Dubai, United Arab Emirates</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>+971 54 305 0521</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>Shrina skinclinic@gmail.com</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <ul style={{
                  listStyle: 'none', padding: 0, margin: 0,
                  color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem',
                  display: 'flex', flexDirection: 'column', gap: '0.4rem'
                }}>
                  <li>Monday: 10:00 AM - 7:00 PM</li>
                  <li>Tuesday: 10:00 AM - 7:00 PM</li>
                  <li>Wednesday: 10:00 AM - 7:00 PM</li>
                  <li>Thursday: 10:00 AM - 7:00 PM</li>
                  <li>Friday: 10:00 AM - 7:00 PM</li>
                  <li>Saturday: 10:00 AM - 7:00 PM</li>
                  <li>Sunday: 10:00 AM - 7:00 PM</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem',
          color: 'rgba(255,255,255,0.9)',
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
          background: '#000',
          color: '#fff',
          border: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 50,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '-2px' }}>
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span style={{ fontSize: '0.65rem', fontWeight: 'bold' }}>TOP</span>
      </button>
    </footer>
  );
}
