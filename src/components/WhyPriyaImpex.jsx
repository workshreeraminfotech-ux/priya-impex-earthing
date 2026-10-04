import React from 'react';
import { motion } from 'framer-motion';
import { Award, Factory, Trophy, Users, Sparkles } from 'lucide-react';

export default function WhyPriyaImpex() {
  const highlights = [
    {
      id: 1,
      icon: Award,
      title: 'Commitment to Quality & Excellence'
    },
    {
      id: 2,
      icon: Factory,
      title: 'Leading Manufacturer & Exporter of Earthing & Brass Products'
    },
    {
      id: 3,
      icon: Trophy,
      title: 'Unmatched Expertise'
    },
    {
      id: 4,
      icon: Users,
      title: 'Customer Centric Approach'
    }
  ];

  return (
    <section className="why-priya-impex-section" id="why-priya-impex">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Centered Header Section */}
        <div className="why-pi-header">
          
          {/* Eyebrow Badge */}
          <div className="why-pi-badge">
            <Sparkles size={14} color="var(--gold-deep)" className="why-pi-badge-icon" />
            <span>MANUFACTURING EXCELLENCE • DIRECT GLOBAL EXPORT</span>
          </div>

          {/* Centered Main Title */}
          <h2 className="why-pi-title">
            Why <span style={{ color: 'var(--gold)' }}>Priya Impex?</span>
          </h2>

          {/* Centered Subtitle */}
          <p className="why-pi-subtitle">
            25+ Years of Certified Engineering Heritage, Direct Factory Manufacturing across 2 Gujarat Units (Rajkot & Jamnagar) & Global B2B Export Transparency.
          </p>
        </div>

        {/* 4 Feature Items (2x2 on Mobile, 4 columns on Desktop) */}
        <div className="why-pi-grid">
          {highlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div 
                key={item.id}
                className="why-pi-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Circle Icon Badge (Navy & Gold Theme) */}
                <motion.div 
                  className="why-pi-icon-badge"
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <IconComp strokeWidth={2.2} />
                </motion.div>

                {/* Title */}
                <h3 className="why-pi-item-title">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

