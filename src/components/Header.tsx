import Link from "next/link";

export default function Header({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'var(--primary)' : '#fff';
  const linkColor = isDark ? 'var(--text-primary)' : '#fff';
  
  return (
    <header className="header" style={{ background: 'transparent', borderBottom: 'none', position: 'absolute', paddingTop: '1.5rem', zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <Link href="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '4px' }}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="var(--accent)"/>
            <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="var(--accent)"/>
          </svg>
          <span style={{ fontSize: '1rem', fontWeight: '500', color: textColor, letterSpacing: '0.1em', fontFamily: 'var(--font-heading)' }}>SHRINA K</span>
          <span style={{ fontSize: '0.5rem', color: textColor, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Beauty Clinic</span>
        </Link>
        
        <nav>
          <ul className="nav-links" style={{ gap: '2rem', listStyle: 'none' }}>
            <li><Link href="/#home" style={{ color: linkColor, fontSize: '0.9rem', textDecoration: 'none' }}>Home</Link></li>
            <li><Link href="/#about" style={{ color: linkColor, fontSize: '0.9rem', textDecoration: 'none' }}>About</Link></li>
            <li><Link href="/#treatments" style={{ color: linkColor, fontSize: '0.9rem', textDecoration: 'none' }}>Treatments</Link></li>
            <li><Link href="/#results" style={{ color: linkColor, fontSize: '0.9rem', textDecoration: 'none' }}>Results</Link></li>
            <li><Link href="/#contact" style={{ color: linkColor, fontSize: '0.9rem', textDecoration: 'none' }}>Contact</Link></li>
          </ul>
        </nav>
        
        <div className="hide-on-mobile" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a href="https://wa.me/918979797220?text=Hello,%20I%20would%20like%20to%20book%20a%20consultation" target="_blank" rel="noopener noreferrer" className="btn" style={{ 
            background: isDark ? 'var(--primary)' : '#2B4034', 
            color: '#fff', 
            borderRadius: '9999px',
            padding: '0.6rem 1.25rem',
            fontSize: '0.85rem',
            border: isDark ? 'none' : '1px solid rgba(255,255,255,0.1)',
            textDecoration: 'none'
          }}>
            Book Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
