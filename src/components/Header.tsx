"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const [showTreatments, setShowTreatments] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const isDark = theme === 'dark';
  // Keep original transparent background. Only turn white if mega menu is hovered to make the nav visible, or just keep it transparent.
  // Original was completely transparent. We will keep it transparent and text white, 
  // but if the mega menu opens, we can keep the header text white and let the dropdown have a white background.
  const headerBg = showTreatments ? '#fff' : 'transparent';
  const textColor = (showTreatments || isDark) ? 'var(--primary)' : '#fff';
  const linkColor = (showTreatments || isDark) ? 'var(--text-primary)' : '#fff';
  
  const categories = [
    { 
      name: 'HAIR', 
      items: ['GFC', 'Exosomes', 'PRP', 'Meso', 'Korean Scalp Treatment', 'Microneedling'] 
    },
    { 
      name: 'SKIN', 
      items: ['Hydra Facial', 'Carbon Laser', 'Chemical Peels', 'Face PRP', 'Face Microneedling', 'Subcision', 'MNRF', 'Laser Hair Reduction', 'Mummy Mask Facial', 'Glutathione IV Drip', 'Fat Loss IV Drip', 'Mole Removal', 'Korean Peel'] 
    },
    { 
      name: 'LASER', 
      items: ['Laser Hair Reduction', 'Fractional Laser Treatment', 'Scar Removal Treatment', 'Tattoo Removal', 'Hollywood Facial'] 
    },
    { 
      name: 'SEMI-PERMANENT MAKEUP', 
      items: ['Microblading', 'Lip Tint', 'BB Glow'] 
    }
  ];

  return (
    <header className="header" style={{ background: headerBg, borderBottom: showTreatments ? '1px solid rgba(0,0,0,0.05)' : 'none', position: 'absolute', width: '100%', zIndex: 100, transition: 'background 0.3s' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90px' }}>
        
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '4px' }}>
            {/* Generic placeholder for their floral logo */}
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="var(--accent)"/>
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="var(--accent)"/>
          </svg>
          <span style={{ fontSize: '1.2rem', fontWeight: '400', color: textColor, letterSpacing: '0.05em', fontFamily: 'var(--font-heading)' }}>SHRINA K</span>
          <span style={{ fontSize: '0.5rem', color: textColor, letterSpacing: '0.1em' }}>skin clinic</span>
        </Link>
        
        {/* Main Nav */}
        <nav className="hide-on-mobile" style={{ height: '100%' }}>
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0, height: '100%', alignItems: 'center' }}>
            <li><Link href="/" style={{ color: textColor, fontSize: '0.95rem', fontWeight: '500', textDecoration: 'none' }}>Home</Link></li>
            
            <li 
              style={{ height: '100%', display: 'flex', alignItems: 'center', position: 'relative', cursor: 'pointer' }}
              onMouseEnter={() => setShowTreatments(true)}
              onMouseLeave={() => { setShowTreatments(false); setActiveCategory(null); }}
            >
              <span style={{ color: textColor, fontSize: '0.95rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                Treatments 
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </span>
              
              {/* Mega Menu Dropdown */}
              {showTreatments && (
                <div style={{
                  position: 'absolute',
                  top: '90px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  padding: '2rem',
                  width: '700px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  zIndex: 200,
                  cursor: 'default'
                }}>
                  {categories.map((cat, idx) => (
                    <div 
                      key={idx} 
                      onMouseEnter={() => setActiveCategory(cat.name)}
                      style={{ 
                        padding: '0.8rem 0',
                        borderBottom: '1px solid rgba(0,0,0,0.05)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: activeCategory === cat.name ? 'var(--accent-dark)' : '#333',
                        fontSize: '0.9rem',
                        fontWeight: activeCategory === cat.name ? '600' : '400',
                        cursor: 'pointer',
                        position: 'relative'
                      }}
                    >
                      {cat.name}
                      {(idx % 2 === 0 || cat.items.length > 0) && <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>›</span>}
                      
                      {/* Sub-menu (3rd level) */}
                      {activeCategory === cat.name && cat.items.length > 0 && (
                        <div style={{
                          position: 'absolute',
                          left: '105%',
                          top: '-2rem',
                          background: '#fff',
                          borderRadius: '16px',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                          padding: '1.5rem',
                          width: '350px',
                          zIndex: 201,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1rem'
                        }}>
                          {cat.items.map((sub, sIdx) => {
                            // Generate a simple slug from the name
                            const itemSlug = sub.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                            
                            return (
                              <Link key={sIdx} href={`/treatments/${itemSlug}`} style={{
                                color: '#555',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                borderBottom: sIdx !== cat.items.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                                paddingBottom: sIdx !== cat.items.length - 1 ? '1rem' : '0',
                                transition: 'color 0.2s'
                              }}>
                                {sub}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>
            
            <li><Link href="/shop" style={{ color: textColor, fontSize: '0.95rem', fontWeight: '500', textDecoration: 'none' }}>Shop</Link></li>
            <li><Link href="/blog" style={{ color: textColor, fontSize: '0.95rem', fontWeight: '500', textDecoration: 'none' }}>Blog</Link></li>
            <li><Link href="/book" style={{ color: textColor, fontSize: '0.95rem', fontWeight: '500', textDecoration: 'none' }}>Book Now</Link></li>
          </ul>
        </nav>
        
        {/* Right Icons */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          
          {/* User Icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={textColor} strokeWidth="1.5" style={{ cursor: 'pointer' }}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          
          {/* Cart Icon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={textColor} strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span style={{ background: 'var(--accent-dark)', color: '#fff', fontSize: '0.75rem', fontWeight: '600', padding: '0.1rem 0.4rem', borderRadius: '50%' }}>0</span>
          </div>

          {/* Search Icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={textColor} strokeWidth="1.5" style={{ cursor: 'pointer' }}>
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>

          {/* WhatsApp Button */}
          <a href="https://wa.me/918979797220" target="_blank" rel="noopener noreferrer" style={{ 
            background: '#B69359', // Target golden brown color
            color: '#fff', 
            borderRadius: '9999px',
            padding: '0.7rem 1.5rem',
            fontSize: '0.9rem',
            fontWeight: '500',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginLeft: '0.5rem',
            boxShadow: '0 4px 15px rgba(182, 147, 89, 0.3)'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
