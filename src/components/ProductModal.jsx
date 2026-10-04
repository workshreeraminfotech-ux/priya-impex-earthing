import React from 'react';
import { X, Send } from 'lucide-react';

export default function ProductModal({ product, onClose, onOpenQuote }) {
  if (!product) return null;

  return (
    <div 
      className="product-modal-backdrop" 
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(11, 34, 64, 0.72)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        className="product-popup-card" 
        onClick={(e) => e.stopPropagation()} 
        style={{ 
          position: 'relative', 
          maxWidth: '820px', 
          width: '100%', 
          maxHeight: '92vh', 
          overflowY: 'auto',
          borderRadius: '32px',
          padding: '48px 48px',
          background: '#FFFFFF',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.35)',
          display: 'grid',
          gridTemplateColumns: 'minmax(240px, 320px) 1fr',
          alignItems: 'center',
          gap: '44px'
        }}
      >
        {/* Dark Circular Close Button in Top Right */}
        <button 
          onClick={onClose} 
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            zIndex: 20,
            background: '#0B2240',
            border: 'none',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#FFFFFF',
            transition: 'transform 0.2s ease, background 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.background = '#06162C';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = '#0B2240';
          }}
        >
          <X size={18} strokeWidth={2.5} />
        </button>

        {/* Left Side: Product Image (Transparent on White Card) */}
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          minHeight: '260px'
        }}>
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ 
              width: '100%',
              maxWidth: '300px',
              maxHeight: '280px', 
              objectFit: 'contain'
            }} 
          />
        </div>

        {/* Right Side: Category, Title, Description, Pill Button */}
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center'
        }}>
          
          {/* Category Outlined Pill Badge */}
          <div style={{ marginBottom: '14px' }}>
            <span style={{ 
              fontSize: '11.5px', 
              fontWeight: 800, 
              textTransform: 'uppercase', 
              letterSpacing: '1px', 
              color: '#A37505', 
              background: '#FFFDF9', 
              border: '1.5px solid #C8940A', 
              padding: '4px 18px', 
              borderRadius: '100px',
              display: 'inline-block'
            }}>
              {product.category || product.cat}
            </span>
          </div>

          {/* Product Title */}
          <h2 style={{ 
            fontFamily: 'var(--font-h, Outfit, sans-serif)', 
            fontSize: '26px', 
            fontWeight: 900, 
            marginBottom: '14px', 
            color: '#0B2240',
            lineHeight: 1.25
          }}>
            {product.title}
          </h2>

          {/* Product Description */}
          <p style={{ 
            fontSize: '15px', 
            color: '#4B5563', 
            marginBottom: '28px', 
            lineHeight: 1.65,
            fontWeight: 400 
          }}>
            {product.description || product.desc}
          </p>

          {/* Request Export Quote Pill Button */}
          <div>
            <button
              onClick={() => {
                onClose();
                if (onOpenQuote) onOpenQuote(product.title);
              }}
              style={{ 
                background: '#C8940A',
                color: '#0B2240',
                border: 'none',
                borderRadius: '100px',
                padding: '13px 28px',
                fontSize: '15px',
                fontWeight: 800,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(200, 148, 10, 0.3)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(200, 148, 10, 0.45)';
                e.currentTarget.style.background = '#D49F14';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(200, 148, 10, 0.3)';
                e.currentTarget.style.background = '#C8940A';
              }}
            >
              <Send size={16} strokeWidth={2.5} style={{ transform: 'rotate(0deg)' }} />
              <span>Request Export Quote</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
