"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2000",
    alt: "Luxurious Skin Treatment",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=2000",
    alt: "Relaxing Spa Experience",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=2000",
    alt: "Pune Skyline Luxury",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=2000",
    alt: "Professional Aesthetic Care",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero" style={{
      minHeight: '100vh',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: '10rem'
    }}>
      {/* Background Image Slideshow */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority={currentSlide === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(28, 46, 37, 0.95) 0%, rgba(28, 46, 37, 0.7) 40%, rgba(28, 46, 37, 0.2) 100%)', zIndex: 1 }}></div>

      {/* Foreground Content */}
      <div className="container flex-responsive-stack" style={{ position: 'relative', zIndex: 10, justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '4rem' }}>

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
            textTransform: 'uppercase',
            border: '1px solid var(--accent)',
            padding: '0.4rem 1rem',
            borderRadius: '9999px'
          }}>EASY TO FIND, HARD TO LEAVE</span>

          <h1 style={{
            fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            color: '#FFFFFF',
            fontWeight: '400',
            fontFamily: 'var(--font-heading)'
          }}>
            Find Your <br />
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Natural Beauty</span>
          </h1>

          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '2rem',
            maxWidth: '500px',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Experience the pinnacle of skincare luxury. With our world-class expertise and advanced treatments, we reveal your most radiant, flawless self.
          </p>

          <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
              <span style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>✦</span>
              <span style={{ fontSize: '0.9rem' }}>Exceptional Care</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
              <span style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>✦</span>
              <span style={{ fontSize: '0.9rem' }}>Guaranteed Satisfaction</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://wa.me/918979797220" target="_blank" rel="noopener noreferrer" className="btn" style={{
              background: 'transparent',
              color: 'var(--accent)',
              border: '2px solid var(--accent)',
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: '500',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none'
            }}>
              Contact Us <span>💬</span>
            </a>
            <a href="#treatments" className="btn" style={{
              background: 'var(--accent)',
              color: 'var(--primary)',
              borderRadius: '9999px',
              padding: '0.8rem 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '1rem',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Explore Treatments <span>✦</span>
            </a>
          </div>

          {/* Social Proof */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: '#fff', borderRadius: '50%' }}>
              <span style={{ color: '#4285F4', fontWeight: 'bold', fontSize: '1.2rem' }}>G</span>
            </div>
            <div>
              <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--accent)' }}>
                ★★★★★
              </div>
              <span style={{ color: '#fff', fontSize: '0.85rem' }}>Reviews (4.9 out 5)</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content / Navigation Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: currentSlide === idx ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
