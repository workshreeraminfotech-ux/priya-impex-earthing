import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import testimonialsShowcaseImg from '../assets/testimonials-showcase.jpg';

const testimonials = [
  {
    name: 'Rajesh V. Patel',
    role: 'Chief Project Engineer, Solar & Substation EPC',
    location: 'Ahmedabad, Gujarat 🇮🇳',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    text: 'We have sourced over 20,000 Copper Bonded Earthing Rods and Chemical Electrodes for our utility-scale solar projects across Gujarat and Rajasthan. The 250+ micron molecular copper bonding passed all CPRI and site conductivity tests with zero bending defects during deep mechanical driving.'
  },
  {
    name: 'Vikramaditya Sharma',
    role: 'VP — Infrastructure Procurement & Metro Electrification',
    location: 'New Delhi / NCR, India 🇮🇳',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    text: 'Priya Impex has been our primary electrical brass components manufacturer for high-speed rail and metro sub-station works. Their CNC brass neutral links, cable glands, and earth busbars meet exact RDSO, IEC, and BS specifications with full batch test certificates.'
  },
  {
    name: 'Suresh K. Agarwal',
    role: 'Director, Switchgear & Panel Manufacturing',
    location: 'Mumbai, Maharashtra 🇮🇳',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    text: 'With 25+ years of in-house foundry and extrusion mastery in Jamnagar and Rajkot, Priya Impex delivers world-class brass and copper earthing hardware. Their prompt dispatch, precision tolerances within ±0.01mm, and pure alloy composition give us complete confidence.'
  },
  {
    name: 'Anand R. Sundaram',
    role: 'Head of Electrical MEP & Industrial Projects',
    location: 'Chennai / Bengaluru, India 🇮🇳',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    text: 'From heavy-duty cast gunmetal rod-to-tape clamps to lightning protection air terminals, Priya Impex provides top-tier quality for our commercial data center and refinery installations. Factory-direct pricing and exceptional technical support make them our most dependable partner.'
  },
  {
    name: 'Pradeep Mukherjee',
    role: 'General Manager — Power Transmission & Distribution',
    location: 'Kolkata, West Bengal 🇮🇳',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    text: 'The quality of their chemical earthing compound and heavy-gauge earthing pit covers is outstanding. Even in high-corrosion coastal soil environments, their earthing solutions maintain consistently low earth resistance values year after year.'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTesti = testimonials[currentIndex];

  return (
    <section className="testimonial-redesign-section" id="testimonials">
      <div className="container">
        <div className="testimonial-grid">
          {/* Left Testimonial Carousel Card */}
          <div>
            <div className="section-title left-align" style={{ marginBottom: '32px' }}>
              <span className="eyebrow">CLIENT TESTIMONIALS</span>
              <h2>
                Trusted by Global EPCs, <span>Verified by Precision</span>
              </h2>
            </div>

            <motion.div
              key={currentIndex}
              className="testimonial-card-v2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="testi-card-header">
                <div className="testimonial-user-info">
                  <img src={activeTesti.img} alt={activeTesti.name} />
                  <div>
                    <h3>{activeTesti.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="testi-user-role">{activeTesti.role}</span>
                      <span className="testi-user-loc">• {activeTesti.location}</span>
                    </div>
                  </div>
                </div>
                <Quote size={42} className="testi-quote-icon" />
              </div>

              <div className="stars-wrap" style={{ margin: '18px 0 16px' }}>
                {Array.from({ length: activeTesti.stars }).map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p className="testi-text-quote">
                "{activeTesti.text}"
              </p>
            </motion.div>

            {/* Carousel Navigation Controls & Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px' }}>
              <div className="testi-controls" style={{ marginTop: 0 }}>
                <button
                  onClick={handlePrev}
                  className="testi-btn-prev"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={handleNext}
                  className="testi-btn-next"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      width: currentIndex === idx ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '100px',
                      background: currentIndex === idx ? 'var(--gold)' : '#CBD5E1',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: 0
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Showcase Photo */}
          <div style={{ position: 'relative' }}>
            <div className="testi-image-wrap" style={{ borderRadius: '24px', overflow: 'hidden', height: '100%', minHeight: '380px', boxShadow: '0 12px 36px rgba(11, 34, 64, 0.08)' }}>
              <img
                src={testimonialsShowcaseImg}
                alt="Priya Impex Earthing & Brass Engineering Client Testimonials"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
