import Link from "next/link";

export default function Footer() {
  return (
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
                  <Link href="/#home" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
                  <Link href="/#about" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>About Clinic</Link>
                  <Link href="/#treatments" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>Our Treatments</Link>
                  <Link href="/#experience" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>The Experience</Link>
               </div>
            </div>

            {/* Legal Column */}
            <div>
               <h4 style={{ color: '#fff', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Legal</h4>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>Privacy Policy</Link>
                  <Link href="/terms" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>Terms of Service</Link>
                  <Link href="/consultation-policy" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none' }}>Consultation Policy</Link>
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
  );
}
