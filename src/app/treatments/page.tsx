import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import FaqSection from "../../components/FaqSection";

export default function TreatmentsPage() {
  const allTreatments = [
    {
      title: "Consultation",
      desc: "Our skincare consultation identifies your skin type, concerns, and goals to create a personalized skincare plan for you.",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
      slug: "consultation"
    },
    {
      title: "Korean Cell therapy",
      desc: "Korean Cell Therapy helps rejuvenate the skin, promoting a smoother, firmer, and more youthful-looking appearance.",
      img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800",
      slug: "korean-cell-therapy"
    },
    {
      title: "Skin Boosters",
      desc: "Deeply hydrate and revitalize your skin from within using premium micro-injections of hyaluronic acid and nutrients.",
      img: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
      slug: "skin-boosters"
    },
    {
      title: "Korean Facial",
      desc: "Experience the authentic glass skin facial that focuses on deep cleansing, intense hydration, and radiant glow.",
      img: "/treatment_korean.jpg",
      slug: "korean-facial"
    },
    {
      title: "Dermablate Laser Treatments",
      desc: "Advanced erbium laser technology for precise skin resurfacing, scar revision, and comprehensive skin rejuvenation.",
      img: "/treatment_hair_real.jpg",
      slug: "dermablate-laser"
    },
    {
      title: "Korean Anti-Aging",
      desc: "Support healthier, smoother, and more youthful-looking skin with personalized anti-aging treatments.",
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
      slug: "korean-anti-aging"
    },
    {
      title: "Korean Glass Skin Treatments",
      desc: "Achieve the coveted flawless, translucent complexion through a combination of tailored Korean aesthetic protocols.",
      img: "/bb-glow.jpg",
      slug: "korean-glass-skin"
    },
    {
      title: "Premium Botox",
      desc: "Expertly administered wrinkle relaxers for natural-looking expression smoothing and facial contouring.",
      img: "/treatment_anti_aging_real.jpg",
      slug: "premium-botox"
    },
    {
      title: "Vertue RF Microneedling",
      desc: "Combine radiofrequency energy with microneedling to stimulate collagen, tighten skin, and improve overall texture.",
      img: "/treatment_skin_brush.jpg",
      slug: "vertue-rf-microneedling"
    }
  ];

  return (
    <>
      <Header theme="dark" />
      <main style={{ minHeight: '100vh', background: '#FFFDF9' }}>

        {/* Ultra-Premium Treatments Hero Banner */}
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          height: '55vh',
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: '6rem',
          overflow: 'hidden'
        }}>
          {/* Background Image with slight zoom effect */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, animation: 'subtleZoom 20s infinite alternate' }}>
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2500"
              alt="Luxury Skin Treatments"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
            />
            {/* Multi-layered gradient for depth */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28, 46, 37, 0.4) 0%, rgba(28, 46, 37, 0.8) 100%)' }}></div>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(28, 46, 37, 0.6) 100%)' }}></div>
          </div>

          {/* Content */}
          <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            {/* Decorative Top Element */}
            <div style={{ 
              width: '1px', 
              height: '40px', 
              background: 'var(--accent)', 
              marginBottom: '1.5rem',
              animation: 'slideUp 1s ease-out'
            }}></div>
            
            <span style={{ 
              color: 'var(--accent)', 
              fontSize: '0.85rem', 
              fontWeight: '600', 
              letterSpacing: '0.3em', 
              textTransform: 'uppercase', 
              marginBottom: '1rem',
              animation: 'fadeIn 1s ease-out 0.2s both'
            }}>
              Our Expertise
            </span>

            <h1 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', 
              fontWeight: '400', 
              marginBottom: '1.5rem',
              color: '#FFFFFF',
              lineHeight: 1.1,
              animation: 'slideUp 1s ease-out 0.4s both'
            }}>
              Curated <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Treatments</span>
            </h1>

            <p style={{
              color: 'rgba(255,255,255,0.8)',
              maxWidth: '600px',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              animation: 'fadeIn 1s ease-out 0.6s both'
            }}>
              Discover our comprehensive range of advanced aesthetic procedures tailored to reveal your skin's true potential.
            </p>

            <div style={{ 
              fontSize: '0.85rem', 
              fontWeight: '500', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              animation: 'fadeIn 1s ease-out 0.8s both'
            }}>
              <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
              <span style={{ width: '30px', height: '1px', background: 'rgba(255,255,255,0.3)' }}></span>
              <span style={{ color: 'var(--accent)' }}>Treatments</span>
            </div>
          </div>
          
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes subtleZoom {
              from { transform: scale(1); }
              to { transform: scale(1.05); }
            }
          `}} />
        </div>

        {/* Our Best Treatments Grid */}
        <section style={{ padding: '6rem 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                color: 'var(--primary)',
                fontWeight: '400',
                lineHeight: '1.1'
              }}>
                Our Best Treatments
              </h2>
            </div>

            <div className="grid-responsive-3" style={{ gap: '2rem' }}>
              {allTreatments.map((t, index) => (
                <div key={index} style={{ background: '#FCFAF5', borderRadius: '32px', display: 'flex', flexDirection: 'column', overflow: 'hidden', height: '550px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                  <div style={{ padding: '3rem 2.5rem', flex: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: '#B69359', marginBottom: '1rem', fontWeight: '400' }}>
                      {t.title}
                    </h3>
                    <p style={{ color: 'var(--text-primary)', fontSize: '1rem', lineHeight: '1.6', fontWeight: '400' }}>
                      {t.desc}
                    </p>
                  </div>
                  <div style={{ position: 'relative', height: '240px', width: '100%' }}>
                    <Image
                      src={t.img}
                      alt={t.title}
                      fill
                      style={{ objectFit: 'cover', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

      </main>
      <Footer />
    </>
  );
}
