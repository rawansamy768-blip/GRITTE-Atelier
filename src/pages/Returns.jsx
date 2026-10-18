 import React from 'react';
import { CheckCircle2, MapPin, RotateCcw } from 'lucide-react';

export default function Returns() {
  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 2rem 6rem 2rem' }}>
      
      {/* Header Title */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280', display: 'block', marginBottom: '0.6rem' }}>
          SHIPPING OPTIONS & TIMES
        </span>
        <h1 className="font-condensed" style={{ fontSize: '3.2rem', color: '#111827', lineHeight: 1.1 }}>
          WE OFFER THREE DIFFERENT<br />DELIVERY OPTIONS.
        </h1>
      </div>

      {/* Side by Side Returns Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'stretch' }}>
        
        {/* Left Card: In-Store Returns */}
        <div style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <CheckCircle2 size={22} fill="#111827" color="#ffffff" />
              <h2 className="font-condensed" style={{ fontSize: '1.8rem', color: '#111827' }}>
                In-store returns
              </h2>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Returns made to all Yours Clothing stores will be FREE for up to 6 items. Additional items will then be charged at $1 per item which will be deducted from your refund.
            </p>

            <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '2rem' }}>
              Simply supply your dispatch email and we will provide an exchange, gift card or refund.
            </p>

            <button style={{ background: '#ffffff', border: '1px solid #111827', padding: '0.75rem 1.6rem', borderRadius: '20px', fontWeight: 700, fontSize: '0.78rem', color: '#111827', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} />
              <span>Find Nearest Store</span>
            </button>
          </div>

          <div style={{ borderRadius: '6px', overflow: 'hidden', marginTop: '2.5rem', height: '220px' }}>
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800" 
              alt="In-store service" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </div>

        {/* Right Card: Online Returns */}
        <div style={{ background: '#ffffff', border: '1px solid #d1d5db', borderRadius: '8px', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <CheckCircle2 size={22} fill="#111827" color="#ffffff" />
              <h2 className="font-condensed" style={{ fontSize: '1.8rem', color: '#111827' }}>
                Online returns
              </h2>
            </div>

            {/* Yellow Highlighted Pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.8rem' }}>
              <div style={{ background: '#fef9c3', border: '1px solid #fef08a', color: '#854d0e', padding: '0.65rem 1.2rem', borderRadius: '30px', fontSize: '0.82rem', fontWeight: 600 }}>
                Standard returns policy is 21 days for store & online orders.
              </div>
              <div style={{ background: '#fef9c3', border: '1px solid #fef08a', color: '#854d0e', padding: '0.65rem 1.2rem', borderRadius: '30px', fontSize: '0.82rem', fontWeight: 600 }}>
                Return may be rejected if items fail to be in a resalable condition.
              </div>
              <div style={{ background: '#fef9c3', border: '1px solid #fef08a', color: '#854d0e', padding: '0.65rem 1.2rem', borderRadius: '30px', fontSize: '0.82rem', fontWeight: 600 }}>
                Items must be in their original condition and include all tags.
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              You don't have to pay anything when you drop your parcel off, however all UK return parcels are subject to a $1.99 return fee for up to 6 items, additional items will then be charged at $1 per item which will be deducted from your refund.
            </p>

            <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#374151', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
              <li>In-store returns are free.</li>
              <li>Your invoice is attached to your order dispatch email.</li>
              <li>You will receive email confirmation of your return.</li>
              <li>Funds will be issued via payment method used for purchase within 3-5 working days.</li>
            </ul>
          </div>

          <button style={{ width: '100%', background: '#111827', color: '#ffffff', border: 'none', padding: '0.9rem', borderRadius: '25px', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <RotateCcw size={16} />
            <span>CREATE A RETURN</span>
          </button>
        </div>

      </div>

    </div>
  );
}