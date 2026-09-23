import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfService() {
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

            <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)', marginBottom: '4rem', fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: '1.1' }}>Terms of Service</h1>
            
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
                Welcome to Shrina K Beauty Clinic. By accessing our website and utilizing our aesthetic services, you agree to comply with and be bound by the following terms and conditions.
              </p>
              <h3 style={{ color: 'var(--primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>1. Services Provided</h3>
              <p>
                We offer a range of non-invasive aesthetic and cosmetic treatments. All procedures are performed by certified professionals. However, individual results may vary, and we cannot guarantee specific outcomes for every patient.
              </p>
              <h3 style={{ color: 'var(--primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>2. Medical Disclaimer</h3>
              <p>
                The content on this website is for informational purposes only and is not intended as medical advice. Always consult with our doctors during your appointment to determine the best treatment plan for your specific needs and medical history.
              </p>
              <h3 style={{ color: 'var(--primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>3. Appointments & Cancellations</h3>
              <p>
                Please review our Consultation Policy for detailed information regarding booking, rescheduling, and cancelling appointments.
              </p>
              <h3 style={{ color: 'var(--primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>4. Intellectual Property</h3>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of Shrina K Beauty Clinic and is protected by copyright laws. You may not reproduce or distribute any content without our explicit written permission.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
