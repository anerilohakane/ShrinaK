"use client";

export default function WhyChooseUs() {
  const reasons = [
    { icon: "♡", text: "Personalized\nTreatment Plans" },
    { icon: "⚙", text: "Advanced\nTechnology" },
    { icon: "🛡", text: "Safe & Evidence-Based\nProcedures" },
    { icon: "🌿", text: "A Comfortable\n& Welcoming Space" }
  ];

  return (
    <section style={{ background: '#FFFFFF', padding: '5rem 0', borderBottom: '1px solid var(--surface-border)' }}>
      <div className="container">
        <h3 style={{ 
          textAlign: 'center',
          fontSize: '0.65rem', 
          fontWeight: '600', 
          color: 'var(--accent-dark)', 
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginBottom: '4rem'
        }}>Why Choose Shrina K?</h3>

        <div className="grid-responsive-4">
          {reasons.map((item, i) => (
             <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  border: '1px solid rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem'
                }}>
                  {item.icon}
                </div>
                <span style={{ 
                  fontSize: '0.9rem', 
                  fontWeight: '500', 
                  color: 'var(--text-primary)',
                  whiteSpace: 'pre-line',
                  lineHeight: '1.4'
                }}>
                  {item.text}
                </span>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
