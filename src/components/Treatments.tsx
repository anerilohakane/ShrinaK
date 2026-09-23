"use client";

import Image from "next/image";
import Link from "next/link";

export default function Treatments() {
  const treatments = [
    {
      title: "Skin Treatments",
      desc: "Healthy, radiant, and deeply hydrated skin",
      img: "/treatment_skin_brush.jpg"
    },
    {
      title: "Korean Treatments",
      desc: "Authentic glass skin and scalp care",
      img: "/treatment_korean.jpg"
    },
    {
      title: "Hair Treatments",
      desc: "Effective therapies to restore and strengthen hair",
      img: "/treatment_skin_real.jpg"
    },
    {
      title: "Laser Treatment",
      desc: "Advanced laser solutions for flawless skin",
      img: "/treatment_hair_real.jpg"
    },
    {
      title: "Semi-Permanent Makeup",
      desc: "Wake up beautiful with flawless, lasting enhancements",
      img: "/treatment_anti_aging_real.jpg"
    }
  ];

  return (
    <section id="treatments" style={{ background: 'var(--surface-alt)', padding: '6rem 0' }}>
      <div className="container">

        {/* Header Area */}
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginBottom: '4rem' }}>
          <div>
            <span style={{
              display: 'block',
              fontSize: '0.7rem',
              fontWeight: '600',
              color: 'var(--accent-dark)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>Our Treatments</span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3.5rem',
              color: 'var(--primary)',
              fontWeight: '400',
              lineHeight: '1.1',
              margin: 0
            }}>Personalized Treatments.<br />Real Results.</h2>
          </div>
        </div>

        {/* Cards Area */}
        <div className="grid-responsive-5">
          {treatments.map((t, i) => (
            <div key={i} style={{
              position: 'relative',
              height: '450px',
              borderRadius: '200px 200px 24px 24px',
              overflow: 'hidden',
              cursor: 'pointer'
            }}>
              {/* Background Image */}
              <Image
                src={t.img}
                alt={t.title}
                fill
                style={{ objectFit: 'cover' }}
              />

              {/* Overlay Gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(244, 242, 235, 0) 50%, rgba(244, 242, 235, 0.9) 100%)'
              }}></div>

              {/* Content */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '40%'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: 'var(--primary)',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>{t.title}</h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: '1.4',
                    whiteSpace: 'pre-line'
                  }}>
                    {t.desc}
                  </p>
                </div>
                {/* <div style={{
                  alignSelf: 'flex-end',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '1.2rem'
                }}>
                  →
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Treatment List */}
        <div style={{ marginTop: '8rem', background: '#fff', padding: '4rem', borderRadius: '24px', boxShadow: '0 4px 40px rgba(0,0,0,0.03)' }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2.5rem',
            color: 'var(--primary)',
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: '4rem'
          }}>Explore Our Full Range of Treatments</h3>

          <div className="grid-responsive-5" style={{ alignItems: 'start', gap: '3rem' }}>

            {/* SKIN */}
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>SKIN</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {["Hydra Facial", "Carbon Laser", "Chemical Peels", "Face PRP", "Face Microneedling", "Subcision", "MNRF", "Laser Hair Reduction", "Mummy Mask Facial", "Glutathione IV Drip", "Fat Loss IV Drip", "Mole Removal", "Korean Peel"].map((item, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '1rem', marginTop: '-2px' }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* KOREAN TREATMENTS */}
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>KOREAN TREATMENTS</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {["Korean Hydra Facial", "Korean Peel", "Glass Skin Facial", "Aqua Peel", "Shurink HIFU", "PDRN/Salmon DNA & exosome treatments", "Botox and dermal fillers", "Korean scalp treatments"].map((item, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '1rem', marginTop: '-2px' }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* HAIR */}
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>HAIR</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {["GFC", "Exosomes", "PRP", "Meso", "Korean Scalp Treatment", "Microneedling"].map((item, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '1rem', marginTop: '-2px' }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* LASER */}
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>LASER</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {["Laser Hair Reduction", "Fractional Laser Treatment", "Scar Removal Treatment", "Tattoo Removal", "Hollywood Facial"].map((item, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '1rem', marginTop: '-2px' }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SEMI-PERMANENT MAKEUP */}
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>SEMI-PERMANENT MAKEUP</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {["Microblading", "Lip Tint", "BB Glow"].map((item, i) => (
                  <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '1rem', marginTop: '-2px' }}>•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
