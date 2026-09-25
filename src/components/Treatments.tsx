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

        {/* Our Best Services Section */}
        <div style={{ marginTop: '10rem' }}>

          <div style={{ marginBottom: '4rem' }}>
            <span style={{
              display: 'inline-block',
              border: '1px solid #B69359',
              color: '#B69359',
              padding: '0.5rem 1.5rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '2rem'
            }}>
              SERVICES
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              color: 'var(--primary)',
              fontWeight: '400',
              lineHeight: '1.1',
              margin: 0
            }}>
              Our <span style={{ color: '#B69359' }}>Best Services</span>
            </h2>
          </div>

          <div className="grid-responsive-3" style={{ gap: '2rem' }}>

            {/* Card 1 */}
            <div style={{ background: '#FCFAF5', borderRadius: '32px', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '600px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
              <div style={{ padding: '3rem 2.5rem', flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#B69359', marginBottom: '1.5rem', fontWeight: '400' }}>
                  Consultation
                </h3>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.6', fontWeight: '400' }}>
                  Our skincare consultation identifies your skin type, concerns, and goals to create a personalized skincare plan for you.
                </p>
              </div>
              <div style={{ position: 'relative', height: '250px', width: '100%' }}>
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                  alt="Consultation"
                  fill
                  style={{ objectFit: 'cover', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}
                />
              </div>
            </div>

            {/* Card 2 */}
            <div style={{ background: '#FCFAF5', borderRadius: '32px', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '600px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
              <div style={{ padding: '3rem 2.5rem', flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#B69359', marginBottom: '1.5rem', fontWeight: '400' }}>
                  Non Surgical Lifting
                </h3>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.6', fontWeight: '400' }}>
                  Non-surgical lifting gently tightens and lifts the skin, enhancing facial contours for a firmer, youthful appearance.
                </p>
              </div>
              <div style={{ position: 'relative', height: '250px', width: '100%' }}>
                <Image
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800"
                  alt="Non Surgical Lifting"
                  fill
                  style={{ objectFit: 'cover', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}
                />
              </div>
            </div>

            {/* Card 3 */}
            <div style={{ background: '#FCFAF5', borderRadius: '32px', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '600px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
              <div style={{ padding: '3rem 2.5rem', flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#B69359', marginBottom: '1.5rem', fontWeight: '400' }}>
                  Korean Cell therapy
                </h3>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.6', fontWeight: '400' }}>
                  Korean Cell Therapy helps rejuvenate the skin, promoting a smoother, firmer, and more youthful-looking appearance.
                </p>
              </div>
              <div style={{ position: 'relative', height: '250px', width: '100%' }}>
                <Image
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800"
                  alt="Korean Cell therapy"
                  fill
                  style={{ objectFit: 'cover', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}
                />
              </div>
            </div>

            {/* Card 4 */}
            <div style={{ background: '#FCFAF5', borderRadius: '32px', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '600px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
              <div style={{ padding: '3rem 2.5rem', flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#B69359', marginBottom: '1.5rem', fontWeight: '400' }}>
                  Korean Glow Facial
                </h3>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.6', fontWeight: '400' }}>
                  It helps improve skin texture, reduce dullness, and gives your face a fresh, smooth, and naturally radiant Korean glass-skin glow.
                </p>
              </div>
              <div style={{ position: 'relative', height: '250px', width: '100%' }}>
                <Image
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800"
                  alt="Korean Glow Facial"
                  fill
                  style={{ objectFit: 'cover', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}
                />
              </div>
            </div>

            {/* Card 5 */}
            <div style={{ background: '#FCFAF5', borderRadius: '32px', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '600px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
              <div style={{ padding: '3rem 2.5rem', flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#B69359', marginBottom: '1.5rem', fontWeight: '400' }}>
                  Anti-Aging Treatments
                </h3>
                <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.6', fontWeight: '400' }}>
                  Support healthier, smoother, and more youthful-looking skin with personalized anti-aging treatments at Shrina  Skin Clinic.
                </p>
              </div>
              <div style={{ position: 'relative', height: '250px', width: '100%' }}>
                <Image
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
                  alt="Anti-Aging Treatments"
                  fill
                  style={{ objectFit: 'cover', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}
                />
              </div>
            </div>

            {/* Card 6 (No Image, Just Text and Button) */}
            <div style={{ background: '#FCFAF5', borderRadius: '32px', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '600px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '3rem' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '3rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: '400', lineHeight: '1.1' }}>
                Other <span style={{ color: '#B69359' }}>Korean<br />Treatments</span>
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', fontWeight: '400', marginBottom: '3rem' }}>
                Explore detailed information about this treatment, including how it works, who it's suitable for, its key benefits, recovery time, and the results you can expect from our expert care.
              </p>
              <Link href="/treatments" style={{
                background: '#000',
                color: '#fff',
                padding: '1.2rem 2.5rem',
                borderRadius: '999px',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                transition: 'background 0.3s'
              }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#333')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#000')}
              >
                <span>&rarr;</span> More Treatments
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
