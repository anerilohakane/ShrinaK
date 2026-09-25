"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="specialist" style={{ padding: '8rem 0', background: '#FCFAF5', overflow: 'hidden' }}>
      <div className="container">

        {/* 1. Header Section for Specialist */}
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

        {/* 1. Content Section (50/50 Split) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'flex-start', marginBottom: '8rem' }}>

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ position: 'relative', height: '650px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
          >
            <Image
              src="/dr-sneha-profile.jpg"
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
              <div style={{ width: '4px', height: '40px', background: '#B69359', borderRadius: '2px' }}></div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.8rem', color: '#B69359', margin: 0 }}>
                Dr. Sneha Wanve
              </h3>
            </div>

            <p style={{ color: 'var(--primary)', fontWeight: '500', fontSize: '1.1rem', marginTop: '-1rem' }}>
              Aesthetic Physician | 5+ Years of Experience
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
              <p>
                Dr. Sneha Wanve is an experienced Aesthetic Physician with over 5 years of experience in aesthetic and cosmetic care. She completed her medical graduation from Maharashtra University of Health Sciences (MUHS), Nashik, and has developed a strong clinical focus on personalised aesthetic treatments.
              </p>
              <p>
                At Shrina Korean Aesthetic Clinic, Dr. Sneha combines medical expertise with modern aesthetic techniques to create personalised treatment plans based on each patient’s individual skin, hair and aesthetic concerns.
              </p>
              <p>
                Her approach focuses on natural-looking results, patient safety, precision and personalised care, while keeping every treatment aligned with the patient’s goals and clinical needs.
              </p>

              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--primary)', marginTop: '1rem' }}>Dr. Sneha’s Key Features</h4>

              <ul style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.8rem',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                color: 'var(--text-secondary)'
              }}>
                {[
                  "5+ Years of Clinical Experience",
                  "Aesthetic Physician",
                  "MUHS, Nashik Graduate",
                  "Personalised Treatment Planning",
                  "Skin & Hair Aesthetic Care",
                  "Advanced Aesthetic Procedures",
                  "Korean-Inspired Treatments",
                  "Natural-Looking Results",
                  "Patient-Centric Approach",
                  "Precision & Attention to Detail",
                  "Safety-Focused Treatment",
                  "Personalised Consultations"
                ].map((feature, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B69359" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <div style={{
                marginTop: '1.5rem',
                paddingLeft: '1.5rem',
                borderLeft: '2px solid var(--accent)'
              }}>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '500',
                  color: 'var(--primary)',
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  margin: 0
                }}>
                  Dr. Sneha Wanve — Medical Expertise. Personalised Aesthetics. Confident You.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

        {/* 2. About Clinic Section (Moved below and Redesigned Light Aesthetic) */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            marginTop: '8rem',
            paddingTop: '6rem',
            borderTop: '1px solid rgba(182, 147, 89, 0.2)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>

            {/* Left Image Stack */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', height: '600px', borderRadius: '24px 24px 24px 200px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000"
                  alt="Clinic Interior"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              {/* Floating Badge */}
              <div style={{
                position: 'absolute',
                bottom: '40px',
                right: '-30px',
                background: '#FFFFFF',
                padding: '2rem',
                borderRadius: '50%',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                width: '140px',
                height: '140px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                <span style={{ color: 'var(--accent)', fontSize: '2rem', fontWeight: '400', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>5k+</span>
                <span style={{ fontSize: '0.7rem', fontWeight: '600', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.5rem' }}>Happy<br />Patients</span>
              </div>
            </div>

            {/* Right Text */}
            <div style={{ paddingRight: '2rem' }}>
              <span style={{
                display: 'inline-block',
                border: '1px solid #B69359',
                color: '#B69359',
                padding: '0.4rem 1.2rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '2rem'
              }}>
                Our Story
              </span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                color: 'var(--primary)',
                fontWeight: '400',
                lineHeight: '1.2',
                marginBottom: '2rem'
              }}>
                About Shrina <br />
                <span style={{ color: '#B69359', fontStyle: 'italic' }}>Korean Aesthetic Clinic</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                <p><strong>Established in Pune in 2021</strong>, Shrina Korean Aesthetic Clinic was founded with a vision to bring advanced Korean-inspired skin, hair and aesthetic treatments to India. Starting in Kothrud, our presence now extends to Viman Nagar, Pune.</p>
                <p>Inspired by the precision and innovation of Korean aesthetics, we combine advanced technology, modern techniques and personalised treatment plans to deliver natural-looking, refined results. Our expertise spans across comprehensive Skin, Hair, and Laser Treatments.</p>
                <p>From skin rejuvenation and pigmentation management to laser solutions and hair care, every treatment is thoughtfully customised. With a strong focus on Korean aesthetic principles, we aim to create a premium yet comfortable clinical experience.</p>
                <p>We believe true beauty is not about changing who you are—it is about enhancing your natural features with precision, balance and confidence. Every consultation begins with understanding your unique aesthetic goals.</p>
              </div>

              <div style={{
                marginTop: '3rem',
                paddingLeft: '1.5rem',
                borderLeft: '2px solid var(--accent)'
              }}>
                <p style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '400',
                  color: 'var(--primary)',
                  fontSize: '1.3rem',
                  fontStyle: 'italic',
                  margin: 0
                }}>
                  "Where Korean Aesthetics Meet Advanced Care in Pune."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
