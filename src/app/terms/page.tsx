import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <>
      <Header theme="light" />
      <main style={{ minHeight: '100vh', background: '#FCFAF5' }}>
        
        {/* Hero Section */}
        <div style={{ 
          position: 'relative', 
          width: '100%', 
          height: '50vh',
          minHeight: '400px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundImage: 'url("https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0 0 40px 40px',
          overflow: 'hidden'
        }}>
          {/* Dark Overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(28, 46, 37, 0.5)' }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff' }}>
            <h1 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
              fontWeight: '400',
              marginBottom: '1rem',
              letterSpacing: '0.02em',
              textShadow: '0 4px 20px rgba(0,0,0,0.1)',
              color: '#fff'
            }}>Terms & Conditions</h1>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.05em' }}>
              <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
              <span>&gt;</span>
              <span style={{ color: 'var(--accent)' }}>Terms & Conditions</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '5rem 2rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            
            {/* Intro */}
            <div>
              <p style={{ marginBottom: '1.5rem' }}>Welcome to <strong>Shrina Korean Aesthetic Clinic</strong>. These Terms & Conditions ("Terms") govern your use of our website, appointment services, products, treatments, and other services provided by Shrina Korean Aesthetic Clinic.</p>
              <p>By accessing our website or booking an appointment with us, you agree to comply with these Terms. If you do not agree with any part of these Terms, please do not use our website or services.</p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>1. About Shrina Korean Aesthetic Clinic</h2>
              <p style={{ marginBottom: '1rem' }}>Shrina Korean Aesthetic Clinic is a premium aesthetic clinic with locations in Kothrud and Viman Nagar, Pune, Maharashtra.</p>
              <p>Our website provides information about our clinic, treatments, packages, products, offers, and appointment services. Our services include skincare, facials, laser treatments, injectables, skin rejuvenation, anti-aging treatments, hair and scalp services, and other aesthetic procedures.</p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>2. Website Use</h2>
              <p style={{ marginBottom: '1rem' }}>You may use this website for lawful and personal purposes only.</p>
              <p style={{ marginBottom: '1rem' }}>You agree not to:</p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <li>Use the website for unlawful purposes.</li>
                <li>Attempt to gain unauthorised access to the website or its systems.</li>
                <li>Copy, reproduce, modify, or distribute website content without permission.</li>
                <li>Interfere with the security or functionality of the website.</li>
                <li>Submit false, misleading, or fraudulent information.</li>
                <li>Use the website to transmit harmful software or malicious code.</li>
                <li>Use information obtained from the website for unauthorised commercial purposes.</li>
              </ul>
              <p>We reserve the right to restrict or terminate access to the website where we believe these Terms have been violated.</p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>3. Information on Our Website</h2>
              <p style={{ marginBottom: '1rem' }}>We make reasonable efforts to ensure that the information published on our website is accurate and up to date.</p>
              <p style={{ marginBottom: '1rem' }}>However, information about treatments, procedures, prices, packages, offers, availability, and results may change without notice.</p>
              <p>Website content is provided for general informational purposes and should not be considered a substitute for an individual consultation with a qualified healthcare professional.</p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>4. Medical and Treatment Information</h2>
              <p style={{ marginBottom: '1rem' }}>Information provided on this website about skincare, cosmetic procedures, treatments, products, or expected results is intended for general information only.</p>
              <p style={{ marginBottom: '1rem' }}>Individual results may vary depending on factors including skin type, medical history, age, lifestyle, treatment area, and response to treatment.</p>
              <p style={{ marginBottom: '1rem' }}>No treatment result can be guaranteed.</p>
              <p style={{ marginBottom: '1rem' }}>Before undergoing any procedure, you should discuss your medical history, allergies, medications, existing conditions, pregnancy status, previous procedures, and other relevant information with the appropriate clinic professional.</p>
              <p>The suitability of a treatment will be determined following an appropriate consultation and assessment.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>5. Appointments</h2>
              <p style={{ marginBottom: '1rem' }}>Appointments may be requested through our website, telephone, WhatsApp, email, or other available communication channels.</p>
              <p style={{ marginBottom: '1rem' }}>Submitting an online appointment request does not necessarily mean that an appointment has been confirmed.</p>
              <p style={{ marginBottom: '1rem' }}>An appointment will be considered confirmed only after receiving confirmation from Shrina Korean Aesthetic Clinic.</p>
              <p>We may contact you to confirm or clarify your appointment details.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>6. Appointment Changes and Cancellations</h2>
              <p style={{ marginBottom: '1rem' }}>If you need to cancel or reschedule an appointment, please contact the clinic as early as possible.</p>
              <p style={{ marginBottom: '1rem' }}>Cancellation and rescheduling requirements may vary depending on the treatment, package, promotional offer, or appointment type.</p>
              <p style={{ marginBottom: '1rem' }}>Certain appointments may require advance notice or a deposit.</p>
              <p style={{ marginBottom: '1rem' }}>Where a deposit or advance payment has been made, its refundability will be subject to the applicable booking or treatment terms communicated to you at the time of booking.</p>
              <p>Shrina Korean Aesthetic Clinic reserves the right to charge applicable cancellation or no-show fees where these have been communicated in advance.</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>7. Late Arrivals</h2>
              <p style={{ marginBottom: '1rem' }}>We recommend arriving on time for your scheduled appointment.</p>
              <p style={{ marginBottom: '1rem' }}>Late arrival may reduce the time available for your treatment or consultation. In certain circumstances, the appointment may need to be shortened, rescheduled, or cancelled.</p>
              <p>Any applicable cancellation or rescheduling charges will be subject to the clinic's applicable booking policy.</p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>8. Treatment Eligibility</h2>
              <p style={{ marginBottom: '1rem' }}>Certain treatments may not be suitable for every individual.</p>
              <p style={{ marginBottom: '1rem' }}>Before treatment, the clinic may assess your suitability based on your health information, skin condition, medical history, medications, allergies, previous treatments, and other relevant factors.</p>
              <p>We reserve the right to decline or postpone a treatment if a qualified professional determines that the treatment may not be appropriate or safe for you.</p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>9. Patient Responsibilities</h2>
              <p style={{ marginBottom: '1rem' }}>You are responsible for providing accurate and complete information to the clinic.</p>
              <p style={{ marginBottom: '1rem' }}>You should inform our team about any relevant:</p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                <li>Medical conditions</li>
                <li>Allergies</li>
                <li>Medications</li>
                <li>Previous procedures</li>
                <li>Current treatments</li>
                <li>Pregnancy or breastfeeding</li>
                <li>Skin conditions</li>
                <li>Previous adverse reactions</li>
                <li>Other information that may affect treatment</li>
              </ul>
              <p>Failure to provide accurate information may affect the suitability or safety of a treatment.</p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>10. Treatment Results</h2>
              <p style={{ marginBottom: '1rem' }}>Aesthetic and cosmetic treatments can produce different results for different individuals.</p>
              <p style={{ marginBottom: '1rem' }}>Shrina Korean Aesthetic Clinic does not guarantee a specific result from any treatment.</p>
              <p>Before-and-after photographs, testimonials, videos, and other examples displayed on our website or social media are provided for illustrative purposes. Individual results may differ.</p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>11. Treatment Risks and Side Effects</h2>
              <p style={{ marginBottom: '1rem' }}>Some treatments may involve temporary or, in certain circumstances, more significant side effects or risks.</p>
              <p style={{ marginBottom: '1rem' }}>Depending on the treatment, these may include redness, swelling, sensitivity, bruising, discomfort, irritation, pigmentation changes, or other reactions.</p>
              <p style={{ marginBottom: '1rem' }}>The potential risks, benefits, aftercare requirements, and expected recovery period should be discussed with the relevant healthcare professional before treatment.</p>
              <p style={{ marginBottom: '1rem' }}>You should follow all aftercare instructions provided by the clinic.</p>
              <p>If you experience an unexpected or concerning reaction following treatment, contact the clinic or seek appropriate medical attention.</p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>12. Prices and Payments</h2>
              <p style={{ marginBottom: '1rem' }}>Prices for treatments, packages, products, and services may change from time to time.</p>
              <p style={{ marginBottom: '1rem' }}>Unless otherwise stated, prices displayed on the website are subject to confirmation by the clinic.</p>
              <p style={{ marginBottom: '1rem' }}>Additional charges may apply depending on the treatment or services selected.</p>
              <p style={{ marginBottom: '1rem' }}>Any applicable taxes, fees, deposits, or payment requirements will be communicated to you where relevant.</p>
              <p>We reserve the right to correct pricing or other information displayed on the website if an error occurs.</p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>13. Contact Us</h2>
              <p style={{ marginBottom: '1.5rem' }}>If you have questions regarding these Terms & Conditions, appointments, treatments, or our services, please contact us.</p>
              <p style={{ marginBottom: '0.2rem' }}><strong>Shrina Korean Aesthetic Clinic</strong></p>
              <p style={{ marginBottom: '1rem' }}>Kothrud & Viman Nagar, Pune, Maharashtra</p>
              <p style={{ marginBottom: '0.2rem' }}><strong>Phone:</strong> +91 89797 97220</p>
              <p style={{ marginBottom: '1.5rem' }}><strong>Email:</strong> Shrina skinclinic@gmail.com</p>
              <p style={{ marginBottom: '0.2rem' }}><strong>Clinic Hours:</strong></p>
              <p>Open: 10:00 AM – 7:00 PM</p>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
