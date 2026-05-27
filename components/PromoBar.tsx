'use client';
import { Phone } from 'lucide-react';

export default function PromoBar() {
  return (
    <div style={{ background: '#DC2626', padding: '9px 24px', textAlign: 'center' }}>
      <p style={{ margin: 0, fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: '0.08em', color: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        Affordable Prices · Honest Mechanics · Tires &amp; Auto Care Specialists — Woodland, CA
        <span style={{ opacity: 0.5 }}>·</span>
        <a href="tel:5306656099" style={{ color: '#ffffff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5, fontWeight: 700 }}>
          <Phone size={13} />(530) 665-6099
        </a>
      </p>
    </div>
  );
}
