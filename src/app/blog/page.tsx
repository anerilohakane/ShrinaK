import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Secrets to Achieving Authentic Glass Skin",
      excerpt: "Discover the multi-step Korean skincare routine that is taking Dubai by storm. Learn which treatments are essential for that flawless, translucent glow.",
      date: "September 15, 2026",
      category: "Skincare",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
      slug: "secrets-to-glass-skin"
    },
    {
      id: 2,
      title: "Why Exosomes Are the Future of Anti-Aging",
      excerpt: "Move over PRP. Exosome therapy is revolutionizing cellular regeneration and anti-aging treatments. Here's why you need to book a consultation today.",
      date: "September 02, 2026",
      category: "Treatments",
      image: "/treatment_anti_aging_real.jpg",
      slug: "exosomes-future-of-anti-aging"
    },
    {
      id: 3,
      title: "Pre and Post-Care Guide for Laser Treatments",
      excerpt: "Ensure the best possible results and minimal downtime with our comprehensive guide on how to prep your skin for laser treatments and care for it afterward.",
      date: "August 20, 2026",
      category: "Guides",
      image: "/treatment_hair_real.jpg",
      slug: "laser-treatment-care-guide"
    },
    {
      id: 4,
      title: "Understanding Skin Boosters vs. Dermal Fillers",
      excerpt: "While both use hyaluronic acid, skin boosters and dermal fillers serve entirely different purposes. Find out which one is right for your aesthetic goals.",
      date: "August 05, 2026",
      category: "Aesthetics",
      image: "/treatment_skin_brush.jpg",
      slug: "skin-boosters-vs-fillers"
    },
    {
      id: 5,
      title: "Debunking Common Myths About Botox",
      excerpt: "Will it freeze my face? Is it permanent? Our lead specialists debunk the most common misconceptions about premium Botox and wrinkle relaxers.",
      date: "July 28, 2026",
      category: "Aesthetics",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
      slug: "debunking-botox-myths"
    },
    {
      id: 6,
      title: "The Ultimate Guide to Semi-Permanent Makeup",
      excerpt: "From lip tints to microblading, explore how semi-permanent makeup can enhance your natural features and shave minutes off your morning routine.",
      date: "July 12, 2026",
      category: "Beauty",
      image: "/bb-glow.jpg",
      slug: "semi-permanent-makeup-guide"
    }
  ];

  return (
    <>
      <Header theme="dark" />
      <main style={{ minHeight: '100vh', background: '#FFFDF9' }}>
        
        {/* Ultra-Premium Blog Hero Banner */}
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          height: '50vh',
          minHeight: '450px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: '6rem',
          overflow: 'hidden'
        }}>
          {/* Background Image with subtle zoom */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, animation: 'subtleZoom 20s infinite alternate' }}>
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=2500"
              alt="Luxury Beauty Blog"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(28, 46, 37, 0.5) 0%, rgba(28, 46, 37, 0.9) 100%)' }}></div>
          </div>

          {/* Content */}
          <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              Insights & News
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
              The Shrina <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Journal</span>
            </h1>

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
              <span style={{ color: 'var(--accent)' }}>Blog</span>
            </div>
          </div>
          <style dangerouslySetInnerHTML={{__html: \`
            @keyframes subtleZoom {
              from { transform: scale(1); }
              to { transform: scale(1.05); }
            }
          \`}} />
        </div>

        {/* Blog Listing Section */}
        <section style={{ padding: '6rem 0', background: '#FFFDF9' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
              gap: '3rem 2rem' 
            }}>
              {blogPosts.map((post) => (
                <article key={post.id} style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', group: 'true' }}>
                  {/* Image Container */}
                  <div style={{ position: 'relative', width: '100%', height: '260px', borderRadius: '16px', overflow: 'hidden', marginBottom: '1.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      className="blog-image"
                    />
                    <div style={{ 
                      position: 'absolute', 
                      top: '1rem', 
                      left: '1rem', 
                      background: 'rgba(255,255,255,0.9)', 
                      backdropFilter: 'blur(4px)',
                      padding: '0.3rem 0.8rem', 
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      letterSpacing: '0.05em',
                      color: 'var(--primary)',
                      textTransform: 'uppercase'
                    }}>
                      {post.category}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.8rem', fontWeight: '500' }}>
                      {post.date}
                    </div>
                    <h3 style={{ 
                      fontFamily: 'var(--font-heading)', 
                      fontSize: '1.5rem', 
                      fontWeight: '500', 
                      color: 'var(--primary)', 
                      marginBottom: '1rem',
                      lineHeight: 1.3
                    }}>
                      <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {post.title}
                      </Link>
                    </h3>
                    <p style={{ 
                      fontSize: '0.95rem', 
                      color: 'var(--text-secondary)', 
                      lineHeight: 1.6, 
                      marginBottom: '1.5rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`} style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#B69359',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Read Article 
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination Placeholder */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem', gap: '0.5rem' }}>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', cursor: 'pointer' }}>1</button>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'transparent', color: 'var(--primary)', border: '1px solid #EBE4D5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', cursor: 'pointer' }}>2</button>
              <button style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'transparent', color: 'var(--primary)', border: '1px solid #EBE4D5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', cursor: 'pointer' }}>3</button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
