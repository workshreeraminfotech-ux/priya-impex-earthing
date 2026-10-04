import React from 'react';
import { motion } from 'framer-motion';
import { Award, Ship, Building2, ShieldCheck } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function CounterSection() {
  const stats = [
    {
      end: 25,
      suffix: '+',
      title: 'Years Manufacturing Heritage',
      icon: Award,
      desc: 'Precision Earthing & Brass parts'
    },
    {
      end: 100,
      suffix: '%',
      title: 'Quality & Conductivity Tested',
      icon: ShieldCheck,
      desc: 'IEC, IEEE & BS Standard compliance'
    },
    {
      end: 100,
      suffix: '+ MT',
      title: 'Monthly Production Capacity',
      icon: Building2,
      desc: 'In-house foundry & CNC machining'
    },
    {
      end: 100,
      suffix: '%',
      title: 'On-Time Container Dispatch',
      icon: Ship,
      desc: 'Mundra & Pipavav port clearance'
    }
  ];

  return (
    <section className="counter-stats-redesign-section">
      <div className="container">
        <div className="counter-stats-grid">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={idx}
                className="counter-card-v2"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <div className="counter-card-header">
                  <div className="counter-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <h2 className="counter-num-val">
                    <AnimatedCounter end={st.end} suffix={st.suffix} />
                  </h2>
                </div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
