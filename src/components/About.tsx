"use client";

import Image from "next/image";

export default function About() {
  const teamMembers = [
    { name: "Dr. Arti Agao", role: "Aesthetic Doctor" },
    { name: "Dr. Vaibhavi Manjare", role: "Cosmetologist" },
    { name: "Miss. Tejal Yadav", role: "Aesthetician" },
    { name: "Miss. Sakshi Mengde", role: "Aesthetician" },
    { name: "Dr. Vaijyanti Nandgaonkar", role: "Visiting Skin Specialist", isVisiting: true },
    { name: "Dr. Shweta Padole", role: "Visiting Hair Specialist", isVisiting: true }
  ];

  return (
    <section id="about" style={{ padding: '8rem 0', background: 'var(--surface-alt)' }}>
      <div className="container">
        
        {/* Quote Section */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 8rem auto', position: 'relative' }}>
          <span style={{
            position: 'absolute',
            top: '-3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '12rem',
            color: 'rgba(28, 46, 37, 0.04)',
            fontFamily: 'var(--font-heading)',
            zIndex: 0,
            lineHeight: 1
          }}>“</span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            lineHeight: '1.3',
            color: 'var(--primary)',
            fontStyle: 'italic',
            fontWeight: '400',
            position: 'relative',
            zIndex: 1
          }}>
            "Beauty isn't about changing you—it's about bringing out the best version of you."
          </h2>
        </div>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ 
            display: 'block',
            fontSize: '0.7rem', 
            fontWeight: '600', 
            color: 'var(--accent-dark)', 
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>The Visionaries</span>
          
          <h2 style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
            color: 'var(--primary)', 
            fontWeight: '400',
            lineHeight: '1.1'
          }}>Meet Our Founders</h2>
        </div>

        {/* Founders Section (2 Columns) */}
        <div className="grid-responsive-2" style={{ marginBottom: '8rem' }}>
          
          {/* Founder 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ position: 'relative', height: '550px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(28,46,37,0.1)' }}>
              <Image src="/doctor_shrina.jpg" alt="Dr. Sneha Wanve" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '0 1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Dr. Sneha Wanve</h3>
              <p style={{ color: 'var(--accent-dark)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Founder</p>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '1.5rem', fontWeight: '500' }}>Aesthetic Physician, Shrina Aesthetic Clinic</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8' }}>
                With a passion for aesthetic medicine and a commitment to natural, beautiful results, Dr. Sneha Wanve combines medical expertise with an artistic eye to deliver personalized care.
              </p>
            </div>
          </div>

          {/* Founder 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ position: 'relative', height: '550px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(28,46,37,0.1)' }}>
              <Image src="/doctor_shrina.jpg" alt="Dr. Pooja Nagargoje" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '0 1rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>Dr. Pooja Nagargoje</h3>
              <p style={{ color: 'var(--accent-dark)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Co-Founder</p>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '1.5rem', fontWeight: '500' }}>Cosmetologist, Second Branch</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8' }}>
                Dedicated to advanced cosmetological procedures, Dr. Pooja brings a wealth of experience and precision to ensure every patient receives world-class treatment and care.
              </p>
            </div>
          </div>

        </div>

        {/* Team Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ 
            display: 'block',
            fontSize: '0.7rem', 
            fontWeight: '600', 
            color: 'var(--accent-dark)', 
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>The Experts</span>
          
          <h2 style={{ 
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', 
            color: 'var(--primary)', 
            fontWeight: '400',
            lineHeight: '1.1'
          }}>Our Aesthetic Team</h2>
        </div>

        {/* Team Grid (3 Columns) */}
        <div className="grid-responsive-3">
          {teamMembers.map((member, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
              <div style={{ position: 'relative', height: '400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                <Image src="/doctor_shrina.jpg" alt={member.name} fill style={{ objectFit: 'cover' }} />
                {member.isVisiting && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    right: '1rem', 
                    background: 'var(--accent-dark)', 
                    color: '#fff', 
                    padding: '0.4rem 1rem', 
                    borderRadius: '999px',
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }}>
                    Visiting Specialist
                  </div>
                )}
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--primary)', marginBottom: '0.4rem' }}>{member.name}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600' }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
