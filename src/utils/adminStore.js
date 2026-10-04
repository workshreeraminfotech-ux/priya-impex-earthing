// Centralized Data Store — Priya Impex (Earthing Solutions & Brass Parts Direct Exporter)

import { PRODUCTS as INITIAL_PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { BLOGS as INITIAL_BLOGS } from '../data/blogs';

import cert1Logo from '../assets/certificate/apeda.webp';
import cert2Logo from '../assets/certificate/spices board.webp';
import cert3Logo from '../assets/certificate/fssai.webp';
import certExtraLogo from '../assets/certificate/certificate-extra.webp';

const INITIAL_CERTS = [
  { 
    id: 'cert-1',
    name: 'ISO 9001:2015 Certified', 
    code: 'ISO 9001:2015', 
    tag: 'Quality Management Systems for Earthing & Precision Brass Manufacturing',
    logo: cert1Logo
  },
  { 
    id: 'cert-2',
    name: 'CE Certified Compliance', 
    code: 'CE COMPLIANT', 
    tag: 'European Conformity for Electrical & Grounding Hardware',
    logo: cert2Logo
  },
  { 
    id: 'cert-3',
    name: 'RoHS & REACH Compliant', 
    code: 'RoHS / REACH', 
    tag: 'Hazardous Substance Free Certification for Export Brass Alloys',
    logo: cert3Logo
  },
  { 
    id: 'cert-4',
    name: 'Govt. Recognized Export House', 
    code: 'EXPORT HOUSE', 
    tag: 'Ministry of Commerce & Industry, Government of India',
    logo: certExtraLogo
  }
];

// Clean stale admin cache if any
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem('marvex_products');
    localStorage.removeItem('marvex_blogs');
    localStorage.removeItem('marvex_certs');
    sessionStorage.removeItem('marvex_admin_auth');
  } catch (e) {}
}

// --- PRODUCTS STORE ---
export function getProducts() {
  return INITIAL_PRODUCTS || [];
}

export function saveProducts(productsList) {
  return productsList;
}

// --- BLOGS STORE ---
export function getBlogs() {
  return INITIAL_BLOGS || [];
}

export function saveBlogs(blogsList) {
  return blogsList;
}

// --- CERTIFICATES STORE ---
export function getCertificates() {
  return INITIAL_CERTS || [];
}

export function saveCertificates(certsList) {
  return certsList;
}

// --- ENQUIRIES STORE ---
const INITIAL_ENQUIRIES = [
  {
    id: 'enq-101',
    source: 'Product Quote Request',
    name: 'Hans Weber',
    company: 'VoltGrid EPC Solutions GmbH',
    email: 'h.weber@voltgrid.de',
    phone: '+49 171 5550192',
    product: 'Copper Bonded Earthing Rods (254 Micron UL / IEC 62561)',
    quantity: '5,000 Pcs (1x20ft FCL)',
    destinationPort: 'Hamburg Port, Germany',
    notes: 'Please quote CIF Hamburg rates with Material Test Certificates (MTC) & IEC test compliance reports.',
    status: 'New',
    date: 'Aug 08, 2026 10:15 AM'
  },
  {
    id: 'enq-102',
    source: 'Contact Us Form',
    name: 'Tariq Al-Mansoor',
    company: 'Gulf Electromechanical Trading LLC',
    email: 'tariq@gulfelectro.ae',
    phone: '+971 50 1234567',
    product: 'Brass Cable Glands & Neutral Links',
    quantity: '50,000 Pcs (Assorted Sizes)',
    destinationPort: 'Jebel Ali Port, Dubai',
    notes: 'Urgent container requirement for ongoing power distribution substation project.',
    status: 'New',
    date: 'Aug 07, 2026 04:30 PM'
  }
];

let memoryEnquiries = null;

export function getEnquiries() {
  if (memoryEnquiries && Array.isArray(memoryEnquiries) && memoryEnquiries.length > 0) {
    return memoryEnquiries;
  }
  try {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('marvex_enquiries');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          memoryEnquiries = parsed;
          return parsed;
        }
      }
    }
  } catch (e) {}
  return INITIAL_ENQUIRIES;
}

export function saveEnquiries(enquiriesList) {
  memoryEnquiries = enquiriesList;
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('marvex_enquiries', JSON.stringify(enquiriesList));
    }
  } catch (e) {}
}

export async function addEnquiry(enquiryData) {
  const list = getEnquiries();
  const newEnquiry = {
    id: `enq-${Date.now()}`,
    source: enquiryData.source || 'Website Form',
    name: enquiryData.name || 'Anonymous Buyer',
    company: enquiryData.company || 'Private Buyer',
    email: enquiryData.email || 'N/A',
    phone: enquiryData.phone || 'N/A',
    product: enquiryData.product || enquiryData.title || 'General Earthing & Brass Inquiry',
    quantity: enquiryData.quantity || 'N/A',
    destinationPort: enquiryData.destinationPort || 'Overseas Port',
    notes: enquiryData.notes || enquiryData.message || 'Product quote request submitted.',
    status: 'New',
    date: new Date().toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })
  };
  const updated = [newEnquiry, ...list];
  saveEnquiries(updated);

  // Forward form details directly to priyaimpex.export@gmail.com
  try {
    const emailPayload = {
      _subject: `New Earthing & Brass Export Inquiry from ${newEnquiry.name} (${newEnquiry.company}) - Priya Impex`,
      _template: 'table',
      _captcha: 'false',
      'Form Source': newEnquiry.source,
      'Buyer Name': newEnquiry.name,
      'Company Name': newEnquiry.company,
      'Buyer Email': newEnquiry.email,
      'Phone / WhatsApp': newEnquiry.phone,
      'Product / Category': newEnquiry.product,
      'Quantity Required': newEnquiry.quantity,
      'Destination Sea Port': newEnquiry.destinationPort,
      'Message / Inquiry Details': newEnquiry.notes,
      'Submission Timestamp': newEnquiry.date
    };

    await fetch('https://formsubmit.co/ajax/priyaimpex.exports@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });
  } catch (err) {
    console.warn('Email dispatch warning:', err);
  }

  return updated;
}
