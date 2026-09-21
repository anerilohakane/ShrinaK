"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ 
      minHeight: '100vh', 
      position: 'relative',
      display: 'flex', 
      alignItems: 'center', 
      overflow: 'hidden',
      paddingTop: '6rem'
    }}>
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      >
        <Image 
          src="/hero_image.jpg"
          alt="Luxurious Aesthetic Clinic Woman"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Dark overlay for text readability, matching the image's dark green hue */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(28, 46, 37, 0.9) 0%, rgba(28, 46, 37, 0.4) 50%, rgba(28, 46, 37, 0.2) 100%)' }}></div>
      </motion.div>

      {/* Foreground Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          style={{ maxWidth: '650px' }}
        >
          <span style={{ 
            display: 'inline-block', 
            fontSize: '0.8rem', 
            fontWeight: '600', 
            color: 'var(--accent)', 
            marginBottom: '1.5rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase'
          }}>Beauty Beyond Skin</span>
          
          <h1 style={{ 
            fontSize: 'clamp(3.5rem, 6vw, 5rem)', 
            lineHeight: '1.1', 
            marginBottom: '1.5rem', 
            color: '#FFFFFF',
            fontWeight: '400',
            fontFamily: 'var(--font-heading)'
          }}>
            Your Natural<br/> Beauty<br/> Our Expertise
          </h1>
          
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'rgba(255,255,255,0.8)', 
            marginBottom: '2.5rem', 
            maxWidth: '400px', 
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Advanced aesthetic care for healthier skin, happier you.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
            <Link href="#contact" className="btn" style={{ 
              background: 'var(--accent)', 
              color: 'var(--primary)', 
              padding: '0.8rem 1.5rem', 
              fontSize: '0.9rem',
              fontWeight: '500',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Book a Consultation <span>→</span>
            </Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn" style={{ 
              background: 'rgba(255,255,255,0.1)', 
              color: '#fff', 
              border: '1px solid rgba(255,255,255,0.3)', 
              borderRadius: '9999px',
              padding: '0.8rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem'
            }}>
              <span style={{ color: '#25D366' }}>💬</span> WhatsApp Us
            </a>
          </div>

          {/* Features Bar */}
          <div style={{ display: 'flex', gap: '2rem' }}>
             {[
               { icon: '⭐', text: 'Personalized Care' },
               { icon: '⚙️', text: 'Advanced Technology' },
               { icon: '✨', text: 'Visible Results' }
             ].map((feat, i) => (
               <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontSize: '0.8rem' }}>
                   {feat.icon}
                 </div>
                 <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '500', maxWidth: '80px', lineHeight: '1.2' }}>{feat.text}</span>
               </div>
             ))}
          </div>
        </motion.div>

        {/* Right Content (Cursive Text) */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          style={{ textAlign: 'center', marginTop: '10rem' }}
        >
           <h2 style={{ 
             fontFamily: 'var(--font-cursive)', 
             fontSize: '4.5rem', 
             color: '#fff',
             fontWeight: '400',
             margin: 0,
             lineHeight: '1'
           }}>
             Confident<br/>You
           </h2>
           <span style={{ 
             display: 'block', 
             fontSize: '0.65rem', 
             color: 'var(--accent)', 
             letterSpacing: '0.25em', 
             textTransform: 'uppercase',
             marginTop: '1rem'
           }}>
             Healthy Skin<br/>Happier You
           </span>
        </motion.div>
        
      </div>
    </section>
  );
}
