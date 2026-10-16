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
      <a 
        href="https://wa.me/918979797220" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#25D366',
          color: '#ffffff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.35)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          textDecoration: 'none',
        }}
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 211, 102, 0.45)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.35)';
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-1.146-.086-.285-.093-.655-.234-1.156-.452-2.121-.918-3.483-3.123-3.59-3.264-.103-.144-.852-1.134-.852-2.164 0-1.03.541-1.536.732-1.745.192-.209.418-.261.558-.261.14 0 .279.002.399.008.128.006.299-.049.467.354.172.417.587 1.433.639 1.538.051.104.086.225.016.365-.07.14-.105.227-.209.349-.105.122-.22.271-.314.365-.105.105-.215.22-.093.43.122.209.541.895 1.161 1.447.799.712 1.472.933 1.681 1.038.209.105.331.087.453-.053.122-.139.523-.609.662-.818.14-.209.279-.174.47-.104.192.07 1.22.575 1.429.68.209.104.349.157.401.244.053.087.053.505-.091.91zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.155-.494-4.425-1.341l-.317-.212-2.957.828.845-2.887-.229-.333A8.162 8.162 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z"/>
        </svg>
      </a>
      <a 
        href="tel:+918979797220" 
        style={{
          width: '56px',
          height: '56px',
          backgroundColor: '#1C2E25',
          color: '#ffffff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(28, 46, 37, 0.35)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          textDecoration: 'none',
        }}
        title="Call Us Now"
        aria-label="Call Us Now"
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(28, 46, 37, 0.45)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(28, 46, 37, 0.35)';
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
    </div>
  );
}
