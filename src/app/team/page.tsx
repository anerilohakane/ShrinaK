import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function TeamPage() {
  const team = [
    {
      name: "Dr. Sneha Wanve",
      title: "Aesthetic Physician | 5+ Years of Experience",
      image: "/dr-sneha-profile.jpg",
      isLead: true,
      bio: [
        "Dr. Sneha Wanve is an experienced Aesthetic Physician with over 5 years of experience in aesthetic and cosmetic care. She completed her medical graduation from Maharashtra University of Health Sciences (MUHS), Nashik, and has developed a strong clinical focus on personalised aesthetic treatments.",
        "At Shrina Korean Aesthetic Clinic, Dr. Sneha combines medical expertise with modern aesthetic techniques to create personalised treatment plans based on each patient’s individual skin, hair and aesthetic concerns.",
        "Her approach focuses on natural-looking results, patient safety, precision and personalised care, while keeping every treatment aligned with the patient’s goals and clinical needs."
      ]
    },
    {
      name: "Dr. Pooja Nagargoje",
      title: "Aesthetic & Cosmetology Professional | Skin & Hair Care",
      image: "/dr-pooja.jpg",
      bio: [
        "Passionate about healthy skin and natural beauty, Dr. Pooja believes in personalised aesthetic care that enhances confidence while preserving individuality.",
        "“Enhance your natural beauty, embrace your confidence.”"
      ]
    },
    {
      name: "Dr. Vaibhavi Manjare",
      title: "Consultant Aesthetic Physician",
      image: "/dr-vaibhavi.jpg",
      bio: [
        "Dedicated to personalised aesthetic care, Dr. Vaibhavi Manjare combines precision, artistry, and a patient-focused approach to create naturally beautiful and harmonious results.",
        "Driven by a passion for aesthetics and an eye for detail, Dr. Vaibhavi Manjare believes in enhancing individuality rather than changing it. Her approach combines personalised care, refined techniques, and a commitment to natural-looking, sophisticated results.",
        "“Aesthetics is not about changing who you are; it’s about enhancing what already makes you uniquely you.”"
      ]
    },
    {
      name: "Dr. Arti Aghao",
      title: "Aesthetic Physician | Advanced Aesthetics & Facial Enhancement",
      image: "/dr-arti.jpg",
      bio: [
        "Dr. Arti Aghao brings an artistic eye and a refined approach to modern aesthetic medicine. Specialising in semi-permanent makeup, advanced skin peels, and aesthetic injectables, she focuses on enhancing natural features with precision, balance, and sophistication.",
        "Her aesthetic philosophy is rooted in subtle transformation and timeless beauty—creating results that feel effortless, harmonious, and uniquely tailored to each individual."
      ]
    },
    {
      name: "Dr. Vaijayanti Nandankar",
      title: "Visiting Skin Specialist",
      image: "/dr-vaijayanti.jpg",
      bio: [
        "Dr. Vaijayanti Nandankar is a dedicated skin specialist known for her personalised and comprehensive approach to skin health. With a focus on understanding individual skin concerns, she combines clinical expertise with thoughtful, patient-centred care.",
        "Her approach is centred around healthy skin, personalised solutions, and naturally refined results, ensuring every patient receives care tailored to their unique needs."
      ]
    },
    {
      name: "Dr. Shweta Padole",
      title: "Visiting Hair Specialist",
      image: "/dr-shweta.jpg",
      bio: [
        "Dr. Shweta Padole is a dedicated hair specialist with a personalised approach to hair and scalp health. Her focus lies in understanding the individual factors behind hair concerns and creating tailored care strategies for healthier, stronger, and more beautiful hair.",
        "With a blend of clinical expertise, precision, and compassionate care, Dr. Shweta believes that exceptional hair care begins with understanding the unique needs of every patient—helping restore not just hair health, but confidence."
      ]
    },
    {
      name: "Dr. Vyankatesh Kalyankar",
      title: "PCOS & Hormonal Health Consultant",
      image: "/dr-vyankatesh.jpg",
      bio: [
        "Dr. Vyankatesh Kalyankar specialises in the comprehensive management of PCOS and hormonal health, with a personalised and patient-centred approach. His focus is on understanding each patient’s individual concerns and providing tailored guidance for long-term hormonal and reproductive wellbeing.",
        "With an emphasis on evidence-based care, personalised treatment plans, and compassionate consultation, Dr. Kalyankar helps patients navigate PCOS with confidence and clarity."
      ]
    },
    {
      name: "Sakshi Mengade",
      title: "Aesthetic Technician",
      image: "/sakshi-mengade.jpg",
      bio: [
        "Sakshi is a skilled aesthetic technician with a passion for advanced skin and beauty treatments. Specialising in HydraFacial and a range of aesthetic procedures, she combines technical precision with a gentle, detail-oriented approach to deliver a comfortable and elevated treatment experience.",
        "With a strong eye for detail and a commitment to personalised care, Sakshi focuses on enhancing skin health, radiance, and overall appearance—ensuring every treatment is tailored to the individual’s needs.",
        "“Precision in every step. Care in every detail.”"
      ]
    }
  ];

  return (
    <>
      <Header theme="light" />
      <main style={{ minHeight: '100vh', background: '#FCFAF5' }}>

        {/* Hero Section with Team Photo Background */}
        <div className="team-hero-banner">
          {/* Multi-tier Gradient: dark top for header readability, crystal clear middle for faces, and smooth dark bottom for text contrast */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(28, 46, 37, 0.65) 0%, rgba(28, 46, 37, 0.15) 18%, rgba(28, 46, 37, 0.0) 45%, rgba(28, 46, 37, 0.45) 75%, rgba(28, 46, 37, 0.85) 100%)',
            pointerEvents: 'none'
          }}></div>

          {/* Hero Content anchored cleanly at the bottom of the banner */}
          <div style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            color: '#fff',
            width: '100%',
            maxWidth: '800px',
            padding: '0.5rem 1rem',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.1rem, 4.5vw, 3.6rem)',
              fontWeight: '400',
              marginBottom: '0.4rem',
              letterSpacing: '0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.85), 0 2px 6px rgba(0,0,0,0.95)',
              color: '#fff',
              lineHeight: '1.1'
            }}>Meet Our Team</h1>
            <div style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              justifyContent: 'center', 
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', 
              fontWeight: '500', 
              letterSpacing: '0.05em',
              textShadow: '0 2px 8px rgba(0,0,0,0.9)'
            }}>
              <Link href="/" style={{ color: '#fff', textDecoration: 'none', opacity: 0.95 }}>Home</Link>
              <span style={{ opacity: 0.8 }}>&gt;</span>
              <span style={{ color: 'var(--accent)' }}>Our Team</span>
            </div>
          </div>
        </div>

        {/* Content Section - Alternating Layout */}
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 2rem 8rem 2rem' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {team.map((member, idx) => {
              const isEven = idx % 2 === 0;
              const isLead = member.isLead;
              // Get initials for placeholder
              const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: isEven ? 'row' : 'row-reverse',
                    gap: isLead ? '5rem' : '4rem',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    padding: isLead ? '2.5rem' : '0',
                    background: isLead ? '#FAF6EE' : 'transparent',
                    borderRadius: isLead ? '28px' : '0',
                    border: isLead ? '1px solid rgba(168, 130, 70, 0.25)' : 'none',
                    boxShadow: isLead ? '0 15px 35px rgba(28, 46, 37, 0.05)' : 'none'
                  }}
                >
                  {/* Image Container */}
                  <div style={{
                    flex: isLead ? '1 1 420px' : '0 1 330px',
                    width: isLead ? '100%' : '330px',
                    maxWidth: isLead ? '480px' : '330px',
                    position: 'relative',
                    height: isLead ? '540px' : '390px',
                    borderRadius: isLead ? '24px' : '20px',
                    overflow: 'hidden',
                    boxShadow: isLead ? '0 20px 40px rgba(0,0,0,0.12)' : '0 12px 30px rgba(0,0,0,0.06)',
                    background: 'var(--surface-alt)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: isLead ? '3px solid var(--accent)' : '1px solid rgba(0,0,0,0.06)'
                  }}>
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{ textAlign: 'center', color: 'var(--accent)' }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '4.5rem', opacity: 0.5 }}>{initials}</span>
                        <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7 }}>Photo Coming Soon</p>
                      </div>
                    )}

                    {isLead && (
                      <div style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        background: 'var(--primary)',
                        color: 'var(--accent)',
                        padding: '0.4rem 1rem',
                        borderRadius: '30px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                      }}>
                        Lead Physician
                      </div>
                    )}
                  </div>

                  {/* Text Container */}
                  <div style={{ flex: '1 1 360px', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                      <div style={{ width: isLead ? '5px' : '3px', height: isLead ? '42px' : '32px', background: 'var(--accent)', borderRadius: '2px' }}></div>
                      <h2 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: isLead ? '2.8rem' : '2.1rem',
                        color: 'var(--primary)',
                        margin: 0,
                        lineHeight: '1.2'
                      }}>
                        {member.name}
                      </h2>
                    </div>

                    <p style={{
                      color: 'var(--accent-dark)',
                      fontWeight: '600',
                      fontSize: isLead ? '1.05rem' : '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginTop: '-0.3rem'
                    }}>
                      {member.title}
                    </p>

                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      color: 'var(--text-secondary)',
                      fontSize: isLead ? '1.05rem' : '0.98rem',
                      lineHeight: '1.75'
                    }}>
                      {member.bio.map((paragraph, pIdx) => (
                        <p key={pIdx} style={{ margin: 0 }}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
