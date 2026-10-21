import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import FaqSection from "../../components/FaqSection";

export default function TreatmentsPage() {
  const allTreatments = [
    {
      title: "Consultation",
      desc: "Discover a personalised approach to your skin and hair goals. Our expert consultations include a detailed assessment, professional guidance, and customised treatment recommendations tailored to your unique needs.\n\n“Where science meets the art of aesthetics.”",
      img: "/consultation-service.jpg",
      slug: "consultation",
      area: "Full Face & Scalp",
      duration: "30-45 minutes",
      recovery: "None",
      sessions: "1 initial assessment",
      results: "Personalised treatment roadmap and customized skincare regimen",
      idealFor: ["New clients", "Skin concerns", "Hair thinning", "Anti-aging goals", "Customized care"]
    },
    {
      title: "Skin Boosters",
      desc: "Deeply hydrate and revitalize your skin from within using premium micro-injections of hyaluronic acid and nutrients.",
      img: "/skin-booster.jpg",
      slug: "skin-boosters",
      area: "Face",
      duration: "30-45 minutes",
      recovery: "Minimal (24 hours)",
      sessions: "2-3 initial treatments",
      results: "Progressive improvement over 4-6 weeks, lasting 6-8 months.",
      idealFor: ["Dehydrated skin", "Loss of skin radiance", "Aging skin", "Dull, tired complexion", "Fine lines & crepey skin"]
    },
    {
      title: "Korean Facial",
      desc: "Experience the authentic glass skin facial that focuses on deep cleansing, intense hydration, and radiant glow.",
      img: "/treatment_korean.jpg",
      slug: "korean-facial",
      area: "Face & Neck",
      duration: "60-75 minutes",
      recovery: "None (Instant glow)",
      sessions: "Monthly maintenance",
      results: "Luminous glass-skin clarity, refined pores, and deep cellular hydration",
      idealFor: ["Congested pores", "Dull skin", "Event preparation", "Uneven texture", "Dehydration"]
    },
    {
      title: "CO2 Fractional Laser",
      desc: "Advanced fractional laser technology for deep collagen remodeling, acne scar resurfacing, and total skin renewal.",
      img: "/co2-fractional-laser.jpg",
      slug: "co2-fractional-laser",
      area: "Face & Neck",
      duration: "45-60 minutes",
      recovery: "4-7 days micro-crusting & redness",
      sessions: "2-4 sessions",
      results: "Deep structural collagen tightening, dramatic scar smoothing, and refined skin texture",
      idealFor: ["Deep acne pits & scars", "Skin laxity", "Severe sun damage", "Coarse skin texture", "Enlarged pores"]
    },
    {
      title: "Korean Anti-Aging",
      desc: "Support healthier, smoother, and more youthful-looking skin with personalized anti-aging treatments.",
      img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
      slug: "korean-anti-aging",
      area: "Face, Neck & Décolleté",
      duration: "60 minutes",
      recovery: "None to minimal",
      sessions: "4-6 sessions",
      results: "Noticeable firming, reduced wrinkles, and rejuvenated skin elasticity",
      idealFor: ["Fine lines", "Skin laxity", "Mature skin", "Collagen depletion", "Expression lines"]
    },
    {
      title: "Korean Glass Skin Treatments",
      desc: "Achieve the coveted flawless, translucent complexion through a combination of tailored Korean aesthetic protocols.",
      img: "/bb-glow.jpg",
      slug: "korean-glass-skin",
      area: "Full Face",
      duration: "60 minutes",
      recovery: "None",
      sessions: "3-4 sessions",
      results: "Dewy translucent glow, even skin tone, and minimized pore appearance",
      idealFor: ["Pigmentation", "Uneven tone", "Blemish marks", "Dull complexion", "Dry patches"]
    },
    {
      title: "Premium Botox",
      desc: "Expertly administered wrinkle relaxers for natural-looking expression smoothing and facial contouring.",
      img: "/botox-treatment.jpg",
      slug: "premium-botox",
      area: "Upper Face / Jawline",
      duration: "20-30 minutes",
      recovery: "Zero downtime",
      sessions: "Every 4-6 months",
      results: "Softened expression lines within 3-7 days, full natural smoothing in 14 days",
      idealFor: ["Forehead lines", "Crow's feet", "Frown lines", "Jaw slimming", "Preventative anti-aging"]
    },
    {
      title: "MNRF (Microneedling Radiofrequency)",
      desc: "Advanced radiofrequency microneedling to stimulate deep collagen remodeling, tighten skin, and minimize stubborn acne scars.",
      img: "/mnrf.jpg",
      slug: "mnrf",
      area: "Face",
      duration: "30-60 minutes",
      recovery: "Redness & swelling for few days, varies by individual",
      sessions: "Usually 3-4 sessions, depending on skin concerns.",
      results: "Gradual improvement in skin texture, firmness & acne scar appearance over several weeks to months.",
      idealFor: ["Acne scars", "Enlarged pores", "Fine lines", "Skin rejuvenation"]
    },
    {
      title: "Face Microneedling",
      desc: "Stimulate natural collagen and elastin induction for scar revision, fine line reduction, and deep cellular renewal.",
      img: "/microneedling.jpg",
      slug: "face-microneedling",
      area: "Face, Lips",
      duration: "30-60 minutes",
      recovery: "2-5 days",
      sessions: "3 to 6 sessions for best results",
      results: "Visible improvement after 2-3 sessions, optimal at 6 months.",
      idealFor: ["Acne scars", "Surgical scars", "Stretch marks", "Fine lines & wrinkles", "Enlarged pores", "Dehydrated lips"]
    },
    {
      title: "PRP for Face",
      desc: "Harness your body's own concentrated growth factors to deeply revitalize skin elasticity, repair fine lines, and brighten under-eyes.",
      img: "/face-prp.jpg",
      slug: "face-prp",
      area: "Face",
      duration: "45-60 mins.",
      recovery: "24-48 hours",
      sessions: "3-4 initial sessions, maintenance every 6-12 months.",
      results: "Gradual improvement over 3-6 months",
      idealFor: ["Fine lines & wrinkles", "Dull, tired skin", "Loss of skin elasticity", "Under eye dark circles"]
    },
    {
      title: "Chemical Peels",
      desc: "Medical-grade exfoliating peels designed to strip away sun-damaged layers, diminish melasma, and reveal velvety-soft skin.",
      img: "/chemical-peel.jpg",
      slug: "chemical-peels",
      area: "Face, Neck, Hands, Legs, Back",
      duration: "25-30 minutes",
      recovery: "7-21 days depending on peel depth",
      sessions: "Series of 3-6 sessions recommended",
      results: "Visible improvement after first peel, optimal results after series.",
      idealFor: ["Sun damaged skin", "Acne", "Uneven skin tone", "Melasma & hyperpigmentation", "Rough skin texture"]
    },
    {
      title: "Hydra Facial",
      desc: "Multi-step medical hydra-dermabrasion that vacuums out impurities, extracts blackheads, and infuses restorative antioxidant serums.",
      img: "/hydra-facial.jpg",
      slug: "hydra-facial",
      area: "Face",
      duration: "30 to 45 minutes",
      recovery: "None required",
      sessions: "Monthly for optimal results",
      results: "Immediate glow, cumulative improvement over time.",
      idealFor: ["Dull, tired skin", "Uneven skin tone", "Dehydrated, dry skin", "Congested pores & blackheads"]
    },
    {
      title: "Laser Hair Reduction",
      desc: "State-of-the-art diode laser technology for painless, long-lasting hair reduction across all skin and body types.",
      img: "/laser-hair-reduction.jpg",
      slug: "laser-hair-reduction",
      area: "Face, Body, Bikini, Underarms, Legs, Hands",
      duration: "15-60 minutes depending on area",
      recovery: "None required",
      sessions: "6-8 sessions for optimal results.",
      results: "70-90% permanent hair reduction",
      idealFor: ["Unwanted facial hair", "Body hair removal", "Ingrown hair prevention", "Back and chest hair"]
    },
    {
      title: "Hair Exosomes",
      desc: "Next-generation cellular biotechnology delivering potent bioactive growth factors directly to revitalize thinning hair and follicles.",
      img: "/hair-exosomes.jpg",
      slug: "hair-exosomes",
      area: "Scalp",
      duration: "45-60 minutes",
      recovery: "Minimal (24 hours)",
      sessions: "4-5 sessions recommended",
      results: "Initial improvements with days, peak results.",
      idealFor: ["Hair thinning", "Excessive hairfall", "Weak hairs", "Baldness"]
    },
    {
      title: "HIFU",
      desc: "High-Intensity Focused Ultrasound targeting deep SMAS tissue layers to lift, tighten, and contour without surgical intervention.",
      img: "/treatment_anti_aging_real.jpg",
      slug: "hifu",
      area: "Face, Body",
      duration: "30 to 90 minutes",
      recovery: "None required",
      sessions: "1 treatment, optimal touch-ups annually",
      results: "Peak results at 3-6 months, lasting 18-24 months.",
      idealFor: ["Mild to moderate skin laxity", "Sagging jowls & jawline", "Body skin tightening"]
    },
    {
      title: "Skin Tag & Wart Removal",
      desc: "Quick, painless radiofrequency and electro-cautery removal providing immediate clearing with minimal healing time.",
      img: "/mole-removal.jpg",
      slug: "skin-tag-wart-removal",
      area: "Face, Neck, Body, Underarms",
      duration: "30-45 minutes",
      recovery: "3-7 days",
      sessions: "Single session (most cases)",
      results: "Immediate removal",
      idealFor: ["Skin tags on face, neck or body", "Common warts", "Flat warts"]
    },
    {
      title: "Dermal Fillers",
      desc: "Premium cross-linked hyaluronic acid volume restoration to smooth deep smile lines, contour lips, and enhance structural balance.",
      img: "/botox-treatment.jpg",
      slug: "dermal-fillers",
      area: "Face",
      duration: "30-45 minutes",
      recovery: "Minimal (24-48 hours)",
      sessions: "Single session, maintenance every 3-6 months",
      results: "3-5 days for anti wrinkle injections, immediate for fillers.",
      idealFor: ["Forehead lines & frown lines", "Loss of facial volume", "Nasolabial folds (smile lines)"]
    },
    {
      title: "Subcision",
      desc: "Specialized minor surgical technique releasing deep fibrous tethered bands beneath depressed acne scars to elevate the skin contour.",
      img: "/subcision.jpg",
      slug: "subcision",
      area: "Face, primarily acne scarred cheeks",
      duration: "45-60 minutes.",
      recovery: "Bruising & swelling may last 2-3 days",
      sessions: "Usually 1-3 or more, depending on scar severity & response.",
      results: "Gradual improvement in depressed acne scars over several weeks to months",
      idealFor: ["Rolling acne scars", "Uneven skin texture", "Atrophic acne scars", "Depressed scars."]
    },
    {
      title: "Mesotherapy for Scalp",
      desc: "Targeted micro-injections of potent hair vitamins, minerals, and DHT-inhibiting actives directly into follicular roots.",
      img: "/hair-treatment.jpg",
      slug: "mesotherapy-scalp",
      area: "Scalp",
      duration: "30-45 minutes",
      recovery: "None to minimal",
      sessions: "4-6 sessions initially, then maintenance",
      results: "Reduced hairfall within 2-3 sessions, visible improvement in 3-6 months.",
      idealFor: ["Early stage hair loss", "Thinning hair", "Dull and lifeless hair", "Stress related hair fall"]
    },
    {
      title: "PRP for Hair",
      desc: "Autologous Platelet-Rich Plasma therapy harnessing concentrated growth factors to stimulate dormant hair follicles and reverse thinning.",
      img: "/prp-treatment.jpg",
      slug: "prp-hair",
      area: "Scalp",
      duration: "30-45 minutes",
      recovery: "Minimal (24 hours)",
      sessions: "6-9 sessions recommended",
      results: "Visible improvement in 3-6 months.",
      idealFor: ["Early stage hair thinning", "Post transplant support", "Hair loss prevention"]
    },
    {
      title: "PRP + Biotin",
      desc: "Advanced synergistic therapy combining high-density autologous PRP with essential Biotin micronutrients to supercharge keratin production and follicular strength.",
      img: "/prp-biotin.jpg",
      slug: "prp-biotin",
      area: "Scalp",
      duration: "30-45 minutes",
      recovery: "Minimal (24 hours)",
      sessions: "4-6 sessions recommended",
      results: "Enhanced hair shaft thickness, reduced shed rate, and visible regrowth in 3-6 months.",
      idealFor: ["Brittle hair", "Chronic hair thinning", "Postpartum hair fall", "Follicular nutrient deficiency"]
    },
    {
      title: "Korean Scalp Treatment",
      desc: "Holistic Korean scalp spa therapy utilizing high-frequency glass ozone stimulation, botanical exfoliating scrubs, and deep nutrient infusion.",
      img: "/korean-scalp.jpg",
      slug: "korean-scalp-treatment",
      area: "Scalp & Neck",
      duration: "60-75 minutes",
      recovery: "None",
      sessions: "Bi-weekly or monthly sessions",
      results: "Deep follicular sebum detox, dandruff relief, relaxed and revitalized roots.",
      idealFor: ["Oily scalp buildup", "Dandruff & flakes", "Scalp tension", "Root weakening"]
    },
    {
      title: "Hair Microneedling",
      desc: "Targeted scalp microneedling to stimulate dormant hair follicles, enhance topical absorption, and boost local microcirculation.",
      img: "/hair-microneedling.jpg",
      slug: "hair-microneedling",
      area: "Scalp and areas affected by hair thinning",
      duration: "30–45 minutes",
      recovery: "1–3 days of mild redness or sensitivity",
      sessions: "Multiple sessions recommended, depending on hair concerns and individual response",
      results: "Gradual improvement in hair density and thickness may be seen over several months. Results vary from person to person.",
      idealFor: ["Hair thinning and reduced hair density", "Early-stage hair loss", "Supporting selected hair restoration treatments", "Improving the appearance of thinning areas"]
    },
    {
      title: "Tattoo Removal",
      desc: "High-precision Q-switched laser technology safely fragmenting tattoo pigment particles for progressive fading and clearance.",
      img: "/tattoo-removal.jpg",
      slug: "tattoo-removal",
      area: "Any tattooed area",
      duration: "30-45 minutes depending on size",
      recovery: "1-2 weeks per session",
      sessions: "6-12 sessions typically required",
      results: "Progressive fading with each session",
      idealFor: ["Unwanted tattoo", "Faded or aging tattoos", "Tattoo regret"]
    },
    {
      title: "Glutathione IV Drip",
      desc: "Antioxidant cellular therapy infused via intravenous drip to neutralize free radicals and support optimal metabolic wellness.",
      img: "/iv-drip.jpg",
      slug: "glutathione-iv-drip",
      area: "Intravenous infusion under medical supervision",
      duration: "Approximately 30-60 minutes.",
      recovery: "Usually minimal downtime, monitoring is required",
      sessions: "Individualized following medical assessment",
      results: "Glutathione is an antioxidant involved in cellular process. Its effectiveness as an IV treatment for skin brightening remains uncertain.",
      idealFor: ["Antioxidant support", "Cellular wellness", "Fatigue recovery", "Free-radical defense"]
    },
    {
      title: "Fat Loss IV Drip",
      desc: "Tailored intravenous metabolic infusion supporting whole-body wellness, hydration, and nutritional balance alongside medically guided lifestyle plans.",
      img: "/iv-drip.jpg",
      slug: "fat-loss-iv-drip",
      area: "Whole-body wellness support",
      duration: "30–60 minutes, depending on the formulation",
      recovery: "Usually minimal downtime; individual responses may vary",
      sessions: "Personalized according to clinical assessment and the prescribed formulation",
      results: "Results vary depending on individual health, lifestyle, nutrition, and the treatment formulation. IV drips are not proven to cause significant fat loss on their own.",
      idealFor: ["Individuals seeking personalized wellness support", "People addressing nutritional deficiencies, when identified", "Complementary support alongside a medically guided weight-management plan"]
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

            <div className="grid-responsive-3" style={{ gap: '2rem', alignItems: 'stretch' }}>
              {allTreatments.map((t, index) => (
                <div key={index} style={{
                  background: '#FFFFFF',
                  borderRadius: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  border: '1px solid rgba(28, 46, 37, 0.08)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}>
                  {/* Card Image */}
                  <div style={{ position: 'relative', height: '230px', width: '100%', overflow: 'hidden' }}>
                    <Image
                      src={t.img}
                      alt={t.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(28, 46, 37, 0.85)',
                      color: 'var(--accent)',
                      padding: '0.35rem 0.9rem',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      backdropFilter: 'blur(8px)'
                    }}>
                      Shrina Clinic
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.75rem',
                      color: 'var(--primary)',
                      marginBottom: '0.75rem',
                      fontWeight: '500',
                      lineHeight: '1.2'
                    }}>
                      {t.title}
                    </h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem',
                      whiteSpace: 'pre-line'
                    }}>
                      {t.desc}
                    </p>

                    {/* Treatment Overview Box (Ref Image Design) */}
                    <div style={{
                      background: '#FAF6EE',
                      border: '1px solid rgba(182, 147, 89, 0.35)',
                      borderRadius: '16px',
                      padding: '1.25rem 1.15rem',
                      marginTop: 'auto',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        color: '#B69359',
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        fontWeight: '600',
                        marginBottom: '1rem'
                      }}>
                        Treatment Overview
                      </div>

                      {/* 2-column key info */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '0.85rem 0.5rem',
                        marginBottom: '0.85rem'
                      }}>
                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <span style={{ color: '#B69359' }}>📍</span> Area
                          </div>
                          <div style={{ fontSize: '0.82rem', color: '#555', marginTop: '0.15rem' }}>{t.area}</div>
                        </div>

                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <span style={{ color: '#B69359' }}>⏱️</span> Duration
                          </div>
                          <div style={{ fontSize: '0.82rem', color: '#555', marginTop: '0.15rem' }}>{t.duration}</div>
                        </div>

                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <span style={{ color: '#B69359' }}>🤍</span> Recovery
                          </div>
                          <div style={{ fontSize: '0.82rem', color: '#555', marginTop: '0.15rem' }}>{t.recovery}</div>
                        </div>

                        <div>
                          <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <span style={{ color: '#B69359' }}>📋</span> Sessions
                          </div>
                          <div style={{ fontSize: '0.82rem', color: '#555', marginTop: '0.15rem' }}>{t.sessions}</div>
                        </div>
                      </div>

                      {/* Results */}
                      <div style={{ marginBottom: '0.85rem' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          <span style={{ color: '#B69359' }}>🛡️</span> Results
                        </div>
                        <div style={{ fontSize: '0.82rem', color: '#555', marginTop: '0.15rem', lineHeight: '1.4' }}>
                          {t.results}
                        </div>
                      </div>

                      {/* Divider */}
                      <hr style={{ border: 'none', borderTop: '1px solid rgba(182, 147, 89, 0.25)', marginBottom: '0.85rem' }} />

                      {/* Ideal For Badges */}
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                          Ideal For:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                          {t.idealFor.map((item, idx) => (
                            <span key={idx} style={{
                              border: '1px solid #2B3A33',
                              background: '#FAF6EE',
                              borderRadius: '6px',
                              padding: '0.2rem 0.55rem',
                              fontSize: '0.75rem',
                              fontWeight: '500',
                              color: '#1C2E25'
                            }}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                      <Link href={`/treatments/${t.slug}`} style={{
                        flex: 1,
                        textAlign: 'center',
                        border: '1px solid var(--primary)',
                        color: 'var(--primary)',
                        padding: '0.75rem 1rem',
                        borderRadius: '999px',
                        textDecoration: 'none',
                        fontSize: '0.88rem',
                        fontWeight: '600',
                        transition: 'all 0.2s'
                      }}>
                        View Details
                      </Link>
                      <a href="https://wa.me/918979797220" target="_blank" rel="noopener noreferrer" style={{
                        flex: 1,
                        textAlign: 'center',
                        background: 'var(--accent)',
                        color: 'var(--primary)',
                        padding: '0.75rem 1rem',
                        borderRadius: '999px',
                        textDecoration: 'none',
                        fontSize: '0.88rem',
                        fontWeight: '600',
                        border: 'none',
                        transition: 'all 0.2s'
                      }}>
                        Book
                      </a>
                    </div>
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
