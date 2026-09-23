"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSendToWhatsApp = () => {
    // Construct the WhatsApp message with formatting
    const text = `*New Website Enquiry*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918979797220?text=${text}`, '_blank');
  };
  return (
    <section id="contact" style={{ background: '#FFFFFF', padding: '6rem 0' }}>
      <div className="container grid-responsive-contact">
        
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
                 <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Location 1 (Kothrud)</span>
                 <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4', display: 'block' }}>Motiram Complex, First Floor, Paud Rd,<br/>Next to City Hospital, Guruganesh Nagar,<br/>Kothrud, Pune, Maharashtra 411038</span>
               </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem' }}>
               <div style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>📍</div>
               <div>
                 <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Location 2 (Viman Nagar)</span>
                 <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4', display: 'block' }}>Shop No. UG-11, Beside Richfeel, Gate D,<br/>East Court Phoenix, Beside Phoenix Marketcity,<br/>Viman Nagar, Pune, Maharashtra 411014</span>
               </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem' }}>
               <div style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>📞</div>
               <div>
                 <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Call & WhatsApp</span>
                 <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>+91 89797 97220</span>
               </div>
            </li>
            <li style={{ display: 'flex', gap: '1rem' }}>
               <div style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>🕒</div>
               <div>
                 <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.25rem', textTransform: 'uppercase' }}>Timings</span>
                 <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block' }}>Open: 11:00 AM – 7:00 PM</span>
               </div>
            </li>
          </ul>
        </div>

        {/* Middle Column: Map Placeholder */}
        <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', background: 'var(--surface-alt)', minHeight: '350px' }}>
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Motiram%20Complex,%20Paud%20Rd,%20Kothrud,%20Pune+(Shrina%20K%20Beauty%20Clinic)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)', position: 'absolute', inset: 0 }}
          ></iframe>
        </div>

        {/* Right Column: Form */}
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Send Us a Message</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => { e.preventDefault(); handleSendToWhatsApp(); }}>
             <input type="text" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--surface-border)', fontSize: '0.9rem', outline: 'none' }} />
             <input type="tel" placeholder="Phone" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--surface-border)', fontSize: '0.9rem', outline: 'none' }} />
             <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--surface-border)', fontSize: '0.9rem', outline: 'none' }} />
             <textarea placeholder="Your Message" required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--surface-border)', fontSize: '0.9rem', outline: 'none', resize: 'none' }}></textarea>
             <button type="submit" style={{ 
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
