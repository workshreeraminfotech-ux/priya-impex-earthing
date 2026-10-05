import React from 'react';
import { ArrowRight, Factory, Building2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import worldMapImg from '../assets/world-map-export.png';

export default function AboutUs({ onNavigate }) {
  return (
    <section className="about-section py-50" id="about" style={{ backgroundColor: '#FFFFFF', padding: '54px 0' }}>
      <div className="container">
        <div className="about-grid-wrapper">
          
          {/* Photo Column (Left on Laptop, Appears right after Intro on Phone) */}
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', width: '100%' }}
          >
            {/* World Map / Global Export Footprint Frame */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1.5px solid #E2E8F0',
              boxShadow: '0 12px 32px rgba(10, 37, 64, 0.07)',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px 8px',
              width: '100%'
            }}>
              <img
                src={worldMapImg}
                alt="Priya Impex Global Export Footprint & World Trade Map"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '14px',
                  display: 'block'
                }}
              />
            </div>

            {/* Manufacturing Units Highlights Box below Photo */}
            <div style={{
              marginTop: '16px',
              background: '#FFFDF7',
              border: '1.5px solid #F1E5C8',
              borderRadius: '18px',
              padding: '16px 20px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building2 size={18} color="var(--gold-deep)" />
                <div>
                  <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block' }}>1 Unit in Rajkot</strong>
                  <span style={{ fontSize: '11.5px', color: '#64748B' }}>Earthing Solutions</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Factory size={18} color="var(--gold-deep)" />
                <div>
                  <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block' }}>1 Unit in Jamnagar</strong>
                  <span style={{ fontSize: '11.5px', color: '#64748B' }}>Precision Brass Hub</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column (Right on Laptop, Flow on Phone) */}
          <motion.div
            className="about-content-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Intro Lead Block */}
            <div className="about-intro-lead-block">
              <span className="eyebrow" style={{ marginBottom: '14px' }}>
                25+ YEARS MANUFACTURING HERITAGE • PRIYA IMPEX EXPORT ARM
              </span>

              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 38px)', fontWeight: 900, color: 'var(--navy)', lineHeight: 1.2, margin: '12px 0 16px', fontFamily: 'var(--font-h, Outfit, sans-serif)' }}>
                Manufacturing Pioneers, <span style={{ color: 'var(--gold)' }}>Direct Global Exporters</span>
              </h2>

              <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65, marginBottom: '20px', fontWeight: 500 }}>
                With <strong>over 25 years of robust manufacturing heritage</strong>, our industrial group operates <strong>2 state-of-the-art production facilities across Gujarat</strong> — including <strong>1 specialized unit in Rajkot</strong> and <strong>1 high-capacity unit in Jamnagar</strong> (India’s premier brass hub).
              </p>
            </div>

            {/* Mobile Injected Photo Slot (Visible only on phone) */}
            <div className="about-mobile-photo-placement" />

            <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: 1.6, marginBottom: '18px' }}>
              To facilitate seamless international trade and deliver factory-direct pricing to global markets, our manufacturing group established <strong>Priya Impex as our dedicated direct sales & export firm</strong>. While our commercial operations and international shipments are managed under the Priya Impex banner, every product is engineered directly at our own manufacturing plants.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: 1.6, marginBottom: '24px' }}>
              This unique structure empowers our global EPC contractors, power utilities, and electrical distributors with true manufacturer-level customization, in-house alloy casting, tight CNC precision tolerances, and guaranteed compliance with IEC, IEEE, and BS standards — eliminating middleman costs completely.
            </p>

            {/* Action CTA */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onNavigate ? onNavigate('products') : null} 
                className="btn btn-primary" 
                style={{ padding: '13px 32px', fontSize: '14.5px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Explore Products</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
