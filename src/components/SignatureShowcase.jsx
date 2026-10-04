import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, ArrowRight, ChevronLeft, ChevronRight
} from 'lucide-react';
import { PRODUCTS } from '../data/products';

// Direct imports for the 3 signature products provided in assets/signture products folder
import hotLineClampImg from '../assets/signture products/Hot Line Clamp.png';
import brassSwitchgearCrankImg from '../assets/signture products/Brass Switchgear Clip Crank with Assambly.png';
import earthReturnBrushImg from '../assets/signture products/EARTH RETURN BRUSH WITH BRUSH HOLDER ASSEMBLY.png';

// All 3 signature products provided in src/assets/signture products folder
const SIGNATURE_PRODUCTS = [
  {
    id: 'heavy-duty-hot-line-tap-clamp',
    title: 'Heavy Duty High-Conductivity Hot Line Tap Clamp',
    description: 'Utility-grade live-line hot line tap clamp engineered for overhead power distribution networks and transformer tap-offs, featuring high mechanical clamping torque and corrosion-resistant bronze/brass alloy construction.',
    image: hotLineClampImg,
    targetProduct: PRODUCTS.find(p => p.id === 'heavy-duty-hot-line-tap-clamp' || p.title.toLowerCase().includes('hot line'))
  },
  {
    id: 'brass-switchgear-clip-crank-assembly',
    title: 'Brass Switchgear Clip Crank Mechanism Assembly',
    description: 'Precision forged and CNC-machined brass switchgear clip crank mechanism assembly engineered for medium and high voltage disconnectors, circuit breakers, and isolators, delivering maximum mechanical reliability and fail-safe switching performance.',
    image: brassSwitchgearCrankImg,
    targetProduct: PRODUCTS.find(p => p.id === 'brass-switchgear-clip-crank-assembly' || p.title.toLowerCase().includes('crank'))
  },
  {
    id: 'earth-return-brush-holder-assembly',
    title: 'Earth Return Brush with Brush Holder Assembly',
    description: 'High-current precision engineered earth return brush mechanism featuring a heavy duty spring-loaded holder assembly for fail-safe grounding in railway traction, rolling stock, and rotating electrical machinery.',
    image: earthReturnBrushImg,
    targetProduct: PRODUCTS.find(p => p.id === 'earth-return-brush-holder-assembly' || p.title.toLowerCase().includes('earth return'))
  }
];

