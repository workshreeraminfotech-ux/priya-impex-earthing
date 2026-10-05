// Centralized Data Store — Priya Impex (Earthing Solutions & Brass Parts Direct Exporter)

import { PRODUCTS as INITIAL_PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { BLOGS as INITIAL_BLOGS } from '../data/blogs';

import certIsoLogo from '../assets/certificate/ISO 90012015 Certificate.png';
import certNablLogo from '../assets/certificate/NABL Accreditation Certificate.png';
import certIecLogo from '../assets/certificate/IEC — Import Export Code.png';
import certRcmcLogo from '../assets/certificate/RCMC — Registration Cum Membership Certificate.png';
import certIncorpLogo from '../assets/certificate/Certificate of Incorporation from India.png';
import certGstLogo from '../assets/certificate/GST Registration Certificate.png';

const INITIAL_CERTS = [
  { 
    id: 'cert-1',
    name: 'ISO 9001:2015 Quality Management', 
    code: 'ISO 9001:2015', 
    tag: 'Quality Management Systems for Earthing & Precision Brass Manufacturing',
    logo: certIsoLogo
  },
  { 
    id: 'cert-2',
    name: 'NABL Accreditation Certificate', 
    code: 'NABL ACCREDITED', 
    tag: 'National Accreditation Board for Testing and Calibration Laboratories',
    logo: certNablLogo
  },
  { 
    id: 'cert-3',
    name: 'IEC — Import Export Code', 
    code: 'GOVT. RECOGNIZED EXPORTER', 
    tag: 'Directorate General of Foreign Trade (DGFT), Ministry of Commerce & Industry',
    logo: certIecLogo
  },
  { 
    id: 'cert-4',
    name: 'RCMC — Registration Cum Membership', 
    code: 'EEPC / FIEO MEMBER', 
    tag: 'Registration-Cum-Membership Certificate for Global Engineering Exports',
    logo: certRcmcLogo
  },
  { 
    id: 'cert-5',
    name: 'Certificate of Incorporation', 
    code: 'GOVT. OF INDIA', 
    tag: 'Ministry of Corporate Affairs, Registrar of Companies India',
    logo: certIncorpLogo
  },
  { 
    id: 'cert-6',
    name: 'GST Registration Certificate', 
    code: 'GST REGISTERED', 
    tag: 'Goods and Services Tax Compliance, Government of India',
    logo: certGstLogo
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
