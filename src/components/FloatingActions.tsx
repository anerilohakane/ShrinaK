"use client";

export default function FloatingActions() {
  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      zIndex: 100
    }}>
      <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" style={{
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
        transition: 'transform 0.3s ease',
        textDecoration: 'none',
        fontSize: '24px'
      }}
      title="WhatsApp Us"
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
        💬
      </a>
      <a href="tel:+15551234567" style={{
        width: '60px',
        height: '60px',
        backgroundColor: 'var(--secondary)',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
        transition: 'transform 0.3s ease',
        textDecoration: 'none',
        fontSize: '24px'
      }}
      title="Call Now"
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
        📞
      </a>
    </div>
  );
}
