import React, { useState, useRef } from 'react';
import { 
  Menu, X, ArrowRight, MapPin, Mail, Phone, Download, 
  ChevronDown, Sparkles, ShieldCheck, Zap, Cpu, Settings, 
  Wrench, Layers, Link2, ChevronRight 
} from 'lucide-react';
import logoImg from '../assets/logo.png';

export const PRODUCT_CATEGORIES_MENU = [
  { 
    name: 'Cable Management', 
    icon: Zap, 
    desc: 'Brass Cable Glands, Locknuts & Adaptors' 
  },
  { 
    name: 'Earthing Accessories', 
    icon: ShieldCheck, 
    desc: 'Copper Rods, Electrodes, Clamps & Pit Covers' 
  },
  { 
    name: 'Lugs & Connectors', 
    icon: Link2, 
    desc: 'Copper Lugs, Split Bolts & Bi-Metallic Connectors' 
  },
  { 
    name: 'Switchboard Components', 
    icon: Cpu, 
    desc: 'Brass Neutral Links & Earth Terminal Bars' 
  },
  { 
    name: 'Electrical Components', 
    icon: Sparkles, 
    desc: 'Turned Pins, Sockets, Terminals & Meter Parts' 
  },
  { 
    name: 'Fixings & Fasteners', 
    icon: Wrench, 
    desc: 'Brass Anchors, Inserts, Bolts, Screws & Nuts' 
  },
  { 
    name: 'Channel Strut Accessories', 
    icon: Layers, 
    desc: 'Channel Spring Nuts, Pipe Clamps & Brackets' 
  },
  { 
    name: 'Custom Made Products', 
    icon: Settings, 
    desc: 'Custom OEM CNC Machining to Client Drawings' 
  }
];

