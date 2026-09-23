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
            <ul className="nav-links" style={{ gap: '2rem', listStyle: 'none' }}>
              <li><Link href="#home" style={{ color: '#fff', fontSize: '0.9rem', textDecoration: 'none' }}>Home</Link></li>
              <li><Link href="#about" style={{ color: '#fff', fontSize: '0.9rem', textDecoration: 'none' }}>About</Link></li>
              <li><Link href="#treatments" style={{ color: '#fff', fontSize: '0.9rem', textDecoration: 'none' }}>Treatments</Link></li>
              <li><Link href="#results" style={{ color: '#fff', fontSize: '0.9rem', textDecoration: 'none' }}>Results</Link></li>
              <li><Link href="#contact" style={{ color: '#fff', fontSize: '0.9rem', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </nav>
          
          <div className="hide-on-mobile" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
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
      
      <footer style={{ background: 'var(--primary)', color: 'white', padding: '5rem 0 2rem 0' }}>
        <div className="container">
           <div className="grid-responsive-footer">
              
              {/* Brand Column */}
              <div>
                 <h2 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.15em' }}>SHRINA K</h2>
                 <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.8', maxWidth: '300px', marginBottom: '2rem' }}>
                   A premier aesthetic clinic dedicated to enhancing your natural beauty through advanced, personalized treatments in a serene environment.
                 </p>
                 <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="https://www.instagram.com/shrina_aesthetic_clinic/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Instagram</a>
                    <a href="https://wa.me/918979797220" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>WhatsApp</a>
                 </div>
              </div>

              {/* Quick Links Column */}
              <div>
                 <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Explore</h4>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Link href="#home" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
                    <Link href="#about" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>About Clinic</Link>
                    <Link href="#treatments" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>Our Treatments</Link>
                    <Link href="#experience" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>The Experience</Link>
                 </div>
              </div>

              {/* Legal Column */}
              <div>
                 <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Legal</h4>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>Privacy Policy</a>
                    <a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>Terms of Service</a>
                    <a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>Consultation Policy</a>
                 </div>
              </div>

              {/* Contact Column */}
              <div>
                 <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h4>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <span style={{ display: 'block', color: 'var(--accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Phone</span>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>+91 89797 97220</span>
                    </div>
                    <div>
                      <span style={{ display: 'block', color: 'var(--accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Locations</span>
                      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.5', display: 'block' }}>Kothrud, Pune<br/>Viman Nagar, Pune</span>
                    </div>
                 </div>
              </div>

           </div>
           
           <div className="flex-responsive-stack" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
             <span>© {new Date().getFullYear()} Shrina K Beauty Clinic. All rights reserved.</span>
             <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-cursive)', color: 'var(--accent)', opacity: 0.8 }}>Confident You</span>
           </div>
        </div>
      </footer>
    </>
  );
}
