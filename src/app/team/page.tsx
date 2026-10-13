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
      bio: [
        "Dr. Sneha Wanve is an experienced Aesthetic Physician with over 5 years of experience in aesthetic and cosmetic care. She completed her medical graduation from Maharashtra University of Health Sciences (MUHS), Nashik, and has developed a strong clinical focus on personalised aesthetic treatments.",
        "At Shrina Korean Aesthetic Clinic, Dr. Sneha combines medical expertise with modern aesthetic techniques to create personalised treatment plans based on each patient’s individual skin, hair and aesthetic concerns.",
        "Her approach focuses on natural-looking results, patient safety, precision and personalised care, while keeping every treatment aligned with the patient’s goals and clinical needs."
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
      name: "Dr. Vyankatesh Kalyankar",
      title: "PCOS & Hormonal Health Consultant",
      image: "",
      bio: [
        "Dr. Vyankatesh Kalyankar specialises in the comprehensive management of PCOS and hormonal health, with a personalised and patient-centred approach. His focus is on understanding each patient’s individual concerns and providing tailored guidance for long-term hormonal and reproductive wellbeing.",
        "With an emphasis on evidence-based care, personalised treatment plans, and compassionate consultation, Dr. Kalyankar helps patients navigate PCOS with confidence and clarity."
      ]
    },
    {
      name: "Dr. Sakshi Mengade",
      title: "Aesthetic Technician",
      image: "/sakshi-mengade.jpg",
      bio: [
        "Sakshi is a skilled aesthetic technician with a passion for advanced skin and beauty treatments. Specialising in HydraFacial and a range of aesthetic procedures, she combines technical precision with a gentle, detail-oriented approach to deliver a comfortable and elevated treatment experience.",
        "With a strong eye for detail and a commitment to personalised care, Sakshi focuses on enhancing skin health, radiance, and overall appearance—ensuring every treatment is tailored to the individual’s needs.",
        "Precision in every step. Care in every detail."
      ]
    }
  ];

  return (
    <>
      <Header theme="light" />
      <main style={{ minHeight: '100vh', background: '#FCFAF5' }}>
        
        {/* Hero Section */}
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          height: '50vh',
          minHeight: '400px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'url("https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0 0 40px 40px',
          overflow: 'hidden'
        }}>
          {/* Dark Overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(28, 46, 37, 0.6)' }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff' }}>
            <h1 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
              fontWeight: '400',
              marginBottom: '1rem',
              letterSpacing: '0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.1)',
              color: '#fff'
            }}>Meet Our Team</h1>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.05em' }}>
              <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
              <span>&gt;</span>
              <span style={{ color: 'var(--accent)' }}>Our Team</span>
            </div>
          </div>
        </div>

        {/* Content Section - Alternating Layout */}
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '8rem 2rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {team.map((member, idx) => {
              const isEven = idx % 2 === 0;
              // Get initials for placeholder
              const initials = member.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

              return (
                <div 
                  key={idx} 
                  style={{ 
                    display: 'flex',
                    flexDirection: isEven ? 'row' : 'row-reverse',
                    gap: '5rem',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                  }}
                >
                  {/* Image Container */}
                  <div style={{ 
                    flex: '1 1 400px',
                    position: 'relative', 
                    height: '550px', 
                    borderRadius: '24px', 
                    overflow: 'hidden', 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                    background: 'var(--surface-alt)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
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
                        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '5rem', opacity: 0.5 }}>{initials}</span>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7 }}>Photo Coming Soon</p>
                      </div>
                    )}
                  </div>

                  {/* Text Container */}
                  <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '4px', height: '40px', background: 'var(--accent)', borderRadius: '2px' }}></div>
                      <h2 style={{ 
                        fontFamily: 'var(--font-heading)', 
                        fontSize: '2.8rem', 
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
                      fontSize: '1.1rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.05em',
                      marginTop: '-0.5rem'
                    }}>
                      {member.title}
                    </p>
                    
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '1.2rem', 
                      color: 'var(--text-secondary)', 
                      fontSize: '1.1rem', 
                      lineHeight: '1.8' 
                    }}>
                      {member.bio.map((paragraph, pIdx) => (
                        <p key={pIdx}>{paragraph}</p>
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
