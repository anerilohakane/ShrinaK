'use client';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BookNowPage() {
  return (
    <>
      <Header theme="dark" />
      <main style={{ minHeight: '100vh', position: 'relative' }}>
        
        {/* Full Page Background */}
        <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2500"
            alt="Book Now Background"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Dark Overlay to match theme */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(28, 46, 37, 0.85)' }}></div>
        </div>

        {/* Form Container */}
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '12rem', paddingBottom: '6rem', maxWidth: '800px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: 'clamp(3rem, 5vw, 4rem)', 
              fontWeight: '400', 
              color: '#FFFFFF',
              marginBottom: '1rem'
            }}>
              Book Now
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '650px', margin: '0 auto' }}>
              Have any questions? We'd love to hear from you. Contact us today and a member of our team will reach out to support you.
            </p>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Row 1: Name and Email */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="fullName" style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '500' }}>
                  Full Name <span style={{ color: '#ff4d4f' }}>*</span>
                </label>
                <input 
                  type="text" 
                  id="fullName" 
                  required
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.5)',
                    borderRadius: '999px',
                    padding: '1rem 1.5rem',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '500' }}>
                  Email Address <span style={{ color: '#ff4d4f' }}>*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.5)',
                    borderRadius: '999px',
                    padding: '1rem 1.5rem',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
                />
              </div>
            </div>

            {/* Preferred Contact Method */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" id="preferredContact" style={{ width: '18px', height: '18px', accentColor: 'var(--accent)', cursor: 'pointer' }} />
              <label htmlFor="preferredContact" style={{ color: '#fff', fontSize: '0.9rem', cursor: 'pointer' }}>Preferred contact method</label>
            </div>

            {/* Row 2: Country and Phone */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="country" style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '500' }}>
                  Select Country
                </label>
                <select 
                  id="country" 
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.5)',
                    borderRadius: '999px',
                    padding: '1rem 1.5rem',
                    color: '#fff', // Need to make options visible in some browsers, but select itself white
                    fontSize: '1rem',
                    outline: 'none',
                    appearance: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="UAE" style={{ color: '#000' }}>United Arab Emirates</option>
                  <option value="UK" style={{ color: '#000' }}>United Kingdom</option>
                  <option value="US" style={{ color: '#000' }}>United States</option>
                  <option value="IN" style={{ color: '#000' }}>India</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="phone" style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '500' }}>
                  Phone Number <span style={{ color: '#ff4d4f' }}>*</span>
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.5)',
                    borderRadius: '999px',
                    padding: '1rem 1.5rem',
                    color: '#fff',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
                />
              </div>
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '500' }}>
                Your Message / Inquiry
              </label>
              <textarea 
                id="message" 
                rows={5}
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.5)',
                  borderRadius: '24px',
                  padding: '1.5rem',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.3s'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
              <button 
                type="submit" 
                style={{
                  background: 'var(--accent)',
                  color: 'var(--primary)',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '1rem 3rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  fontFamily: 'var(--font-heading)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s, boxShadow 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Submit Request
              </button>
            </div>

          </form>

        </div>
      </main>
      
      {/* We add a white background to the footer section so it blends correctly at the bottom if scrolled */}
      <div style={{ position: 'relative', zIndex: 1, background: 'var(--primary)' }}>
        <Footer />
      </div>
    </>
  );
}
