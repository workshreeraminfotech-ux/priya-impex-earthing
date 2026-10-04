import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useStoreProducts } from '../utils/useStore';

export default function CategoryWholeSpices({ onSelectProduct }) {
  const prods = useStoreProducts();
  const brassProducts = (Array.isArray(prods) ? prods : [])
    .filter(p => p && (p.category === 'Brass Components' || p.cat === 'Brass Components'))
    .slice(0, 4);

  return (
    <div className="products-outer ph-cat py-48">
      <div className="container">
        <div className="products-block-2">
          <div className="products-left">
            <div className="section-title left-align">
              <span className="ph-eyebrow">Our Products</span>
              <h2>Brass <span>Components</span></h2>
            </div>
            <div className="text-data" style={{ fontSize: 15, color: 'var(--gray)', marginBottom: 20 }}>
              <p>Precision CNC-turned brass cable glands, neutral links, and electrical terminal connectors manufactured with tight tolerances.</p>
            </div>
            <div className="green-link-with-arrow">
              <a href="#products">
                <span>See All</span>
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="products-left-img" style={{ backgroundColor: '#FFFFFF', padding: 12, borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={brassProducts[0]?.image} alt="Brass Components Category" loading="lazy" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
          </div>

          <div className="products-right">
            <div className="products-4-grid">
              {brassProducts.map((item, idx) => (
                <div key={idx} className="prodcuts-box" onClick={() => onSelectProduct ? onSelectProduct(item) : null}>
                  <div className="img" style={{ backgroundColor: '#FFFFFF', padding: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={item.image} alt={item.title} loading="lazy" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                  <div className="prodcuts-box-sub">
                    <h4>{item.title}</h4>
                    <p>{item.desc || item.description}</p>
                  </div>
                  <div className="arrow-link-black">
                    <a href="#contact-us" onClick={(e) => { e.preventDefault(); if (onSelectProduct) onSelectProduct(item); }}>
                      <span>Quick View</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
