import React from 'react';
import { Globe, Truck, Anchor, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

import foundryMachiningImg from '../assets/foundry-machining.jpg';
import qualityTestingImg from '../assets/quality-testing-lab.jpg';

export default function WhyChooseUs({ onNavigate }) {
  const services = [
    {
      title: 'In-House Foundry & Machining',
      desc: 'Over 25 years of manufacturing mastery in brass alloy casting, extrusion, copper molecular bonding, and high-speed CNC turning.',
      img: foundryMachiningImg,
      icon: Globe,
      tag: 'Direct Manufacturer',
      points: ['In-House Foundry & Extrusion', 'High-Precision CNC/VMC Machining']
    },
    {
      title: 'International Quality & Testing',
      desc: 'Manufactured strictly to IEC 62561, IEEE 80, BS 7430, and UL standards with 100% in-house dimensional and conductivity verification.',
      img: qualityTestingImg,
      icon: Truck,
      tag: 'Certified Compliance',
      points: ['CPRI & NABL Tested Standards', '100% Conductivity & Micron Audits']
    },
    {
      title: 'Global Export & Container Logistics',
      desc: 'Expert handling of sea-worthy wooden pallet packaging, custom OEM development, certificate of origin, and ocean container shipping.',
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
      icon: Anchor,
      tag: 'Global Shipping',
      points: ['Mundra Port Container Dispatch', 'Custom OEM Drawing Development']
    }
  ];

  return (
    <section className="services-redesign-section" id="services">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">OUR CAPABILITIES</span>
          <h2>
            Manufacturing Excellence Powering <span>Global Infrastructure</span>
          </h2>
          <p>
            Delivering world-class precision earthing solutions, in-house brass foundry casting, and international container export logistics tailored for global buyers.
          </p>
        </div>

        <div className="services-card-grid">
          {services.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                className="service-card-v2"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="service-card-image">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="service-card-body">
                  <span className="service-card-tag-inline">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>

                  <ul className="service-card-points" style={{ marginBottom: 0 }}>
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <CheckCircle2 size={15} color="var(--gold)" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
