'use client';

import React, { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(2); // Default to 3rd item open like screenshot

  const faqs = [
    {
      q: "How do I know which treatment is right for me?",
      a: "Our experts will analyze your skin type and concerns during a personalized consultation to recommend the most effective treatment plan for you."
    },
    {
      q: "Are your treatments safe?",
      a: "Yes, all our treatments are performed by experienced professionals using FDA-approved and highly tested technologies."
    },
    {
      q: "Is there any downtime after treatment?",
      a: "Downtime depends on the treatment. Many procedures have little to no downtime, allowing you to return to your daily activities quickly."
    },
    {
      q: "When will I see the results?",
      a: "Depending on the procedure, some results are visible immediately, while others may take a few weeks as collagen production increases and skin heals."
    },
    {
      q: "Do you offer consultations before treatment?",
      a: "Yes, we highly recommend a consultation prior to any procedure to accurately address your unique skin needs."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ padding: '6rem 0', background: '#FCFAF5' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>

          {/* Left Column: Info */}
          <div style={{ flex: '1 1 400px' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              border: '1px solid #B69359',
              borderRadius: '999px',
              color: '#B69359',
              fontSize: '0.85rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem'
            }}>
              FAQ'S
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              color: 'var(--primary)',
              fontWeight: '400',
              lineHeight: '1.1',
              marginBottom: '1.5rem'
            }}>
              Customers <span style={{ color: '#B69359' }}>frequently ask</span>
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '3rem', maxWidth: '500px' }}>
              Have questions about our treatments? We've answered some of the most common questions to help you understand our services, what to expect, and how to achieve the best possible results.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {/* Contact Us Block */}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '50px', height: '50px',
                  borderRadius: '50%', background: '#A88246',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Contact Us</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: '0 0 0.3rem 0' }}>Call us: <span style={{ color: '#D55C41' }}>+971 54 305 0521</span></p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0 }}>Email: reception@Shrina skinclinic.com</p>
                </div>
              </div>

              {/* Opening Hours Block */}
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '50px', height: '50px',
                  borderRadius: '50%', background: '#A88246',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.5rem' }}>Opening Hours</h4>
                  <ul style={{
                    listStyle: 'none', padding: 0, margin: 0,
                    color: 'var(--text-secondary)', fontSize: '0.95rem',
                    display: 'flex', flexDirection: 'column', gap: '0.3rem'
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

          {/* Right Column: Accordion */}
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} style={{ borderBottom: '1px solid #EBE4D5' }}>
                    <button
                      onClick={() => toggleAccordion(idx)}
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        padding: '1.5rem 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.4rem',
                        color: 'var(--primary)',
                        fontWeight: '400'
                      }}>
                        {faq.q}
                      </span>
                      <svg
                        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A88246" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                          flexShrink: 0,
                          marginLeft: '1rem'
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                    <div style={{
                      maxHeight: isOpen ? '200px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease, padding 0.3s ease',
                      paddingBottom: isOpen ? '1.5rem' : '0px'
                    }}>
                      <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
