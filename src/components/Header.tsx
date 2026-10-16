"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const [showTreatments, setShowTreatments] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isDark = theme === 'dark';
  const headerBg = showTreatments ? '#fff' : 'transparent';
  const textColor = (showTreatments || isDark) ? 'var(--primary)' : '#fff';
  const linkColor = (showTreatments || isDark) ? 'var(--text-primary)' : '#fff';

  const categories = [
    {
      name: 'HAIR',
      items: ['GFC', 'Exosomes', 'PRP', 'PRP + Biotin', 'Meso', 'Korean Scalp Treatment', 'Microneedling']
    },
    {
      name: 'SKIN',
      items: ['Hydra Facial', 'Hollywood Facial', 'Chemical Peels', 'Face PRP', 'Face Microneedling', 'Subcision', 'MNRF', 'Mummy Mask Facial', 'Glutathione IV Drip', 'Fat Loss IV Drip', 'Mole Removal', 'Korean Peel']
    },
    {
      name: 'LASER',
      items: ['Laser Hair Reduction', 'CO2 Fractional Laser', 'Scar Removal Treatment', 'Tattoo Removal', 'Carbon Laser Treatment']
    },
    {
      name: 'SEMI-PERMANENT MAKEUP',
      items: ['Microblading', 'Lip Tint', 'BB Glow']
    }
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header" style={{ background: headerBg, borderBottom: showTreatments ? '1px solid rgba(0,0,0,0.05)' : 'none', position: 'absolute', width: '100%', zIndex: 100, transition: 'background 0.3s' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '75px', height: '90px', gap: '0.5rem' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <div className="header-logo-container" style={{ position: 'relative' }}>
              <Image 
                src={(showTreatments || isDark) ? "/shrina-logo-dark.png" : "/shrina-logo.png"} 
                alt="Shrina Korean Aesthetic Clinic" 
                fill 
                style={{ objectFit: 'contain', objectPosition: 'left center' }} 
                priority
              />
            </div>
          </Link>

          {/* Main Nav (Desktop) */}
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
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
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

              <li><Link href="/team" style={{ color: textColor, fontSize: '0.95rem', fontWeight: '500', textDecoration: 'none' }}>Team</Link></li>
              <li><a href="/#about" style={{ color: textColor, fontSize: '0.95rem', fontWeight: '500', textDecoration: 'none' }}>About Us</a></li>
              <li><Link href="/blog" style={{ color: textColor, fontSize: '0.95rem', fontWeight: '500', textDecoration: 'none' }}>Blog</Link></li>
              <li><Link href="/book" style={{ color: textColor, fontSize: '0.95rem', fontWeight: '500', textDecoration: 'none' }}>Book Now</Link></li>
            </ul>
          </nav>

          {/* Right Header Controls */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* WhatsApp Button */}
            <a href="https://wa.me/918979797220" target="_blank" rel="noopener noreferrer" style={{
              background: '#B69359',
              color: '#fff',
              borderRadius: '9999px',
              padding: '0.6rem 1.2rem',
              fontSize: '0.85rem',
              fontWeight: '500',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 4px 15px rgba(182, 147, 89, 0.3)'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Mobile 3-Line Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="show-on-mobile"
              aria-label="Toggle navigation menu"
              style={{
                background: isDark ? 'rgba(28, 46, 37, 0.06)' : 'rgba(255, 255, 255, 0.15)',
                border: isDark ? '1px solid rgba(28, 46, 37, 0.15)' : '1px solid rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '10px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                width: '42px',
                height: '42px'
              }}
            >
              <span style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: textColor,
                borderRadius: '2px',
                transition: 'all 0.3s ease'
              }}></span>
              <span style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: textColor,
                borderRadius: '2px',
                transition: 'all 0.3s ease'
              }}></span>
              <span style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: textColor,
                borderRadius: '2px',
                transition: 'all 0.3s ease'
              }}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(18, 30, 24, 0.6)',
            backdropFilter: 'blur(4px)',
            zIndex: 998,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}

      {/* Mobile Slide-out Side Tab/Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '85%',
          maxWidth: '380px',
          height: '100vh',
          background: '#FCFAF5',
          boxShadow: '-8px 0 30px rgba(0,0,0,0.2)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          overflowY: 'auto'
        }}
      >
        {/* Drawer Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          background: '#fff'
        }}>
          <div style={{ position: 'relative', width: '140px', height: '46px' }}>
            <Image
              src="/shrina-logo-dark.png"
              alt="Shrina Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Close button (X) */}
          <button
            onClick={closeMobileMenu}
            aria-label="Close menu"
            style={{
              background: '#f2eee5',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--primary)'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Drawer Links Content */}
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
          <Link
            href="/"
            onClick={closeMobileMenu}
            style={{
              padding: '0.9rem 1rem',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontWeight: '500',
              borderRadius: '10px',
              transition: 'background 0.2s',
              borderBottom: '1px solid rgba(0,0,0,0.04)'
            }}
          >
            Home
          </Link>

          {/* Mobile Treatments Accordion */}
          <div>
            <button
              onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.9rem 1rem',
                color: 'var(--primary)',
                background: 'transparent',
                border: 'none',
                borderBottom: '1px solid rgba(0,0,0,0.04)',
                fontSize: '1.05rem',
                fontWeight: '500',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              <span>Treatments</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  transform: mobileTreatmentsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease'
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Sub Categories inside Mobile Treatments */}
            {mobileTreatmentsOpen && (
              <div style={{ padding: '0.5rem 0.5rem 0.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                {categories.map((cat, idx) => {
                  const isExpanded = mobileExpandedCat === cat.name;
                  return (
                    <div key={idx} style={{ borderBottom: '1px solid rgba(0,0,0,0.04)', paddingBottom: '0.4rem' }}>
                      <button
                        onClick={() => setMobileExpandedCat(isExpanded ? null : cat.name)}
                        style={{
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.6rem 0.5rem',
                          background: 'none',
                          border: 'none',
                          color: isExpanded ? 'var(--accent-dark)' : '#333',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          letterSpacing: '0.03em',
                          cursor: 'pointer'
                        }}
                      >
                        <span>{cat.name}</span>
                        <span style={{ fontSize: '0.85rem' }}>{isExpanded ? '−' : '+'}</span>
                      </button>

                      {isExpanded && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.4rem 0.5rem 0.6rem 1rem' }}>
                          {cat.items.map((item, sIdx) => {
                            const itemSlug = item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                            return (
                              <Link
                                key={sIdx}
                                href={`/treatments/${itemSlug}`}
                                onClick={closeMobileMenu}
                                style={{
                                  color: '#666',
                                  textDecoration: 'none',
                                  fontSize: '0.85rem',
                                  padding: '0.2rem 0'
                                }}
                              >
                                {item}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="/team"
            onClick={closeMobileMenu}
            style={{
              padding: '0.9rem 1rem',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontWeight: '500',
              borderRadius: '10px',
              borderBottom: '1px solid rgba(0,0,0,0.04)'
            }}
          >
            Team
          </Link>

          <a
            href="/#about"
            onClick={closeMobileMenu}
            style={{
              padding: '0.9rem 1rem',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontWeight: '500',
              borderRadius: '10px',
              borderBottom: '1px solid rgba(0,0,0,0.04)'
            }}
          >
            About Us
          </a>

          <Link
            href="/blog"
            onClick={closeMobileMenu}
            style={{
              padding: '0.9rem 1rem',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontWeight: '500',
              borderRadius: '10px',
              borderBottom: '1px solid rgba(0,0,0,0.04)'
            }}
          >
            Blog
          </Link>

          <Link
            href="/book"
            onClick={closeMobileMenu}
            style={{
              padding: '0.9rem 1rem',
              color: 'var(--primary)',
              textDecoration: 'none',
              fontSize: '1.05rem',
              fontWeight: '500',
              borderRadius: '10px',
              borderBottom: '1px solid rgba(0,0,0,0.04)'
            }}
          >
            Book Now
          </Link>
        </div>

        {/* Drawer Footer CTA */}
        <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)', background: '#fff' }}>
          <a
            href="https://wa.me/918979797220"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '100%',
              background: '#B69359',
              color: '#fff',
              borderRadius: '12px',
              padding: '0.85rem 1rem',
              fontSize: '0.95rem',
              fontWeight: '500',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.6rem',
              boxShadow: '0 4px 15px rgba(182, 147, 89, 0.25)'
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Connect on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}

