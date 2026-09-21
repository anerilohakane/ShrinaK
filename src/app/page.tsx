import Link from "next/link";
import Hero from "../components/Hero";
import About from "../components/About";
import Treatments from "../components/Treatments";
import Results from "../components/Results";
import Experience from "../components/Experience";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <header className="header" style={{ background: 'transparent', borderBottom: 'none', position: 'absolute', paddingTop: '1.5rem', zIndex: 100 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '4px' }}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="var(--accent)"/>
              <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="var(--accent)"/>
            </svg>
            <span style={{ fontSize: '1rem', fontWeight: '500', color: '#fff', letterSpacing: '0.1em', fontFamily: 'var(--font-heading)' }}>SHRINA K</span>
            <span style={{ fontSize: '0.5rem', color: '#fff', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Beauty Clinic</span>
          </Link>
          
          <nav>
            <ul className="nav-links" style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
              <li><Link href="#home" style={{ color: '#fff', fontSize: '0.9rem', textDecoration: 'none' }}>Home</Link></li>
              <li><Link href="#about" style={{ color: '#fff', fontSize: '0.9rem', textDecoration: 'none' }}>About</Link></li>
              <li><Link href="#treatments" style={{ color: '#fff', fontSize: '0.9rem', textDecoration: 'none' }}>Treatments</Link></li>
              <li><Link href="#results" style={{ color: '#fff', fontSize: '0.9rem', textDecoration: 'none' }}>Results</Link></li>
              <li><Link href="#contact" style={{ color: '#fff', fontSize: '0.9rem', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </nav>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="https://wa.me/918979797220?text=Hello,%20I%20would%20like%20to%20book%20a%20consultation" target="_blank" rel="noopener noreferrer" className="btn" style={{ 
              background: '#2B4034', 
              color: '#fff', 
              borderRadius: '9999px',
              padding: '0.6rem 1.25rem',
              fontSize: '0.85rem',
              border: '1px solid rgba(255,255,255,0.1)',
              textDecoration: 'none'
            }}>
              Book Consultation
            </a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Treatments />
        <Results />
        <Experience />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      
      <footer style={{ background: 'var(--primary)', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
           <h2 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}>SHRINA K BEAUTY</h2>
           <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: '0.85rem' }}>Enhancing Your Natural Beauty, Every Day</p>
           
           <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
              <Link href="#home" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textDecoration: 'none' }}>Home</Link>
              <Link href="#about" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textDecoration: 'none' }}>About</Link>
              <Link href="#treatments" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textDecoration: 'none' }}>Treatments</Link>
              <Link href="#results" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textDecoration: 'none' }}>Results</Link>
              <Link href="#contact" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textDecoration: 'none' }}>Contact</Link>
           </div>
           
           <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
             <span>© 2026 Shrina K Beauty Clinic. All rights reserved.</span>
             <span>Privacy Policy | Terms & Conditions</span>
           </p>
        </div>
      </footer>
    </>
  );
}
