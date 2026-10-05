import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import handshakeImg from '../assets/handshake-export.png';

export default function CtaBanner({ onOpenQuote, onNavigate }) {
  return (
    <section className="cta-banner-redesign-section">
      <div className="container">
        <motion.div
          className="cta-banner-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-banner-grid">
            {/* Left Image Showcase */}
            <div className="cta-banner-image-wrap" style={{ backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px' }}>
              <img
                src={handshakeImg}
                alt="Partner with Priya Impex for Direct Bulk Exports"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <div className="cta-image-floating-tag">
                <Sparkles size={15} color="#F5C542" />
                <span>25+ Years Manufacturing Heritage</span>
              </div>
            </div>

            {/* Right Content & Actions */}
            <div className="cta-banner-content">
              <h2 className="cta-banner-title" style={{ color: '#FFFFFF' }}>
                Connect With Us Today for <span style={{ color: '#F5C542' }}>Direct Bulk Exports</span>
              </h2>

              <p className="cta-banner-desc">
                Partner with Priya Impex for precision Earthing Solutions, Copper Bonded Rods, and CNC Brass Components delivered to your port with verified conductivity, tight tolerances, and complete export compliance.
              </p>

              <div className="cta-actions-row">
                <button 
                  className="btn btn-primary" 
                  onClick={() => onOpenQuote ? onOpenQuote() : (onNavigate && onNavigate('contact'))} 
                  style={{ padding: '14px 28px', fontSize: '14.5px', display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '10px' }}
                >
                  <span>Request Export Quote</span>
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