export default function SignatureShowcase({ onSelectProduct, onOpenQuote, onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  // Auto-scroll / Auto-slide effect every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SIGNATURE_PRODUCTS.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SIGNATURE_PRODUCTS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SIGNATURE_PRODUCTS.length) % SIGNATURE_PRODUCTS.length);
  };

  const currentItem = SIGNATURE_PRODUCTS[currentIndex];

  // Slide Animation Variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <section 
      className="signature-showcase-section"
      id="signature-products"
      style={{
        background: 'var(--cream, #FFFDF7)',
        color: 'var(--navy, #0B2240)',
        padding: '75px 0 85px',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border, #E2E8F0)',
        borderBottom: '1px solid var(--border, #E2E8F0)'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorative Accents */}
      <div 
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 148, 10, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(11, 34, 64, 0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '1180px', margin: '0 auto' }}>
        
        {/* ========================================================= */}
        {/* SECTION HEADER (CLEAN LIGHT DESIGN)                       */}
        {/* ========================================================= */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 36px' }}>
          
          {/* Eyebrow Badge */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--gold-pale, #FFF8E7)',
              border: '1px solid rgba(200, 148, 10, 0.4)',
              padding: '6px 20px',
              borderRadius: '100px',
              fontSize: '12px',
              fontWeight: 800,
              color: 'var(--gold-deep, #A37505)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '14px'
            }}
          >
            <Award size={15} color="var(--gold, #C8940A)" />
            <span>GLOBAL EXCLUSIVITY • SIGNATURE PRODUCTS</span>
          </div>

          {/* Section Main Heading */}
          <h2 
            style={{
              fontFamily: 'var(--font-h, Outfit, sans-serif)',
              fontSize: 'clamp(28px, 4.2vw, 42px)',
              fontWeight: 900,
              color: 'var(--navy, #0B2240)',
              lineHeight: 1.2,
              marginBottom: '12px'
            }}
          >
            Our Signature Products — <br />
            <span style={{ color: 'var(--gold, #C8940A)' }}>
              Engineered for High-Voltage Utilities & Power Grids
            </span>
          </h2>

          {/* Section Subtitle */}
          <p 
            style={{
              fontSize: '15.5px',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: '700px',
              margin: '0 auto'
            }}
          >
            Precision manufactured at our Jamnagar & Rajkot facilities and tested to international electrical standards for heavy utility and switchgear applications.
          </p>

        </div>

        {/* ========================================================= */}
        {/* AUTO-SCROLLING SHOWCASE CONTAINER                         */}
        {/* ========================================================= */}
        <div style={{ position: 'relative' }}>
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1.5px solid #E2E8F0',
              color: 'var(--navy, #0B2240)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(11, 34, 64, 0.12)',
              transition: 'all 0.25s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gold-pale, #FFF8E7)'; e.currentTarget.style.borderColor = 'var(--gold, #C8940A)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.borderColor = '#E2E8F0'; }}
            aria-label="Previous Product"
            title="Previous Signature Product"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '-20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#FFFFFF',
              border: '1.5px solid #E2E8F0',
              color: 'var(--navy, #0B2240)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(11, 34, 64, 0.12)',
              transition: 'all 0.25s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'var(--gold-pale, #FFF8E7)'; e.currentTarget.style.borderColor = 'var(--gold, #C8940A)'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.borderColor = '#E2E8F0'; }}
            aria-label="Next Product"
            title="Next Signature Product"
          >
            <ChevronRight size={20} />
          </button>

          {/* Product Block: Left Image, Right Title & Small Description */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentItem.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                background: '#FFFFFF',
                border: '1.5px solid #E2E8F0',
                borderRadius: '24px',
                padding: 'clamp(28px, 4vw, 44px)',
                boxShadow: '0 10px 35px rgba(11, 34, 64, 0.06)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 'clamp(28px, 5vw, 54px)',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* ========================================================= */}
              {/* LEFT SIDE: CLEAN PRODUCT IMAGE                            */}
              {/* ========================================================= */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div 
                  style={{
                    width: '100%',
                    maxWidth: '460px',
                    height: '360px',
                    background: 'linear-gradient(145deg, #F8FAFC 0%, #EDF2F7 100%)',
                    borderRadius: '20px',
                    border: '1.5px solid rgba(200, 148, 10, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    position: 'relative',
                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.04), 0 12px 28px rgba(11, 34, 64, 0.06)',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => currentItem.targetProduct && onSelectProduct ? onSelectProduct(currentItem.targetProduct) : null}
                  title="Click to view full specifications"
                >
                  {/* Metallic Corner Highlights */}
                  <div style={{ position: 'absolute', top: 12, left: 12, width: 16, height: 16, borderTop: '2.5px solid #C8940A', borderLeft: '2.5px solid #C8940A', borderRadius: '4px 0 0 0' }} />
                  <div style={{ position: 'absolute', top: 12, right: 12, width: 16, height: 16, borderTop: '2.5px solid #C8940A', borderRight: '2.5px solid #C8940A', borderRadius: '0 4px 0 0' }} />
                  <div style={{ position: 'absolute', bottom: 12, left: 12, width: 16, height: 16, borderBottom: '2.5px solid #C8940A', borderLeft: '2.5px solid #C8940A', borderRadius: '0 0 0 4px' }} />
                  <div style={{ position: 'absolute', bottom: 12, right: 12, width: 16, height: 16, borderBottom: '2.5px solid #C8940A', borderRight: '2.5px solid #C8940A', borderRadius: '0 0 4px 0' }} />

                  {/* High-Resolution Product Image */}
                  <img 
                    src={currentItem.image} 
                    alt={currentItem.title} 
                    loading="lazy"
                    style={{
                      maxWidth: '92%',
                      maxHeight: '92%',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 12px 20px rgba(11, 34, 64, 0.16))',
                      transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08) translateY(-4px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                  />
                </div>
              </div>

              {/* ========================================================= */}
              {/* RIGHT SIDE: PRODUCT TITLE & SMALL DESCRIPTION ONLY        */}
              {/* ========================================================= */}
              <div>
                
                {/* Product Title */}
                <h3 
                  style={{
                    fontFamily: 'var(--font-h, Outfit, sans-serif)',
                    fontSize: 'clamp(26px, 3.5vw, 34px)',
                    fontWeight: 900,
                    color: 'var(--navy, #0B2240)',
                    lineHeight: 1.25,
                    marginBottom: '16px'
                  }}
                >
                  {currentItem.title}
                </h3>

                {/* Small Description */}
                <p 
                  style={{
                    fontSize: '16px',
                    color: '#475569',
                    lineHeight: 1.75,
                    marginBottom: '28px',
                    fontWeight: 400
                  }}
                >
                  {currentItem.description}
                </p>

                {/* Action Button */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                  {/* Request Quote Button */}
                  <button
                    onClick={() => onOpenQuote ? onOpenQuote(currentItem.title) : null}
                    className="btn btn-primary"
                    style={{
                      padding: '13px 28px',
                      fontSize: '14px',
                      fontWeight: 800,
                      borderRadius: '10px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span>Request Official Quote</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Autoscroll Pagination Indicators */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '24px'
            }}
          >
            {SIGNATURE_PRODUCTS.map((prod, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={prod.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  style={{
                    width: isActive ? '36px' : '10px',
                    height: '10px',
                    borderRadius: '100px',
                    background: isActive ? 'var(--gold, #C8940A)' : '#CBD5E1',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                    padding: 0
                  }}
                  title={`View ${prod.title}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
