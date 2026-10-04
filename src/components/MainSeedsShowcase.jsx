import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useStoreProducts } from '../utils/useStore';
import { PRODUCT_CATEGORIES } from '../data/products';

export default function MainSeedsShowcase({ onOpenQuote, onSelectProduct, onNavigate }) {
  const storeProds = useStoreProducts();
  const allProducts = Array.isArray(storeProds) ? storeProds : [];

  // 1st product from each of the 8 product categories
  const categories = PRODUCT_CATEGORIES.filter(c => c !== 'All');
  const firstProductOfEachCategory = categories.map(cat => {
    return allProducts.find(p => p && (p.category === cat || p.cat === cat));
  }).filter(Boolean);

  const displayProducts = firstProductOfEachCategory.length > 0 ? firstProductOfEachCategory : allProducts;

  // Duplicate 4x to guarantee continuous infinite smooth scrolling marquee across all screen sizes
  const marqueeProducts = displayProducts.length > 0 ? [...displayProducts, ...displayProducts, ...displayProducts, ...displayProducts] : [];

  return (
    <section 
      className="main-seeds-showcase-section" 
      style={{ 
        background: '#ffffff', 
        color: 'var(--navy)',
        padding: '68px 0 72px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #f0f4f8',
        borderTop: '1px solid #f0f4f8'
      }}
    >
      <div className="container">
        
        {/* Centered Header Section */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
          
          {/* Eyebrow Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(200, 148, 10, 0.14)', border: '1px solid rgba(200, 148, 10, 0.45)', padding: '6px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: 800, color: '#A37505', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '14px', boxShadow: '0 2px 10px rgba(200, 148, 10, 0.08)' }}>
            <Sparkles size={14} color="#C8940A" />
            <span>FLAGSHIP EARTHING & BRASS RANGE • 100% TESTED & CERTIFIED</span>
          </div>

          {/* Centered Main Title */}
          <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(28px, 4.2vw, 42px)', fontWeight: 900, color: 'var(--navy)', lineHeight: 1.2, margin: '0 0 14px' }}>
            Our Flagship Products — <span style={{ color: 'var(--gold)' }}>Precision Earthing & Brass</span>
          </h2>

          {/* Centered Subtitle */}
          <p style={{ fontSize: '15.5px', color: '#57534E', lineHeight: 1.6, margin: '0 auto', maxWidth: '640px' }}>
            Manufactured in-house with 99.9% electrolytic copper, high-tensile brass alloys, and tight CNC tolerances for global infrastructure, utilities, and EPC projects.
          </p>
        </div>

      </div>

      {/* Continuous Hardware-Accelerated Infinite Marquee Scroller */}
      <div className="seeds-marquee-wrapper">
        <div className="seeds-marquee-track">
          {marqueeProducts.map((item, idx) => (
            <div
              key={`${item.id || 'prod'}-${idx}`}
              className="seeds-marquee-card"
              onClick={() => onSelectProduct ? onSelectProduct(item) : null}
              style={{ cursor: 'pointer' }}
            >
              {/* Product Image Box */}
              <div
                style={{
                  height: '220px',
                  background: 'radial-gradient(circle, #FFFFFF 50%, #F9F7F2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  position: 'relative',
                  borderBottom: '1px solid #F0E8D9'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    maxWidth: '88%',
                    maxHeight: '88%',
                    objectFit: 'contain',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              {/* Product Info Body */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                
                {/* Category Pill Tag */}
                <span style={{
                  alignSelf: 'flex-start',
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#92400E',
                  backgroundColor: '#FEF3C7',
                  border: '1px solid #FDE68A',
                  padding: '3px 9px',
                  borderRadius: '100px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '10px'
                }}>
                  {item.category || item.cat}
                </span>

                <h3 
                  style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy)', marginBottom: '8px', lineHeight: 1.3 }}
                >
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '13.5px',
                  color: '#6B7280',
                  lineHeight: 1.55,
                  marginBottom: '18px',
                  fontWeight: 500,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  minHeight: '42px',
                  maxHeight: '42px'
                }}>
                  {item.description || item.desc}
                </p>

                {/* Action */}
                <div style={{ marginTop: 'auto' }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenQuote) onOpenQuote(item.title);
                    }}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '11px 16px', fontSize: '13.5px', fontWeight: 700, justifyContent: 'center', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <span>Request Quote</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
