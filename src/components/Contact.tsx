"use client";

import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#FFFFFF', padding: '6rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr', gap: '3rem' }}>
        
        {/* Left Column: Contact Info */}
        <div>
          <span style={{ 
            display: 'block',
            fontSize: '0.65rem', 
            fontWeight: '600', 
            color: 'var(--accent-dark)', 
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>Let's Connect</span>
          <h2 style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: '2.5rem', 
            color: 'var(--primary)', 
            fontWeight: '400',
            lineHeight: '1.1',
            marginBottom: '2rem'
          }}>Visit Us or Get in Touch</h2>
          
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: 0 }}>
            <li style={{ display: 'flex', gap: '1rem' }}>
               <div style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>📍</div>
               <div>
                 <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Our Clinic</span>
                 <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>123, Green Valley Road, Indore, MP 452001</span>
               </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem' }}>
               <div style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>📞</div>
               <div>
                 <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Call Us</span>
                 <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>+91 98765 43210</span>
               </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem' }}>
               <div style={{ fontSize: '1.2rem', color: '#25D366' }}>💬</div>
               <div>
                 <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>WhatsApp</span>
                 <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>+91 98765 43210</span>
               </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem' }}>
               <div style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>🕒</div>
               <div>
                 <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Timings</span>
                 <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block' }}>Mon - Sat: 10:00 AM - 7:00 PM</span>
                 <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>( Sunday by appointment )</span>
               </div>
            </li>
          </ul>
        </div>

        {/* Middle Column: Map Placeholder */}
        <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', background: 'var(--surface-alt)', minHeight: '350px' }}>
           <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem', border: '1px solid var(--surface-border)', borderRadius: '16px' }}>
              Map Image Placeholder
           </div>
        </div>

        {/* Right Column: Form */}
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Send Us a Message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
             <input type="text" placeholder="Name" style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--surface-border)', fontSize: '0.9rem', outline: 'none' }} />
             <input type="tel" placeholder="Phone" style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--surface-border)', fontSize: '0.9rem', outline: 'none' }} />
             <input type="email" placeholder="Email" style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--surface-border)', fontSize: '0.9rem', outline: 'none' }} />
             <textarea placeholder="Your Message" rows={4} style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--surface-border)', fontSize: '0.9rem', outline: 'none', resize: 'none' }}></textarea>
             <button type="button" style={{ 
               background: 'var(--primary)', 
               color: '#fff', 
               padding: '1rem', 
               borderRadius: '8px', 
               border: 'none', 
               fontSize: '0.9rem', 
               fontWeight: '500', 
               cursor: 'pointer',
               marginTop: '0.5rem'
             }}>Send Enquiry <span>→</span></button>
          </form>
        </div>

      </div>
    </section>
  );
}
