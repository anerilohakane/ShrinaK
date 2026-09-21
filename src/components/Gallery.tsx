export default function Gallery() {
  return (
    <section id="gallery" className="section-alt">
      <div className="container">
        <h2 className="section-title">Before & After</h2>
        <p className="section-subtitle">Real results from our satisfied clients. See the transformative power of our treatments.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {[1, 2, 3].map((item) => (
            <div key={item} style={{ background: 'var(--surface)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', height: '250px' }}>
                <div className="image-placeholder" style={{ flex: 1, borderRadius: 0, borderRight: '2px solid white' }}>Before</div>
                <div className="image-placeholder" style={{ flex: 1, borderRadius: 0 }}>After</div>
              </div>
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.125rem' }}>Glass Skin Transformation</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
