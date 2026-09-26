import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Placeholder data (same as blog index)
const blogPosts = [
  {
    id: 1,
    title: "The Secrets to Achieving Authentic Glass Skin",
    excerpt: "Discover the multi-step Korean skincare routine that is taking Pune by storm. Learn which treatments are essential for that flawless, translucent glow.",
    date: "September 15, 2026",
    category: "Skincare",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    fullImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=2000",
    slug: "secrets-to-glass-skin",
    content: "Authentic glass skin isn't just about a single product; it's a commitment to skin health. It involves a meticulous routine of double cleansing, regular exfoliation, and intense hydration. At Shrina, we recommend starting with a Korean Peel to remove dead skin cells, followed by a Hydra Facial to infuse the skin with deep moisture. The key is to build layers of hydration using essences and serums rich in hyaluronic acid and peptides. Consistency in your daily routine, paired with professional clinical treatments, will help you achieve that coveted translucent, poreless appearance."
  },
  {
    id: 2,
    title: "Why Exosomes Are the Future of Anti-Aging",
    excerpt: "Move over PRP. Exosome therapy is revolutionizing cellular regeneration and anti-aging treatments. Here's why you need to book a consultation today.",
    date: "September 02, 2026",
    category: "Treatments",
    image: "/treatment_anti_aging_real.jpg",
    fullImage: "/treatment_anti_aging_real.jpg",
    slug: "exosomes-future-of-anti-aging",
    content: "Exosomes are the tiny messengers of your cells. Unlike traditional PRP which relies on your body's current stem cell health, exosome therapy delivers young, potent growth factors directly to where your skin needs them most. This results in significantly faster healing, superior collagen production, and a dramatic reduction in fine lines and pigmentation. It's the ultimate bio-hacking treatment for your skin, pushing the boundaries of what aesthetic medicine can achieve."
  },
  {
    id: 3,
    title: "Pre and Post-Care Guide for Laser Treatments",
    excerpt: "Ensure the best possible results and minimal downtime with our comprehensive guide on how to prep your skin for laser treatments and care for it afterward.",
    date: "August 20, 2026",
    category: "Guides",
    image: "/treatment_hair_real.jpg",
    fullImage: "/treatment_hair_real.jpg",
    slug: "laser-treatment-care-guide",
    content: "Laser treatments are highly effective, but the magic happens during the healing process. Pre-care involves avoiding sun exposure and discontinuing retinoids a week prior. Post-care is all about protection and hydration. Your skin will be sensitive, so it is crucial to apply a broad-spectrum SPF 50 daily, avoid hot showers, and use gentle, non-fragranced moisturizers. Our clinical team provides a tailored recovery plan for every patient to ensure your investment yields the most flawless results possible."
  },
  {
    id: 4,
    title: "Understanding Skin Boosters vs. Dermal Fillers",
    excerpt: "While both use hyaluronic acid, skin boosters and dermal fillers serve entirely different purposes. Find out which one is right for your aesthetic goals.",
    date: "August 05, 2026",
    category: "Aesthetics",
    image: "/treatment_skin_brush.jpg",
    fullImage: "/treatment_skin_brush.jpg",
    slug: "skin-boosters-vs-fillers",
    content: "It's easy to confuse skin boosters with dermal fillers, as both are injectable treatments containing hyaluronic acid. However, dermal fillers are cross-linked to provide volume and structure, ideal for contouring the cheeks or plumping lips. Skin boosters, on the other hand, are non-cross-linked. They spread evenly just beneath the skin's surface, acting as an internal moisturizer. If you want structural changes, fillers are the answer. If you want a radiant, hydrated, 'lit-from-within' glow without changing your face shape, skin boosters are your best friend."
  },
  {
    id: 5,
    title: "Debunking Common Myths About Botox",
    excerpt: "Will it freeze my face? Is it permanent? Our lead specialists debunk the most common misconceptions about premium Botox and wrinkle relaxers.",
    date: "July 28, 2026",
    category: "Aesthetics",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    fullImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2000",
    slug: "debunking-botox-myths",
    content: "The biggest myth about Botox is that it will leave you emotionless. In the hands of a skilled practitioner at Shrina, wrinkle relaxers are used strategically to soften lines while preserving your natural expressions. It is not permanent; results typically last 3 to 6 months. Furthermore, Botox isn't just for anti-aging; it's increasingly used preventatively by younger clients to stop deep lines from forming in the first place. It's a subtle, elegant enhancement, not a mask."
  },
  {
    id: 6,
    title: "The Ultimate Guide to Semi-Permanent Makeup",
    excerpt: "From lip tints to microblading, explore how semi-permanent makeup can enhance your natural features and shave minutes off your morning routine.",
    date: "July 12, 2026",
    category: "Beauty",
    image: "/bb-glow.jpg",
    fullImage: "/bb-glow.jpg",
    slug: "semi-permanent-makeup-guide",
    content: "Imagine waking up with perfectly shaped brows and tinted lips. Semi-permanent makeup has evolved significantly from the harsh tattoos of the past. Today's techniques, like microblading and lip blushing, use organic pigments and microscopic needles to create incredibly natural, soft enhancements. The results fade gradually over 1-3 years, allowing you to adjust your look as trends and your personal style change. It's the ultimate luxury of convenience, ensuring you look effortlessly put-together at all times."
  }
];

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header theme="dark" />
      <main style={{ minHeight: '100vh', background: '#FFFDF9' }}>

        {/* Article Hero Banner */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '60vh',
          minHeight: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: '6rem',
          paddingBottom: '4rem',
          overflow: 'hidden'
        }}>
          {/* Background Image */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <Image
              src={post.fullImage}
              alt={post.title}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
            {/* Deep Dark Overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28, 46, 37, 0.2) 0%, rgba(28, 46, 37, 0.95) 100%)' }}></div>
          </div>

          {/* Content */}
          <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px' }}>
            <div style={{
              color: 'var(--accent)',
              fontSize: '0.85rem',
              fontWeight: '600',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              background: 'rgba(28, 46, 37, 0.5)',
              padding: '0.4rem 1.2rem',
              borderRadius: '999px',
              border: '1px solid rgba(226, 207, 180, 0.3)'
            }}>
              {post.category}
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '400',
              marginBottom: '1.5rem',
              color: '#FFFFFF',
              lineHeight: 1.2
            }}>
              {post.title}
            </h1>

            <div style={{
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: '500',
              letterSpacing: '0.05em',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span>{post.date}</span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)' }}></span>
              <span>5 min read</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="container" style={{ maxWidth: '800px', padding: '5rem 2rem' }}>

          <div style={{
            fontSize: '1.25rem',
            lineHeight: 1.8,
            color: 'var(--text-primary)',
            fontWeight: '300',
            marginBottom: '3rem',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            borderLeft: '2px solid var(--accent)',
            paddingLeft: '1.5rem'
          }}>
            {post.excerpt}
          </div>

          <div style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            marginBottom: '4rem'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              {post.content}
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              At Shrina Skin Clinic, we believe that education is just as important as the treatments we provide. Understanding your skin and the science behind aesthetic medicine empowers you to make the best decisions for your beauty journey.
            </p>
            <p>
              To explore how this applies specifically to your unique skin profile, we invite you to book a personalized consultation with our expert dermatologists and aestheticians. Let us craft a bespoke treatment plan designed exclusively for you.
            </p>
          </div>

          {/* Social Share & Back */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(0,0,0,0.1)',
            flexWrap: 'wrap',
            gap: '2rem'
          }}>
            <Link href="/blog" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: '600',
              color: 'var(--primary)',
              textDecoration: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'color 0.3s'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg>
              Back to Journal
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Share:</span>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--surface-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', cursor: 'pointer' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </div>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--surface-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', cursor: 'pointer' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </div>
              </div>
            </div>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
