import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PrivacyPolicy() {
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
          backgroundImage: 'url("https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0 0 40px 40px',
          overflow: 'hidden'
        }}>
          {/* Dark Overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(28, 46, 37, 0.4)' }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: '#fff' }}>
            <h1 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: 'clamp(3rem, 5vw, 4.5rem)', 
              fontWeight: '400',
              marginBottom: '1rem',
              letterSpacing: '0.02em',
              color: '#fff'
            }}>Privacy Policy</h1>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', fontSize: '0.9rem', fontWeight: '500', letterSpacing: '0.05em' }}>
              <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
              <span>&gt;</span>
              <span style={{ color: 'var(--accent)' }}>Privacy Policy</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '5rem 2rem' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            
            {/* Section 1 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>1. Who We Are</h2>
              <p style={{ marginBottom: '1rem' }}>Shrina Korean Aesthetic Clinic is a premium aesthetic clinic with locations in Kothrud and Viman Nagar, Pune, Maharashtra.</p>
              <p style={{ marginBottom: '0.2rem' }}><strong>Contact:</strong> +91 89797 97220</p>
              <p style={{ marginBottom: '1rem' }}><strong>Email:</strong> Shrina skinclinic@gmail.com</p>
              <p>For privacy questions.</p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>2. Information We Collect</h2>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li><strong>Identity and contact data:</strong> name, phone, email, address.</li>
                <li><strong>Booking and enquiry data:</strong> appointment requests, preferred times, messages via website forms, WhatsApp, Instagram, email, or phone.</li>
                <li><strong>Health and clinical data:</strong> medical history, concerns, photos for clinical assessment, treatment notes, consent records, as needed to provide care.</li>
                <li><strong>Payment and admin data:</strong> invoices, payment confirmations, package details (payment card data is usually processed by payment providers, not stored fully by us).</li>
                <li><strong>Technical data:</strong> IP address, browser type, device info, cookies/analytics (if enabled on the website).</li>
                <li><strong>Marketing preferences:</strong> whether you agree to receive offers, newsletters, or for photos to be used in marketing (separate permission where required).</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>3. How We Collect Information</h2>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>Directly from you (forms, bookings, consultations, messaging, calls).</li>
                <li>From devices/browsers when you visit our website (cookies and similar tools, if used).</li>
                <li>From third parties you interact with on our behalf (for example booking tools, payment providers, ad platforms) where allowed.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>4. Why We Use Your Information</h2>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>To respond to enquiries and provide customer service.</li>
                <li>To schedule, confirm, remind, and manage appointments.</li>
                <li>To deliver clinical care, maintain medical records, and meet professional/regulatory duties.</li>
                <li>To process payments, packages, and invoices.</li>
                <li>To improve our website, services, and patient experience.</li>
                <li>To send service messages (appointment reminders). Marketing messages only where permitted and you have not opted out.</li>
                <li>To protect the Clinic, staff, and patients (security, fraud prevention, dispute handling).</li>
                <li>To comply with local laws and other regulatory requirements.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>5. Legal Bases / Lawful Reasons</h2>
              <p>Depending on the situation, we process data because: it is needed to provide a service you requested; you gave consent (for example marketing or certain cookies); we have a legitimate interest in running and securing the Clinic and website; or we must meet legal and regulatory obligations (including healthcare record-keeping).</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>6. Health Information</h2>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>Health-related information is sensitive and is used for care, safety, and legal compliance.</li>
                <li>Access is limited to authorised clinical and admin staff who need it.</li>
                <li>Website or social media messages are not a secure substitute for in-clinic records. Avoid posting sensitive health details in public comments.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>7. Photos and Media</h2>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>Clinical photos may be taken for your file and treatment planning.</li>
                <li>Marketing use of your images (website, ads, social media) requires your separate permission where required.</li>
                <li>You may refuse marketing use without affecting necessary clinical documentation.</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>8. Sharing Your Information</h2>
              <p style={{ marginBottom: '1rem' }}>We do not sell your personal information. We may share it only as needed with:</p>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>Licensed practitioners and Clinic staff involved in your care.</li>
                <li>Service providers (IT, booking, SMS/email, payment, cloud hosting) under appropriate safeguards.</li>
                <li>Professional advisers (legal, accounting) when required.</li>
                <li>Regulators, courts, or authorities when required by law.</li>
                <li>Third-party platforms you choose to use (WhatsApp, Instagram, Google, payment apps) under their own policies.</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>9. Cookies and Website Analytics</h2>
              <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>Our website may use cookies or similar technologies for basic function, preferences, and analytics.</li>
                <li>You can control cookies through your browser settings. Blocking some cookies may affect site features.</li>
                <li>If we use advertising/analytics cookies, we will do so in line with applicable rules and any consent tools we enable.</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>10. Data Retention</h2>
              <p>We keep information only as long as needed for the purposes above, including clinical record retention periods required by healthcare rules, booking/payment records, and legal claim periods. When no longer needed, we delete or anonymise data where practicable.</p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>11. Security</h2>
              <p>We use reasonable technical and organisational measures to protect personal information. No method of transmission or storage is 100% secure. Please protect your devices and do not share one-time codes or passwords.</p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>12. Children</h2>
              <p>Our services are generally aimed at adults. Where a minor is treated, we process data with required parental/guardian involvement and in line with Clinic and regulatory rules.</p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontWeight: '400' }}>13. Third-Party Links</h2>
              <p>Our website may link to other sites or apps. Their privacy practices are their own. Review their policies before sharing information with them.</p>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
