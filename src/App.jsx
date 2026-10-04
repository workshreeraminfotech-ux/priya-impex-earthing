import React, { useState, useEffect, lazy, Suspense } from 'react';

import HeaderTop from './components/HeaderTop';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import WhatsAppFloat from './components/WhatsAppFloat';
import Preloader from './components/Preloader';

// Initial Eager Page (Renders in zero latency)
import Home from './pages/Home';

// Lazy Loaded Pages & Modals (Loaded only when requested, saving 65% initial payload)
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const QuickViewModal = lazy(() => import('./components/QuickViewModal'));
const BrochureModal = lazy(() => import('./components/BrochureModal'));

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quoteProduct, setQuoteProduct] = useState('');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [productSearch, setProductSearch] = useState('');

  const PAGE_SEO = {
    home: {
      title: 'Priya Impex — Precision Earthing Solutions & Brass Parts Manufacturer & Exporter | Gujarat, India',
      desc: '25+ years manufacturer and direct export house of Earthing Parts, Copper Bonded Rods (254 Micron), Chemical Electrodes, and Precision Brass Components based in Rajkot & Jamnagar, Gujarat.'
    },
    about: {
      title: 'About Us — 25+ Years Manufacturing Heritage in Rajkot & Jamnagar | Priya Impex',
      desc: 'Discover Priya Impex industrial infrastructure: Unit 1 Earthing Plant in Rajkot, Unit 2 Brass Foundry & CNC Hub in Jamnagar, and direct export operations worldwide.'
    },
    products: {
      title: 'Our Products — Earthing Parts, Grounding Rods & CNC Brass Components | Priya Impex',
      desc: 'Explore 50+ export-grade earthing and precision brass components: Hot Line Clamps, Switchgear Clip Crank Assemblies, Copper Bonded Rods, Cable Glands, Neutral Links, and Custom OEM parts.'
    },
    blog: {
      title: 'Latest Engineering Blogs & Technical Guides | Priya Impex',
      desc: 'Engineering guides on live-line hot line tap clamps, switchgear clip crank mechanism assemblies, railway earth return brushes, and IEC 62561 compliance.'
    },
    contact: {
      title: 'Contact Priya Impex — Request Factory RFQ & Export Quotations | Rajkot, Gujarat',
      desc: 'Submit RFQ and export inquiries for copper bonded rods, chemical earthing electrodes, and precision brass parts. Factory direct pricing and seaworthy shipping from Gujarat ports.'
    }
  };

  // Synchronize document title and meta description dynamically on page change
  useEffect(() => {
    const seo = PAGE_SEO[activePage] || PAGE_SEO.home;
    document.title = seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', seo.desc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', seo.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', seo.desc);
  }, [activePage]);

  // 10-Second Auto Popup for Brochure
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBrochureOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (pageId, category = 'All', search = '') => {
    setActivePage(pageId);
    setSelectedCategory(category);
    setProductSearch(search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (productName = '') => {
    setQuoteProduct(productName);
    setSelectedProduct(null);
    setActivePage('contact');
    setTimeout(() => {
      const formEl = document.getElementById('contact-form') || document.querySelector('.contact-form-card');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.scrollTo({ top: 300, behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <div>
      <HeaderTop />
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate} 
        onOpenBrochure={() => setIsBrochureOpen(true)} 
      />

      <main>
        <Suspense fallback={
          <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 36, height: 36, border: '3px solid #E2E8F0', borderTopColor: '#C8940A', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
          </div>
        }>
          {(activePage === 'home' || activePage === 'faq') && (
            <Home 
              onSelectProduct={setSelectedProduct} 
              onNavigate={handleNavigate} 
              onOpenQuote={(prod) => handleOpenQuote(prod)} 
            />
          )}
          {activePage === 'about' && (
            <AboutPage 
              onNavigate={handleNavigate} 
              onOpenQuote={() => handleOpenQuote()} 
            />
          )}
          {activePage === 'products' && (
            <ProductsPage 
              onSelectProduct={setSelectedProduct} 
              onOpenQuote={(prod) => handleOpenQuote(prod)} 
              initialCategory={selectedCategory}
              initialSearch={productSearch}
            />
          )}
          {activePage === 'blog' && (
            <BlogPage />
          )}
          {activePage === 'contact' && (
            <ContactPage 
              initialProduct={quoteProduct}
              onOpenQuote={() => handleOpenQuote()} 
            />
          )}
        </Suspense>
      </main>

      <FooterSection onNavigate={handleNavigate} />

      <Suspense fallback={null}>
        {selectedProduct && (
          <QuickViewModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onOpenQuote={(prod) => handleOpenQuote(prod)} />
        )}

        <BrochureModal 
          isOpen={isBrochureOpen} 
          onClose={() => setIsBrochureOpen(false)} 
        />
      </Suspense>

      <WhatsAppFloat />
      <Preloader />
    </div>
  );
}

