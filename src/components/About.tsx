"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="specialist" style={{ padding: '8rem 0', background: '#FCFAF5', overflow: 'hidden' }}>
      <div className="container">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: '4rem' }}
        >
          <span style={{
            display: 'inline-block',
            border: '1px solid #B69359',
            color: '#B69359',
            padding: '0.5rem 1.5rem',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '2rem'
          }}>
            SPECIALIST
          </span>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
            color: 'var(--primary)',
            fontWeight: '400',
            lineHeight: '1.1'
          }}>
            Meet Our <span style={{ color: '#B69359' }}>Specialist</span>
          </h2>
        </motion.div>

        {/* Content Section (50/50 Split) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'flex-start' }}>

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ position: 'relative', height: '650px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
          >
            <Image
              src="/doctor_shrina.jpg"
              alt="Dr. Sneha Wanve - Aesthetic Physician"
              fill
              style={{ objectFit: 'cover' }}
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '2rem' }}
          >
            {/* Dr. Sneha Wanve Heading with vertical line */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '4px', height: '40px', background: '#B69359', borderRadius: '2px' }}></div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', color: '#B69359', margin: 0 }}>
                Dr. Sneha Wanve
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              <p>
                Dr. Sneha Wanve is an aesthetic physician with a distinctive multidisciplinary foundation in both Medicine (MD) and Korean Medicine (KMD). She earned her Doctor of Medicine from the Graduate School of Medicine at Kyung Hee University in Seoul, South Korea, and holds a Bachelor of Korean Medicine from the same institution.
              </p>

              <p>
                Bringing extensive clinical experience from Seoul's leading aesthetic medical centres, Dr. Sneha Wanve takes an anatomy-driven, highly individualised approach to facial rejuvenation. Her philosophy centres on achieving harmonious, natural-looking outcomes through meticulous assessment and personalised treatment planning.
              </p>

              <p>
                Her areas of expertise encompass advanced injectables, including dermal fillers and botulinum toxin for facial contouring, collagen biostimulators, and skin boosters as well as regenerative therapies. She also specializes in non-surgical lifting and skin rejuvenation techniques tailored to enhance your innate beauty.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
