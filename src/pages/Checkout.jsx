import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Lock, CreditCard } from 'lucide-react';

export default function Checkout({ cart = [], onClearCart }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const shipping = cart.length > 0 ? 15.00 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onClearCart) onClearCart();
  };

  if (isSubmitted) {
    return (
      <div style={{ maxWidth: '550px', margin: '4rem auto', padding: '2.5rem', textAlign: 'center', background: '#ffffff', borderRadius: '8px', border: '1px solid #e0dfdc' }}>
        <CheckCircle size={60} color="#10b981" style={{ margin: '0 auto 1.2rem auto' }} />
        <h1 className="font-condensed" style={{ fontSize: '2.2rem', margin: '0 0 0.5rem 0' }}>ORDER CONFIRMED</h1>
        <p style={{ color: '#666666', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          Thank you for your order. We are processing it and will dispatch it shortly.
        </p>
        <Link to="/" style={{ display: 'inline-block', background: '#000000', color: '#ffffff', padding: '0.8rem 2rem', borderRadius: '4px', textDecoration: 'none', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em' }}>
          CONTINUE SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '3rem auto', padding: '0 1.5rem' }}>
      <h1 className="font-condensed" style={{ fontSize: '2.6rem', marginBottom: '2rem' }}>CHECKOUT</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '3rem', alignItems: 'start' }}>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e0dfdc' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Lock size={16} /> ACCOUNT & SECURITY
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, marginBottom: '0.3rem' }}>EMAIL ADDRESS</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid #d0ceca' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, marginBottom: '0.3rem' }}>PASSWORD</label>
                <input required type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid #d0ceca' }} />
              </div>
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e0dfdc' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', fontWeight: 700 }}>SHIPPING DETAILS</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, marginBottom: '0.3rem' }}>FULL NAME</label>
                <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid #d0ceca' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, marginBottom: '0.3rem' }}>STREET ADDRESS</label>
                <input required type="text" name="address" value={formData.address} onChange={handleChange} style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid #d0ceca' }} />
              </div>
            </div>
          </div>

          <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e0dfdc' }}>
            <h3 style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CreditCard size={16} /> PAYMENT INFORMATION
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, marginBottom: '0.3rem' }}>CARD NUMBER</label>
                <input required type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="4532 •••• •••• 8890" style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid #d0ceca' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, marginBottom: '0.3rem' }}>EXPIRY DATE</label>
                  <input required type="text" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid #d0ceca' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, marginBottom: '0.3rem' }}>CVV</label>
                  <input required type="password" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="123" style={{ width: '100%', padding: '0.65rem', borderRadius: '4px', border: '1px solid #d0ceca' }} />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" style={{ background: '#000000', color: '#ffffff', border: 'none', padding: '1.1rem', borderRadius: '4px', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', cursor: 'pointer', textTransform: 'uppercase' }}>
            PLACE ORDER • ${total.toFixed(2)}
          </button>
        </form>

        <div style={{ background: '#f8f7f5', padding: '1.5rem', borderRadius: '8px', border: '1px solid #e0dfdc' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', fontWeight: 700 }}>ORDER SUMMARY</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.2rem', maxHeight: '280px', overflowY: 'auto' }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                  <img src={item.image} alt={item.title} style={{ width: '42px', height: '52px', objectFit: 'cover', borderRadius: '4px' }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>{item.title}</div>
                    <div style={{ fontSize: '0.7rem', color: '#666666' }}>Qty: {item.quantity || 1}</div>
                  </div>
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>${(item.price * (item.quantity || 1)).toFixed(2)}</div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #e0dfdc', paddingTop: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Shipping</span><span>${shipping.toFixed(2)}</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1rem', borderTop: '1px solid #e0dfdc', paddingTop: '0.6rem', marginTop: '0.4rem' }}>
              <span>Total</span><span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}