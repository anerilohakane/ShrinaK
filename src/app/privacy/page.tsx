import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header theme="dark" />
      <main style={{ background: 'var(--surface-alt)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative Background Element */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', borderRadius: '50%', background: 'var(--primary)', opacity: 0.03, filter: 'blur(60px)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ paddingTop: '10rem', paddingBottom: '8rem', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
               <div style={{ height: '1px', width: '40px', background: 'var(--accent-dark)' }}></div>
               <span style={{ 
                 fontSize: '0.7rem', 
                 fontWeight: '600', 
                 color: 'var(--accent-dark)', 
                 letterSpacing: '0.25em',
                 textTransform: 'uppercase'
               }}>Legal Information</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)', marginBottom: '4rem', fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: '1.1' }}>Privacy Policy</h1>
            
            <div style={{ 
               background: '#FFFFFF', 
               padding: '4rem', 
               borderRadius: '24px', 
               boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
               color: 'var(--text-secondary)', 
               lineHeight: '1.8', 
               fontSize: '1.05rem', 
               display: 'flex', 
               flexDirection: 'column', 
               gap: '2rem' 
            }}>
              <p>
                At Shrina K Beauty Clinic, your privacy and the security of your personal information are of our utmost priority. This Privacy Policy outlines how we collect, use, protect, and handle your data when you use our website or visit our clinic.
              </p>
              <h3 style={{ color: 'var(--primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>1. Information We Collect</h3>
              <p>
                We collect information that you voluntarily provide to us when booking a consultation, contacting us through forms, or interacting with our clinic. This may include your name, email address, phone number, and medical history relevant to your aesthetic treatments.
              </p>
              <h3 style={{ color: 'var(--primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>2. How We Use Your Information</h3>
              <p>
                Your information is used strictly to provide personalized aesthetic care, manage your appointments, communicate with you regarding your treatments, and improve our services. We do not sell or rent your personal information to third parties.
              </p>
              <h3 style={{ color: 'var(--primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>3. Data Security</h3>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your medical records and treatment histories are kept strictly confidential and are only accessible by authorized medical personnel.
              </p>
              <h3 style={{ color: 'var(--primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>4. Contact Us</h3>
              <p>
                If you have any questions regarding this privacy policy, you may contact us using the information on our contact page or by calling our clinic directly.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