export default function Navbar({ activePage, onNavigate, onOpenBrochure }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const handleNav = (id, category = 'All') => {
    setDropdownOpen(false);
    setMobileOpen(false);
    if (onNavigate) onNavigate(id, category);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const heroEl = document.getElementById('home') || document.querySelector('.hero-redesign-section') || document.querySelector('.hero-section') || document.querySelector('.jrp-hero');
      if (heroEl && id === 'home') {
        heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    handleNav('home');
  };

  const handleDownloadBrochure = (e) => {
    if (e) e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Priya%20Impex%20brochure.pdf';
    link.download = 'Priya_Impex_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="jrp-header">
        <div className="container">
          <div className="jrp-header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
            {/* Logo */}
            <a href="#" onClick={handleLogoClick} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', cursor: 'pointer' }} title="Priya Impex — Go to Home / Hero">
              <img 
                src={logoImg} 
                alt="Priya Impex" 
                className="jrp-header-logo-img" 
                style={{ 
                  height: '58px', 
                  width: 'auto', 
                  objectFit: 'contain',
                  filter: 'contrast(1.08) drop-shadow(0 2px 8px rgba(0,0,0,0.06))',
                  display: 'block'
                }} 
              />
            </a>

            {/* Desktop Navigation Menu */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="d-none-mobile">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNav('home'); }}
                style={{ fontWeight: 700, fontSize: '17px', color: activePage === 'home' ? 'var(--gold)' : 'var(--navy)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                Home
              </a>
              
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNav('about'); }}
                style={{ fontWeight: 700, fontSize: '17px', color: activePage === 'about' ? 'var(--gold)' : 'var(--navy)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                About Us
              </a>

              {/* Products Dropdown Nav Item with Hover Menu */}
              <div 
                style={{ position: 'relative' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleNav('products', 'All'); }}
                  style={{ 
                    fontWeight: 700, 
                    fontSize: '17px', 
                    color: activePage === 'products' ? 'var(--gold)' : 'var(--navy)', 
                    textDecoration: 'none', 
                    transition: 'color 0.2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '8px 0'
                  }}
                >
                  <span>Products</span>
                  <ChevronDown size={15} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', color: dropdownOpen ? 'var(--gold)' : 'inherit' }} />
                </a>

                {/* Dropdown Card */}
                {dropdownOpen && (
                  <div 
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '640px',
                      maxWidth: '90vw',
                      paddingTop: '10px',
                      zIndex: 99999
                    }}
                  >
                    <div 
                      style={{
                        width: '100%',
                        boxSizing: 'border-box',
                        background: '#FFFFFF',
                        borderRadius: '18px',
                        border: '1.5px solid var(--border)',
                        boxShadow: '0 24px 60px rgba(11, 34, 64, 0.2), 0 4px 20px rgba(200, 148, 10, 0.1)',
                        padding: '20px'
                      }}
                    >
                      {/* Dropdown Header */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', marginBottom: '14px', borderBottom: '1px solid #F1F5F9' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Sparkles size={16} color="var(--gold)" />
                          <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--navy)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                            Manufacturing & Export Categories
                          </span>
                        </div>
                        <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 600 }}>
                          2 Gujarat Units • Factory Direct
                        </span>
                      </div>

                      {/* 2-Column Categories Grid */}
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', width: '100%' }}>
                        {PRODUCT_CATEGORIES_MENU.map((cat, idx) => {
                          const IconComp = cat.icon;
                          return (
                            <div
                              key={idx}
                              onClick={() => handleNav('products', cat.name)}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '10px 14px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                border: '1px solid #E2E8F0',
                                background: '#F8FAFC',
                                boxSizing: 'border-box',
                                minWidth: 0
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'var(--gold-pale)';
                                e.currentTarget.style.borderColor = 'var(--gold)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = '#F8FAFC';
                                e.currentTarget.style.borderColor = '#E2E8F0';
                                e.currentTarget.style.transform = 'translateY(0px)';
                              }}
                            >
                              <div 
                                style={{ 
                                  width: '36px', 
                                  height: '36px', 
                                  borderRadius: '10px', 
                                  background: '#0B2240', 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  justifyContent: 'center',
                                  flexShrink: 0
                                }}
                              >
                                <IconComp size={18} color="#F5C542" />
                              </div>

                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.25, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                  {cat.name}
                                </div>
                                <div style={{ fontSize: '11px', color: '#64748B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: '2px' }}>
                                  {cat.desc}
                                </div>
                              </div>

                              <ChevronRight size={15} color="var(--gold)" style={{ flexShrink: 0 }} />
                            </div>
                          );
                        })}
                      </div>

                      {/* Dropdown Footer CTA */}
                      <div 
                        onClick={() => handleNav('products', 'All')}
                        style={{
                          marginTop: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          cursor: 'pointer',
                          background: 'linear-gradient(135deg, #0B2240 0%, #061426 100%)',
                          padding: '12px 18px',
                          borderRadius: '12px',
                          color: '#FFFFFF'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', fontWeight: 700 }}>
                          <Sparkles size={16} color="#F5C542" />
                          <span>View Complete Range (All Products)</span>
                        </div>
                        <ArrowRight size={16} color="#F5C542" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNav('blog'); }}
                style={{ fontWeight: 700, fontSize: '17px', color: activePage === 'blog' ? 'var(--gold)' : 'var(--navy)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                Blogs
              </a>
              
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
                style={{ fontWeight: 700, fontSize: '17px', color: activePage === 'contact' ? 'var(--gold)' : 'var(--navy)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                Contact Us
              </a>
            </nav>

            {/* Actions: CTA + Mobile Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <div className="d-none-mobile">
                <button
                  className="btn-brochure-highlight"
                  onClick={handleDownloadBrochure}
                  title="Download Priya Impex Official Export Brochure"
                >
                  <Download size={17} style={{ color: '#F5C542' }} />
                  <span>Download Brochure</span>
                </button>
              </div>

              <button
                className="mobile-menu-toggle-btn"
                onClick={() => setMobileOpen(true)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--navy)', padding: '6px' }}
                aria-label="Toggle Navigation"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Drawer */}
      {mobileOpen && (
        <>
          <div className="jrp-offcanvas-overlay" onClick={() => setMobileOpen(false)} />
          <div className="jrp-offcanvas">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <img src={logoImg} alt="Priya Impex" style={{ height: '46px', width: 'auto', objectFit: 'contain', filter: 'contrast(1.08)' }} />
              </div>
              <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--navy)' }}>
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('home'); }} style={{ fontWeight: 700, fontSize: '17px', color: 'var(--navy)' }}>Home</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('about'); }} style={{ fontWeight: 700, fontSize: '17px', color: 'var(--navy)' }}>About Us</a>
              
              {/* Expandable Mobile Products Accordion */}
              <div>
                <div 
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: 700, fontSize: '17px', color: 'var(--navy)', cursor: 'pointer', padding: '4px 0' }}
                >
                  <span>Products</span>
                  <ChevronDown size={18} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', color: 'var(--gold)' }} />
                </div>

                {mobileProductsOpen && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '12px', marginTop: '10px', borderLeft: '2px solid var(--gold-light)' }}>
                    <div 
                      onClick={() => handleNav('products', 'All')}
                      style={{ fontSize: '14px', fontWeight: 800, color: 'var(--gold-deep)', cursor: 'pointer', padding: '4px 0' }}
                    >
                      ⚡ View All Products
                    </div>
                    {PRODUCT_CATEGORIES_MENU.map((cat, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleNav('products', cat.name)}
                        style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy)', cursor: 'pointer', padding: '4px 0' }}
                      >
                        {cat.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('blog'); }} style={{ fontWeight: 700, fontSize: '17px', color: 'var(--navy)' }}>Blogs</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('contact'); }} style={{ fontWeight: 700, fontSize: '17px', color: 'var(--navy)' }}>Contact Us</a>
            </div>

            {/* Offcanvas Contact Info */}
            <div style={{ marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '20px' }}>
              <h4 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '12px', color: 'var(--navy)' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: 'var(--gray)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={16} style={{ color: 'var(--gold)' }} />
                  <span>Rajkot, Gujarat-360004, INDIA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} style={{ color: 'var(--gold)' }} />
                  <span>sales@priyaimpexindia.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} style={{ color: 'var(--gold)' }} />
                  <span>+91 9328602931</span>
                </div>
              </div>

              <div style={{ marginTop: '18px' }}>
                <button 
                  className="btn-brochure-highlight" 
                  onClick={handleDownloadBrochure} 
                  style={{ width: '100%', justifyContent: 'center', padding: '12px 18px !important' }}
                >
                  <Download size={18} style={{ color: '#F5C542' }} />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
