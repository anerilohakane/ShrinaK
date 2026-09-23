import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConsultationPolicy() {
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

            <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary)', marginBottom: '4rem', fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: '1.1' }}>Consultation Policy</h1>
            
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
                To ensure that all our patients receive the highest standard of care and adequate time with our specialists, we have established the following consultation policy.
              </p>
              <h3 style={{ color: 'var(--primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>1. Booking an Appointment</h3>
              <p>
                Consultations can be booked via our website, WhatsApp, or by calling our clinic directly. We highly recommend booking in advance, as our specialists' schedules fill up quickly.
              </p>
              <h3 style={{ color: 'var(--primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>2. Arrival Time</h3>
              <p>
                We request that you arrive at least 10 minutes prior to your scheduled consultation time. This allows us to complete any necessary paperwork and ensures you receive your full allotted time with the doctor.
              </p>
              <h3 style={{ color: 'var(--primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>3. Cancellations and Rescheduling</h3>
              <p>
                If you need to cancel or reschedule your appointment, please provide us with at least 24 hours' notice. This courtesy allows us to offer the time slot to another patient who may be waiting for treatment. 
              </p>
              <h3 style={{ color: 'var(--primary)', marginTop: '1rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>4. No-Show Policy</h3>
              <p>
                Repeated failure to attend scheduled appointments without prior notice may result in a requirement to pre-pay for future consultations or treatments. We value both your time and ours.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
