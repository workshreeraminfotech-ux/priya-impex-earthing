import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "Are your earthing rods and brass components certified to international standards?",
    a: "Yes, all our copper bonded rods, chemical electrodes, and precision brass parts are manufactured to comply with IEC 62561-2, UL 467, IEEE 80, BS 7430, ISO 9001:2015, and RoHS directives, complete with Material Test Certificates (MTC) and lab test reports."
  },
  {
    q: "Can you manufacture custom brass parts and clamps as per client engineering drawings?",
    a: "Absolutely! Backed by 25+ years of manufacturing experience, in-house foundry casting, extrusion lines, and advanced CNC/VMC machining centers, we produce custom OEM brass parts, grounding clamps, and neutral bars strictly to your tolerances."
  },
  {
    q: "What is the copper coating thickness on your copper bonded earthing rods?",
    a: "We provide electrolytic molecular copper bonding thicknesses ranging from 100 microns up to 254 microns (UL 467 / IEC 62561 standard) with irreversible molecular bonding that prevents peeling or cracking during deep soil driving."
  },
  {
    q: "What is the typical production and export dispatch timeframe?",
    a: "Standard export container consignments (FCL/LCL) are packed in heavy-duty seaworthy wooden pallets/crates and dispatched from Mundra or Pipavav ports within 10–18 business days from order confirmation."
  },
  {
    q: "Do you supply product samples for technical and dimensional approval?",
    a: "Yes, we provide sample pieces of our earthing rods, brass cable glands, neutral links, and grounding clamps to qualified commercial buyers, EPC contractors, and distributors for dimensional and material validation."
  }
];

export default function FAQ({ onNavigate }) {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="faq-redesign-section" id="faq">
      <div className="container">
        <div className="faq-grid">
          {/* Left Title & Help Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-title left-align" style={{ marginBottom: '28px' }}>
              <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
              <h2>
                Got Questions? <span>We Have Answers</span>
              </h2>
              <p>
                Find answers to common questions about our earthing parts certifications, custom CNC brass manufacturing, container shipping, and quality testing.
              </p>
            </div>

            {/* Quick Support Card */}
            <div className="faq-support-card">
              <div className="faq-support-icon">
                <HelpCircle size={26} />
              </div>
              <div className="faq-support-content">
                <h4>Have technical drawings or custom requirements?</h4>
                <p>Our engineering export desk is available to assist with technical quotes and custom specifications.</p>
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="btn btn-primary"
                  style={{ padding: '10px 20px', fontSize: '13.5px', marginTop: '12px' }}
                >
                  <span>Contact Technical Desk</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Accordion List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="faq-accordion-list">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className={`faq-card-item ${isOpen ? 'active' : ''}`}>
                    <button
                      className="faq-accordion-btn"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      type="button"
                    >
                      <span className="faq-q-text">{faq.q}</span>
                      <span className="faq-toggle-icon">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="faq-answer-body">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
