import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default async function TreatmentDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  
  // Convert slug back to a readable title for the demo
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Determine a relevant image based on the treatment slug
  let imageUrl = "/treatment_skin_brush.jpg"; // User requested image for default skin treatments

  if (slug.includes('korean')) {
    imageUrl = "/treatment_korean.jpg"; // User requested image for Korean treatments
  } else if (slug.includes('hair') || slug.includes('scalp') || slug.includes('gfc') || slug.includes('exosome') || slug.includes('prp') || slug.includes('meso') || slug.includes('microneedling')) {
    imageUrl = "/hair-treatment.jpg"; // User uploaded hair treatment image
  } else if (slug.includes('laser') || slug.includes('tattoo')) {
    imageUrl = "/treatment_hair_real.jpg"; // User requested image for laser treatments
  } else if (slug.includes('lip')) {
    imageUrl = "/lip-tint.jpg"; // User uploaded lip tint image
  } else if (slug.includes('glow')) {
    imageUrl = "/bb-glow.jpg"; // User uploaded BB glow image
  } else if (slug.includes('microblading') || slug.includes('makeup')) {
    imageUrl = "/treatment_anti_aging_real.jpg"; // User requested image for makeup treatments
  }

  return (
    <>
      <Header theme="dark" />
      
      <main style={{ paddingTop: '10rem', paddingBottom: '6rem', minHeight: '100vh', background: 'var(--background)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem',
            alignItems: 'center',
            background: '#fff',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 4px 40px rgba(0,0,0,0.03)'
          }}>
            {/* Left Image */}
            <div style={{ position: 'relative', height: '100%', minHeight: '600px' }}>
              <Image
                src={imageUrl}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Right Content */}
            <div style={{ padding: '4rem 4rem 4rem 0' }}>
              <span style={{
                display: 'inline-block',
                border: '1px solid var(--accent-dark)',
                color: 'var(--accent-dark)',
                padding: '0.4rem 1.2rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: '600',
                letterSpacing: '0.1em',
                marginBottom: '1.5rem'
              }}>
                SERVICE
              </span>
              
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '3.5rem',
                color: 'var(--primary)',
                fontWeight: '400',
                marginBottom: '1.5rem',
                lineHeight: '1.2'
              }}>
                {title}
              </h1>
              
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                lineHeight: '1.7',
                marginBottom: '2.5rem'
              }}>
                This is a detailed description for {title}. Experience the pinnacle of our {title.toLowerCase()} specifically tailored to rejuvenate and restore your natural beauty. Combining proven clinical methods and extensive care, we bring the best out of you.
              </p>

              <a href="https://wa.me/918979797220" target="_blank" rel="noopener noreferrer" className="btn" style={{
                background: 'var(--accent)',
                color: 'var(--primary)',
                padding: '1rem 2.5rem',
                borderRadius: '9999px',
                border: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-flex'
              }}>
                Book Consultation
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
