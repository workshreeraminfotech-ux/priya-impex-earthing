import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBgVideo from '../assets/hero-bg.mp4';
import heroPosterImg from '../assets/hero-poster.webp';

export default function HeroBannerSlider({ onOpenQuote, onNavigate }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Mobile screens (< 768px) and Data Saver users stay on the lightweight poster for instant load
    const isMobile = window.innerWidth < 768;
    const isDataSaver = navigator.connection?.saveData === true || navigator.connection?.effectiveType === '2g' || navigator.connection?.effectiveType === '3g';

    if (!isMobile && !isDataSaver) {
      // Defer video stream on desktop so initial LCP/FCP renders in 30ms
      const timer = setTimeout(() => setShouldLoadVideo(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section 
      className="jrp-hero-section" 
      style={{ 
        position: 'relative', 
        minHeight: '580px', 
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden', 
        background: '#070b14',
        marginTop: 0,
        clear: 'both',
        padding: '78px 0 82px'
      }}
    >
      {/* Instant Eager-Loaded Lightweight Poster Image */}
      <img
        src={heroPosterImg}
        alt="Priya Impex Earthing & Brass Parts Manufacturer"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.94,
          filter: 'brightness(1.04) contrast(1.12) saturate(1.05)',
          zIndex: 1
        }}
      />

      {/* Progressive Background Video (Streams only when browser is ready) */}
      {shouldLoadVideo && (
        <video 
          className="hero-video-bg" 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            opacity: videoLoaded ? 0.94 : 0,
            transition: 'opacity 0.8s ease-in-out',
            filter: 'brightness(1.04) contrast(1.12) saturate(1.05)',
            zIndex: 2 
          }}
        >
          <source src={heroBgVideo} type="video/mp4" />
        </video>
      )}

      {/* Clean Subtle Transparent Gradient Overlay */}
      <div 
        className="hero-video-overlay" 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(180deg, rgba(7, 11, 20, 0.25) 0%, rgba(7, 11, 20, 0.38) 55%, rgba(5, 8, 16, 0.58) 100%)', 
          zIndex: 3 
        }}
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 4, width: '100%' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Main Framed Heading Box (Transparent Background) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              border: '2px solid rgba(255, 255, 255, 0.95)',
              padding: 'clamp(20px, 3.5vw, 36px) clamp(30px, 6vw, 70px)',
              display: 'inline-block',
              textAlign: 'center',
              margin: '0 auto 24px auto',
              background: 'transparent',
              boxShadow: 'none'
            }}
          >
            <div 
              style={{ 
                fontFamily: 'var(--font-h)', 
                fontSize: 'clamp(32px, 4.8vw, 54px)', 
                fontWeight: 600, 
                color: '#ffffff', 
                lineHeight: 1.18, 
                letterSpacing: '-0.3px',
                textShadow: '0 3px 18px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.9)'
              }}
            >
              Welcome to
            </div>
            <div 
              style={{ 
                fontFamily: 'var(--font-h)', 
                fontSize: 'clamp(42px, 6.8vw, 78px)', 
                fontWeight: 800, 
                color: '#ffffff', 
                lineHeight: 1.1, 
                letterSpacing: '-0.5px',
                marginTop: '4px',
                textShadow: '0 4px 24px rgba(0,0,0,0.9), 0 2px 6px rgba(0,0,0,0.95)'
              }}
            >
              Priya Impex
            </div>
          </motion.div>

          {/* Subtitle Line Below Frame (Matching Screenshot Style + Detailed) */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ 
              fontSize: 'clamp(16px, 2.1vw, 20px)', 
              color: 'rgba(255, 255, 255, 0.96)', 
              fontWeight: 500,
              lineHeight: 1.6, 
              marginBottom: '32px', 
              maxWidth: '920px', 
              letterSpacing: '0.2px',
              textShadow: '0 2px 14px rgba(0,0,0,0.75)' 
            }}
          >
            Your Trusted Partner for Earthing Solutions and Precision Brass Components with 25+ Years Manufacturing Heritage across 2 Gujarat Units (Rajkot & Jamnagar). Direct Global Export of Certified Electrical Protection & Precision Machined Parts.
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}
          >
            <button 
              className="btn btn-primary" 
              onClick={() => onNavigate ? onNavigate('contact') : null}
              style={{ 
                padding: '14px 30px', 
                fontSize: '15.5px', 
                fontWeight: 700,
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                boxShadow: '0 8px 24px rgba(200, 148, 10, 0.4)',
                borderRadius: '8px'
              }}
            >
              <span>Request Quote</span>
              <ArrowRight size={18} />
            </button>

            <button 
              className="btn-outline" 
              onClick={() => onNavigate ? onNavigate('products') : null}
              style={{ 
                color: '#ffffff', 
                borderColor: 'rgba(255,255,255,0.45)', 
                background: 'rgba(255,255,255,0.12)', 
                backdropFilter: 'blur(8px)',
                padding: '13px 26px', 
                fontSize: '15.5px', 
                fontWeight: 600,
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FileText size={16} color="var(--gold)" />
              <span>Explore Products</span>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
