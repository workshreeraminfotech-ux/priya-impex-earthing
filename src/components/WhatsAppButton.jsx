import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({ text = "Chat with Us", className = "btn-secondary" }) {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=919328602931&text=Hello%20Priya%20Impex,%20I%20am%20interested%20in%20your%20Earthing%20Parts%20and%20Brass%20Components." 
      target="_blank" 
      rel="noopener noreferrer"
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
    >
      <MessageCircle size={18} />
      <span>{text}</span>
    </a>
  );
}
