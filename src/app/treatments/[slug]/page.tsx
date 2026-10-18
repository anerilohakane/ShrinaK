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
  } else if (slug.includes('booster')) {
    imageUrl = "/skin-booster.jpg"; // User uploaded Skin Booster image
  } else if (slug.includes('botox')) {
    imageUrl = "/botox-treatment.jpg"; // User uploaded Botox treatment image
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

  // Dynamic Treatment Overview Data mapping (including user handwritten protocols)
  let overview = {
    area: 'Face & Neck',
    duration: '30-45 minutes',
    recovery: 'None to minimal',
    sessions: '4-6 sessions initially, then maintenance',
    results: 'Visible radiant glow and hydration within 24-48 hours, cumulative rejuvenation over 3-6 months',
    idealFor: ['Fine lines & wrinkles', 'Dehydrated skin', 'Uneven skin tone', 'Enlarged pores', 'Loss of elasticity', 'Dull & tired complexion']
  };

  if (slug.includes('exosome')) {
    overview = {
      area: 'Scalp',
      duration: '45-60 minutes',
      recovery: 'Minimal (24 hours)',
      sessions: '4-5 sessions recommended',
      results: 'Initial improvements with days, peak results.',
      idealFor: ['Hair thinning', 'Excessive hairfall', 'Weak hairs', 'Baldness']
    };
  } else if (slug.includes('hifu')) {
    overview = {
      area: 'Face, Body',
      duration: '30 to 90 minutes',
      recovery: 'None required',
      sessions: '1 treatment, optimal touch-ups annually',
      results: 'Peak results at 3-6 months, lasting 18-24 months.',
      idealFor: ['Mild to moderate skin laxity', 'Sagging jowls & jawline', 'Body skin tightening']
    };
  } else if (slug.includes('tag') || slug.includes('wart') || slug.includes('mole')) {
    overview = {
      area: 'Face, Neck, Body, Underarms',
      duration: '30-45 minutes',
      recovery: '3-7 days',
      sessions: 'Single session (most cases)',
      results: 'Immediate removal',
      idealFor: ['Skin tags on face, neck or body', 'Common warts', 'Flat warts']
    };
  } else if (slug.includes('booster')) {
    overview = {
      area: 'Face',
      duration: '30-45 minutes',
      recovery: 'Minimal (24 hours)',
      sessions: '2-3 initial treatments',
      results: 'Progressive improvement over 4-6 weeks, lasting 6-8 months.',
      idealFor: ['Dehydrated skin', 'Loss of skin radiance', 'Aging skin', 'Dull, tired complexion', 'Fine lines & crepey skin']
    };
  } else if (slug.includes('filler') || slug.includes('dermal')) {
    overview = {
      area: 'Face',
      duration: '30-45 minutes',
      recovery: 'Minimal (24-48 hours)',
      sessions: 'Single session, maintenance every 3-6 months',
      results: '3-5 days for anti wrinkle injections, immediate for fillers.',
      idealFor: ['Forehead lines & frown lines', 'Loss of facial volume', 'Nasolabial folds (smile lines)']
    };
  } else if (slug.includes('mnrf') || slug.includes('vertue')) {
    overview = {
      area: 'Face',
      duration: '30-60 minutes',
      recovery: 'Redness & swelling for few days, varies by individual',
      sessions: 'Usually 3-4 sessions, depending on skin concerns.',
      results: 'Gradual improvement in skin texture, firmness & acne scar appearance over several weeks to months.',
      idealFor: ['Acne scars', 'Enlarged pores', 'Fine lines', 'Skin rejuvenation']
    };
  } else if (slug.includes('subcis') || slug.includes('subscious')) {
    overview = {
      area: 'Face, primarily acne scarred cheeks',
      duration: '45-60 minutes.',
      recovery: 'Bruising & swelling may last 2-3 days',
      sessions: 'Usually 1-3 or more, depending on scar severity & response.',
      results: 'Gradual improvement in depressed acne scars over several weeks to months',
      idealFor: ['Rolling acne scars', 'Uneven skin texture', 'Atrophic acne scars', 'Depressed scars.']
    };
  } else if (slug.includes('tattoo')) {
    overview = {
      area: 'Any tattooed area',
      duration: '30-45 minutes depending on size',
      recovery: '1-2 weeks per session',
      sessions: '6-12 sessions typically required',
      results: 'Progressive fading with each session',
      idealFor: ['Unwanted tattoo', 'Faded or aging tattoos', 'Tattoo regret']
    };
  } else if (slug.includes('meso')) {
    overview = {
      area: 'Scalp',
      duration: '30-45 minutes',
      recovery: 'None to minimal',
      sessions: '4-6 sessions initially, then maintenance',
      results: 'Reduced hairfall within 2-3 sessions, visible improvement in 3-6 months.',
      idealFor: ['Early stage hair loss', 'Thinning hair', 'Dull and lifeless hair', 'Stress related hair fall']
    };
  } else if ((slug.includes('prp') && !slug.includes('face')) || slug.includes('biotin') || slug.includes('gfc')) {
    overview = {
      area: 'Scalp',
      duration: '30-45 minutes',
      recovery: 'Minimal (24 hours)',
      sessions: '6-9 sessions recommended',
      results: 'Visible improvement in 3-6 months.',
      idealFor: ['Early stage hair thinning', 'Post transplant support', 'Hair loss prevention']
    };
  } else if (slug.includes('microneedling') && !slug.includes('rf')) {
    overview = {
      area: 'Face, Lips',
      duration: '30-60 minutes',
      recovery: '2-5 days',
      sessions: '3 to 6 sessions for best results',
      results: 'Visible improvement after 2-3 sessions, optimal at 6 months.',
      idealFor: ['Acne scars', 'Surgical scars', 'Stretch marks', 'Fine lines & wrinkles', 'Enlarged pores', 'Dehydrated lips']
    };
  } else if (slug.includes('face-prp') || (slug.includes('prp') && (slug.includes('face') || slug.includes('skin')))) {
    overview = {
      area: 'Face',
      duration: '45-60 mins.',
      recovery: '24-48 hours',
      sessions: '3-4 initial sessions, maintenance every 6-12 months.',
      results: 'Gradual improvement over 3-6 months',
      idealFor: ['Fine lines & wrinkles', 'Dull, tired skin', 'Loss of skin elasticity', 'Under eye dark circles']
    };
  } else if (slug.includes('peel')) {
    overview = {
      area: 'Face, Neck, Hands, Legs, Back',
      duration: '25-30 minutes',
      recovery: '7-21 days depending on peel depth',
      sessions: 'Series of 3-6 sessions recommended',
      results: 'Visible improvement after first peel, optimal results after series.',
      idealFor: ['Sun damaged skin', 'Acne', 'Uneven skin tone', 'Melasma & hyperpigmentation', 'Rough skin texture']
    };
  } else if (slug.includes('hydra')) {
    overview = {
      area: 'Face',
      duration: '30 to 45 minutes',
      recovery: 'None required',
      sessions: 'Monthly for optimal results',
      results: 'Immediate glow, cumulative improvement over time.',
      idealFor: ['Dull, tired skin', 'Uneven skin tone', 'Dehydrated, dry skin', 'Congested pores & blackheads']
    };
  } else if (slug.includes('glutathione') || slug.includes('iv') || slug.includes('drip')) {
    overview = {
      area: 'Intravenous infusion under medical supervision',
      duration: 'Approximately 30-60 minutes.',
      recovery: 'Usually minimal downtime, monitoring is required',
      sessions: 'Individualized following medical assessment',
      results: 'Glutathione is an antioxidant involved in cellular process. Its effectiveness as an IV treatment for skin brightening remains uncertain.',
      idealFor: ['Antioxidant support', 'Cellular wellness', 'Fatigue recovery', 'Free-radical defense']
    };
  } else if (slug.includes('carbon')) {
    overview = {
      area: 'Face, Underarms, any selected body areas',
      duration: '20 to 30 minutes',
      recovery: 'Minimal',
      sessions: 'Usually 3-6 sessions, depending on skin concerns.',
      results: 'Smoother, clearer & more radiant skin after treatment.',
      idealFor: ['Oily skin', 'Dull looking skin', 'Congested pores', 'Uneven skin texture']
    };
  } else if (slug.includes('hair-reduction') || slug.includes('laser-hair')) {
    overview = {
      area: 'Face, Body, Bikini, Underarms, Legs, Hands',
      duration: '15-60 minutes depending on area',
      recovery: 'None required',
      sessions: '6-8 sessions for optimal results.',
      results: '70-90% permanent hair reduction',
      idealFor: ['Unwanted facial hair', 'Body hair removal', 'Ingrown hair prevention', 'Back and chest hair']
    };
  } else if (slug.includes('lip')) {
    overview = {
      area: 'Lips',
      duration: '45-60 minutes',
      recovery: '3-5 days mild flaking',
      sessions: '1-2 sessions, touch-up annually',
      results: 'Natural lush blush tint, defined lip contour, lasting 1-2 years.',
      idealFor: ['Pale lips', 'Uneven lip pigmentation', 'Smudged lip line', 'Effortless everyday color']
    };
  } else if (slug.includes('bb-glow') || (slug.includes('glow') && !slug.includes('glass'))) {
    overview = {
      area: 'Face & Neck',
      duration: '45-60 minutes',
      recovery: 'None',
      sessions: '3-4 sessions for lasting coverage',
      results: 'Instant semi-permanent BB foundation radiance and even complexion.',
      idealFor: ['Uneven skin tone', 'Redness & discoloration', 'Enlarged pores', 'No-makeup makeup look']
    };
  } else if (slug.includes('microblading') || slug.includes('brow')) {
    overview = {
      area: 'Eyebrows',
      duration: '60-90 minutes',
      recovery: '5-7 days mild healing',
      sessions: 'Initial session + 1 touch-up at 4-6 weeks',
      results: 'Hyper-realistic hair-like strokes lasting 12-18 months.',
      idealFor: ['Sparse brows', 'Over-plucked brows', 'Asymmetrical brows', 'Brow gap filling']
    };
  } else if (slug.includes('fractional') || slug.includes('co2')) {
    overview = {
      area: 'Face & Neck',
      duration: '45-60 minutes',
      recovery: '4-7 days micro-crusting & redness',
      sessions: '2-4 sessions spaced 4-6 weeks apart',
      results: 'Deep structural collagen tightening, dramatic scar smoothing, refined texture.',
      idealFor: ['Deep acne pits & scars', 'Skin laxity', 'Severe sun damage', 'Coarse skin texture']
    };
  } else if (slug.includes('scar')) {
    overview = {
      area: 'Face / Body targeted areas',
      duration: '30-45 minutes',
      recovery: '2-4 days mild redness',
      sessions: '3-6 sessions depending on scar depth',
      results: 'Progressive flattening, softening, and blending of scars with surrounding skin.',
      idealFor: ['Surgical scars', 'Post-acne blemishes', 'Injury marks', 'Hypertrophic scars']
    };
  } else if (slug.includes('mummy')) {
    overview = {
      area: 'Face, Jawline & Neck',
      duration: '60 minutes',
      recovery: 'None',
      sessions: 'Monthly or before special events',
      results: 'Immediate V-line sculpting, tight facial contour, and intense moisture lock.',
      idealFor: ['Facial puffiness', 'Sagging jawline', 'Tired complexion', 'Event preparation']
    };
  } else if (slug.includes('korean-scalp') || (slug.includes('scalp') && slug.includes('korean'))) {
    overview = {
      area: 'Scalp & Neck',
      duration: '60-75 minutes',
      recovery: 'None',
      sessions: 'Bi-weekly or monthly sessions',
      results: 'Deep follicular sebum detox, dandruff relief, relaxed and revitalized roots.',
      idealFor: ['Oily scalp buildup', 'Dandruff & flakes', 'Scalp tension', 'Root weakening']
    };
  } else if (slug.includes('hair') || slug.includes('scalp')) {
    overview = {
      area: 'Scalp',
      duration: '30-45 minutes',
      recovery: 'None to minimal',
      sessions: '4-6 sessions initially, then maintenance',
      results: 'Reduced hair fall within 2-3 sessions, visible improvement in 3-6 months',
      idealFor: ['Early-stage hair loss', 'Thinning hair', 'Androgenetic alopecia', 'Post-pregnancy hair loss', 'Stress-related hair fall', 'Dull and lifeless hair']
    };
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
            <div className="treatment-detail-content" style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                display: 'inline-block',
                border: '1px solid var(--accent-dark)',
                color: 'var(--accent-dark)',
                padding: '0.4rem 1.2rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: '600',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                alignSelf: 'flex-start'
              }}>
                SERVICE
              </span>
              
              <h1 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                color: 'var(--primary)',
                fontWeight: '500',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                {title}
              </h1>
              
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.98rem',
                lineHeight: '1.7',
                marginBottom: '1.75rem'
              }}>
                This is a detailed description for {title}. Experience the pinnacle of our {title.toLowerCase()} specifically tailored to rejuvenate and restore your natural beauty with precision clinical protocols.
              </p>

              {/* Treatment Overview Card (as shown in reference image) */}
              <div style={{
                background: '#FAF6EE',
                border: '1px solid rgba(182, 147, 89, 0.35)',
                borderRadius: '18px',
                padding: '1.75rem 1.5rem',
                marginBottom: '2rem'
              }}>
                <h3 style={{
                  color: '#B69359',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.15rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem'
                }}>
                  Treatment Overview
                </h3>

                {/* 2-Column Key Metrics */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1.25rem 1.5rem',
                  marginBottom: '1.25rem'
                }}>
                  {/* Area */}
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#B69359', fontSize: '1.15rem', lineHeight: '1.2' }}>📍</span>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--primary)' }}>Area</div>
                      <div style={{ fontSize: '0.9rem', color: '#555' }}>{overview.area}</div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#B69359', fontSize: '1.15rem', lineHeight: '1.2' }}>⏱️</span>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--primary)' }}>Duration</div>
                      <div style={{ fontSize: '0.9rem', color: '#555' }}>{overview.duration}</div>
                    </div>
                  </div>

                  {/* Recovery */}
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#B69359', fontSize: '1.15rem', lineHeight: '1.2' }}>🤍</span>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--primary)' }}>Recovery</div>
                      <div style={{ fontSize: '0.9rem', color: '#555' }}>{overview.recovery}</div>
                    </div>
                  </div>

                  {/* Sessions */}
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#B69359', fontSize: '1.15rem', lineHeight: '1.2' }}>📋</span>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--primary)' }}>Sessions</div>
                      <div style={{ fontSize: '0.9rem', color: '#555' }}>{overview.sessions}</div>
                    </div>
                  </div>
                </div>

                {/* Results Row */}
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <span style={{ color: '#B69359', fontSize: '1.15rem', lineHeight: '1.2' }}>🛡️</span>
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--primary)' }}>Results</div>
                    <div style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5' }}>
                      {overview.results}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <hr style={{ border: 'none', borderTop: '1px solid rgba(182, 147, 89, 0.25)', marginBottom: '1.25rem' }} />

                {/* Ideal For Section */}
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '0.85rem' }}>
                    Ideal For:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {overview.idealFor.map((tag, i) => (
                      <span key={i} style={{
                        border: '1px solid #2B3A33',
                        background: '#FAF6EE',
                        borderRadius: '8px',
                        padding: '0.35rem 0.75rem',
                        fontSize: '0.82rem',
                        fontWeight: '500',
                        color: '#1C2E25'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

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
                display: 'inline-flex',
                alignSelf: 'flex-start'
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
