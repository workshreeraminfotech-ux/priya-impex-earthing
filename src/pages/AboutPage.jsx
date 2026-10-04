import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, CheckCircle2, Globe2, Sparkles, Building2, Factory, TestTube, Package, Ship, Cpu } from 'lucide-react';
import AboutUs from '../components/AboutUs';
import CertificationsSection from '../components/CertificationsSection';
import CtaBanner from '../components/CtaBanner';

import hygienicPackagingImg from '../assets/hygienic-packaging.webp';
import containerDispatchImg from '../assets/container-dispatch.webp';
import plantRajkotImg from '../assets/plant-rajkot-earthing.jpg';
import plantJamnagarImg from '../assets/plant-jamnagar-brass.jpg';

export default function AboutPage({ onNavigate, onOpenQuote }) {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      desc: 'To manufacture 100% compliant, precision-engineered Earthing Parts, Copper Bonded Rods, and Precision Brass Components across our 2 Gujarat manufacturing units (1 in Rajkot, 1 in Jamnagar), exporting them globally through Priya Impex with direct factory transparency and guaranteed on-time delivery.',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      desc: 'To stand as the most trusted manufacturing and direct export group for grounding hardware and precision CNC brass components globally for international B2B buyers, known for genuine factory pricing and zero-compromise engineering.',
      img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assurance Policy',
      desc: 'Every single export consignment produced at our factories undergoes multi-tier testing: copper coating thickness in microns (UL/IEC standards), electrical conductivity %, tensile strength, and Go/No-Go thread gauge verification.',
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const infrastructureSteps = [
    {
      title: 'In-House Foundry & Extrusion',
      desc: 'High-capacity induction melting and extrusion producing high-tensile brass alloys and copper rods.',
      icon: Factory,
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Accredited Lab & Conductivity Testing',
      desc: 'In-house & third-party NABL/CPRI testing for copper coating thickness and conductivity.',
      icon: TestTube,
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Precision CNC Machining',
      desc: 'High-speed CNC and VMC turning centers maintaining tight dimensional tolerances (±0.01mm).',
      icon: Cpu,
      img: hygienicPackagingImg
    },
    {
      title: 'Seaworthy Pallet Container Dispatch',
      desc: 'Heavy-duty wooden crates, palletizing, and customs clearance at Mundra & Pipavav ports.',
      icon: Ship,
      img: containerDispatchImg
    }
  ];

  return (
    <div className="about-page" style={{ backgroundColor: '#F8FAFC' }}>
      
      {/* Page Hero */}
      <section style={{
        position: 'relative',
        color: '#FFFFFF',
        padding: '75px 0 65px',
        overflow: 'hidden',
        backgroundColor: '#1C1917'
      }}>
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=70" 
          alt="About Priya Impex Background" 
          loading="lazy"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0
          }}
        />
        {/* Warm Amber Dark Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(42, 29, 8, 0.75) 0%, rgba(28, 25, 23, 0.88) 100%)',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{
              fontFamily: 'var(--font-h, Outfit, sans-serif)',
              fontSize: 'clamp(34px, 5vw, 54px)',
              fontWeight: 900,
              margin: '0',
              lineHeight: 1.15,
              color: '#FFFFFF'
            }}>
              About <span style={{ color: 'var(--gold-light)' }}>Us</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main AboutUs Showcase */}
      <AboutUs onNavigate={onNavigate} />

      {/* 2 Manufacturing Units & Global Trade Desks */}
      <section className="py-50" style={{ backgroundColor: '#FFFDF7', padding: '56px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '44px' }}>
            <span className="eyebrow">
              OUR INFRASTRUCTURE & EXPORT SETUP
            </span>
            <h2 style={{ color: 'var(--navy)', marginTop: '10px' }}>
              2 Manufacturing Facilities & <span style={{ color: 'var(--gold)' }}>Priya Impex Export Desk</span>
            </h2>
            <p style={{ color: 'var(--gray)', maxWidth: '720px', margin: '10px auto 0', fontSize: '15.5px', lineHeight: 1.6 }}>
              Our manufacturing core spans 2 specialized production plants in Gujarat (1 in Rajkot & 1 in Jamnagar), complemented by Priya Impex for global marketing, container logistics, and international buyer support.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            
            {/* Card 1: Manufacturing Unit 1 (Rajkot) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid var(--border)',
                boxShadow: '0 8px 24px rgba(11, 34, 64, 0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={plantRajkotImg} 
                  alt="Unit 1 Rajkot Earthing Plant" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(11, 34, 64, 0.88) 100%)' }}></div>
                <div style={{ position: 'absolute', bottom: '14px', left: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF' }}>
                  <Building2 size={20} style={{ color: 'var(--gold)' }} />
                  <span style={{ fontWeight: 800, fontSize: '16.5px' }}>Unit 1 — Rajkot Plant 🇮🇳</span>
                </div>
              </div>

              <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: 'var(--gold-deep)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                  EARTHING & GROUNDING SOLUTIONS
                </span>
                <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  Specialized in Copper Bonded Earthing Rods (up to 254 micron), Chemical Electrodes, Earth Enhancing Compound, and Heavy-Duty Pit Covers with in-house conductivity lab.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Manufacturing Unit 2 (Jamnagar) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid var(--border)',
                boxShadow: '0 8px 24px rgba(11, 34, 64, 0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={plantJamnagarImg} 
                  alt="Unit 2 Jamnagar Brass Plant" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(11, 34, 64, 0.88) 100%)' }}></div>
                <div style={{ position: 'absolute', bottom: '14px', left: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF' }}>
                  <Factory size={20} style={{ color: 'var(--gold)' }} />
                  <span style={{ fontWeight: 800, fontSize: '16.5px' }}>Unit 2 — Jamnagar Plant 🇮🇳</span>
                </div>
              </div>

              <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: 'var(--gold-deep)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                  BRASS FOUNDRY & CNC PRECISION HUB
                </span>
                <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  1 high-capacity production unit in Jamnagar featuring in-house brass alloy casting, extrusion, and CNC/VMC machining of Cable Glands, Neutral Links, and Split Bolts.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Priya Impex Direct Export Firm */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid var(--border)',
                boxShadow: '0 8px 24px rgba(11, 34, 64, 0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80" 
                  alt="Priya Impex Direct Export Firm" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(11, 34, 64, 0.88) 100%)' }}></div>
                <div style={{ position: 'absolute', bottom: '14px', left: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF' }}>
                  <Ship size={20} style={{ color: 'var(--gold)' }} />
                  <span style={{ fontWeight: 800, fontSize: '16.5px' }}>Priya Impex — Export Desk 🚢</span>
                </div>
              </div>

              <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: 'var(--gold-deep)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                  COMMERCIAL & EXPORT MANAGEMENT
                </span>
                <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  Our dedicated export firm executing direct global sales, customs clearance, international contract management, and seaworthy container shipping from Mundra port.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Global Representative Desks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid var(--border)',
                boxShadow: '0 8px 24px rgba(11, 34, 64, 0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                  alt="Global Trade Desks" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(11, 34, 64, 0.88) 100%)' }}></div>
                <div style={{ position: 'absolute', bottom: '14px', left: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF' }}>
                  <Globe2 size={20} style={{ color: 'var(--gold)' }} />
                  <span style={{ fontWeight: 800, fontSize: '16.5px' }}>Global Buyer Desks 🌐</span>
                </div>
              </div>

              <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: 'var(--gold-deep)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                  GERMANY • USA • UK BUYER SUPPORT
                </span>
                <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  Dedicated overseas trade representatives coordinating international buyer relations, drawing approvals, sample evaluations, and localized technical assistance.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Processing & Infrastructure Showcase Grid */}
      <section className="py-50" style={{ backgroundColor: '#FFFFFF', padding: '54px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '44px' }}>
            <span className="eyebrow">
              MANUFACTURING INFRASTRUCTURE
            </span>
            <h2 style={{ color: 'var(--navy)', marginTop: '10px' }}>
              State-Of-The-Art <span style={{ color: 'var(--gold)' }}>Foundry & Machining Facility</span>
            </h2>
            <p style={{ color: 'var(--gray)', maxWidth: '620px', margin: '10px auto 0' }}>
              From raw alloy smelting to molecular copper bonding, CNC turning, and container port dispatch across our 2 units.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {infrastructureSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1.5px solid var(--border)',
                    boxShadow: '0 6px 20px rgba(200, 148, 10, 0.04)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                    <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 12, left: 12, width: 40, height: 40, borderRadius: '12px', background: 'linear-gradient(135deg, #C8940A 0%, #D4AF37 100%)', color: '#1C1917', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} />
                    </div>
                  </div>
                  <div style={{ padding: '20px', flex: 1 }}>
                    <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy)', marginBottom: '6px' }}>{step.title}</h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--gray)', lineHeight: 1.5, margin: 0 }}>{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Quality Policy Section */}
      <section className="py-50" style={{ backgroundColor: '#FFFDF7', padding: '54px 0' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '48px' }}>
            <span className="eyebrow">
              OUR CORE FOUNDATION
            </span>
            <h2 style={{ color: 'var(--navy)', marginTop: '10px' }}>
              Driven by Precision, <span style={{ color: 'var(--gold)' }}>Guided by Integrity</span>
            </h2>
            <p style={{ color: 'var(--gray)', maxWidth: '600px', margin: '10px auto 0' }}>
              Discover the core principles that power our manufacturing heritage and Priya Impex's direct export commitment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {values.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1.5px solid var(--border)',
                    boxShadow: '0 8px 24px rgba(200, 148, 10, 0.05)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ height: '170px', overflow: 'hidden', position: 'relative' }}>
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 20%, rgba(42,29,8,0.85) 100%)' }}></div>
                    <div style={{ position: 'absolute', bottom: '14px', left: '16px', display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF' }}>
                      <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'linear-gradient(135deg, #C8940A 0%, #D4AF37 100%)', color: '#1C1917', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={18} />
                      </div>
                      <span style={{ fontSize: '18px', fontWeight: 800 }}>{item.title}</span>
                    </div>
                  </div>

                  <div style={{ padding: '24px', flex: 1 }}>
                    <p style={{ fontSize: '14.5px', color: 'var(--gray)', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <CertificationsSection bgColor="#FFFFFF" />

      {/* Connect With Us CTA */}
      <CtaBanner onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
    </div>
  );
}
