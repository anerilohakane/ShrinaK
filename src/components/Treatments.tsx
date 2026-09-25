"use client";

import Image from "next/image";
import Link from "next/link";

export default function Treatments() {
  const treatments = [
    {
      title: "Skin Treatments",
      slug: "skin-treatments",
      desc: "Healthy, radiant, and deeply hydrated skin",
      img: "/treatment_skin_brush.jpg"
    },
    {
      title: "Korean Treatments",
      slug: "korean-treatments",
      desc: "Authentic glass skin and scalp care",
      img: "/treatment_korean.jpg"
    },
    {
      title: "Hair Treatments",
      slug: "hair-treatments",
      desc: "Effective therapies to restore and strengthen hair",
      img: "/hair-treatment.jpg"
    },
    {
      title: "Laser Treatment",
      slug: "laser-treatment",
      desc: "Advanced laser solutions for flawless skin",
      img: "/treatment_hair_real.jpg"
    },
    {
      title: "Semi-Permanent Makeup",
      slug: "semi-permanent-makeup",
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
            <Link key={i} href={`/treatments/${t.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                position: 'relative',
                height: '450px',
                borderRadius: '200px 200px 24px 24px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-10px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
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
                  justifyContent: 'flex-end',
                  height: '40%'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--primary)',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>{t.title}</h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: '1.4',
                  }}>
                    {t.desc}
                  </p>
                </div>
              </div>
            </Link>
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

          <div className="grid-responsive-4" style={{ alignItems: 'start', gap: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>

            {/* HAIR */}
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a2942', marginBottom: '1.5rem', textTransform: 'uppercase' }}>HAIR</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {["GFC", "Exosomes", "PRP", "Meso", "Korean Scalp Treatment", "Microneedling"].map((item, i) => {
                  const itemSlug = item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  return (
                    <li key={i}>
                      <Link href={`/treatments/${itemSlug}`} style={{ color: '#555', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-dark)'} onMouseLeave={(e) => e.currentTarget.style.color = '#555'}>
                        <span style={{ color: '#B69359', fontSize: '1.2rem', marginTop: '-4px' }}>•</span> {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* SKIN */}
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a2942', marginBottom: '1.5rem', textTransform: 'uppercase' }}>SKIN</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {["Hydra Facial", "Carbon Laser", "Chemical Peels", "Face PRP", "Face Microneedling", "Subcision", "MNRF", "Laser Hair Reduction", "Mummy Mask Facial", "Glutathione IV Drip", "Fat Loss IV Drip", "Mole Removal", "Korean Peel"].map((item, i) => {
                  const itemSlug = item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  return (
                    <li key={i}>
                      <Link href={`/treatments/${itemSlug}`} style={{ color: '#555', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-dark)'} onMouseLeave={(e) => e.currentTarget.style.color = '#555'}>
                        <span style={{ color: '#B69359', fontSize: '1.2rem', marginTop: '-4px' }}>•</span> {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* LASER */}
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a2942', marginBottom: '1.5rem', textTransform: 'uppercase' }}>LASER</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {["Laser Hair Reduction", "Fractional Laser Treatment", "Scar Removal Treatment", "Tattoo Removal", "Hollywood Facial"].map((item, i) => {
                  const itemSlug = item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  return (
                    <li key={i}>
                      <Link href={`/treatments/${itemSlug}`} style={{ color: '#555', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-dark)'} onMouseLeave={(e) => e.currentTarget.style.color = '#555'}>
                        <span style={{ color: '#B69359', fontSize: '1.2rem', marginTop: '-4px' }}>•</span> {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* SEMI-PERMANENT MAKEUP */}
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a2942', marginBottom: '1.5rem', textTransform: 'uppercase' }}>SEMI-PERMANENT MAKEUP</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {["Microblading", "Lip Tint", "BB Glow"].map((item, i) => {
                  const itemSlug = item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  return (
                    <li key={i}>
                      <Link href={`/treatments/${itemSlug}`} style={{ color: '#555', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-dark)'} onMouseLeave={(e) => e.currentTarget.style.color = '#555'}>
                        <span style={{ color: '#B69359', fontSize: '1.2rem', marginTop: '-4px' }}>•</span> {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
