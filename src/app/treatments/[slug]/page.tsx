import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default async function TreatmentDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  
  // Convert slug back to a readable title for the demo
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Determine a relevant image based on the treatment slug
  let imageUrl = "/treatment_skin_brush.jpg"; // User requested image for default skin treatments

  if (slug.includes('hydra')) {
    imageUrl = "/hydra-facial.jpg"; // User uploaded Hydra Facial image
  } else if (slug.includes('hollywood')) {
    imageUrl = "/hollywood-facial.jpg"; // User uploaded Hollywood Facial image
  } else if (slug.includes('scar')) {
    imageUrl = "/scar-removal.jpg"; // User uploaded Scar Removal image
  } else if (slug.includes('mole')) {
    imageUrl = "/mole-removal.jpg"; // User uploaded Mole Removal image
  } else if (slug.includes('iv') || slug.includes('drip') || slug.includes('fat-loss')) {
    imageUrl = "/iv-drip.jpg"; // User uploaded IV Drip image
  } else if (slug.includes('mnrf')) {
    imageUrl = "/mnrf.jpg"; // User uploaded MNRF treatment image
  } else if (slug.includes('subcis') || slug.includes('subscious')) {
    imageUrl = "/subcision.jpg"; // User uploaded Subcision acne scar treatment image
  } else if (slug.includes('face-prp')) {
    imageUrl = "/face-prp.jpg"; // User uploaded Face PRP image
  } else if (slug.includes('exosome')) {
    imageUrl = "/exosomes.jpg"; // User uploaded Exosomes treatment image
  } else if (slug.includes('prp')) {
    imageUrl = "/prp-treatment.jpg"; // User uploaded PRP treatment image
  } else if (slug.includes('scalp')) {
    imageUrl = "/korean-scalp.jpg"; // User uploaded Korean Scalp treatment image
  } else if (slug.includes('microneedling')) {
    imageUrl = "/microneedling.jpg"; // User uploaded Microneedling treatment image
  } else if (slug.includes('korean')) {
    imageUrl = "/treatment_korean.jpg"; // User requested image for Korean treatments
  } else if (slug.includes('hair-reduction') || slug.includes('laser-hair')) {
    imageUrl = "/laser-hair-reduction.jpg"; // User uploaded Laser Hair Reduction image
  } else if (slug.includes('hair') || slug.includes('gfc') || slug.includes('meso')) {
    imageUrl = "/hair-treatment.jpg"; // User uploaded hair treatment image
  } else if (slug.includes('tattoo')) {
    imageUrl = "/tattoo-removal.jpg"; // User uploaded Tattoo Removal image
  } else if (slug.includes('laser')) {
    imageUrl = "/treatment_hair_real.jpg"; // User requested image for other laser treatments
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
      
      <main style={{ paddingTop: '8rem', paddingBottom: '5rem', minHeight: '100vh', background: 'var(--background)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          
          <div className="treatment-detail-card" style={{ 
            background: '#fff',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 4px 40px rgba(0,0,0,0.03)'
          }}>
            {/* Image Container */}
            <div className="treatment-detail-image" style={{ position: 'relative', width: '100%' }}>
              <Image
                src={imageUrl}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>

            {/* Content Container */}
            <div className="treatment-detail-content">
              <span style={{
                display: 'inline-block',
                border: '1px solid var(--accent-dark)',
                color: 'var(--accent-dark)',
                padding: '0.4rem 1.2rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: '600',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem'
              }}>
                SERVICE
              </span>
              
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                color: 'var(--primary)',
                fontWeight: '400',
                marginBottom: '1.25rem',
                lineHeight: '1.2'
              }}>
                {title}
              </h1>
              
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: '1.7',
                marginBottom: '2rem'
              }}>
                This is a detailed description for {title}. Experience the pinnacle of our {title.toLowerCase()} specifically tailored to rejuvenate and restore your natural beauty. Combining proven clinical methods and extensive care, we bring the best out of you.
              </p>

              <a href="https://wa.me/918979797220" target="_blank" rel="noopener noreferrer" className="btn" style={{
                background: 'var(--accent)',
                color: 'var(--primary)',
                padding: '0.9rem 2.2rem',
                borderRadius: '9999px',
                border: 'none',
                fontWeight: '600',
                fontSize: '0.95rem',
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
