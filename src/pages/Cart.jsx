import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';

export default function Cart({ cart, onUpdateQuantity, onRemoveItem }) {
  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shipping = subtotal > 0 ? 15.00 : 0;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="site-wrapper" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <ShoppingBag size={64} style={{ strokeWidth: 1, color: '#888' }} />
          <h2 className="font-condensed" style={{ fontSize: '2.5rem' }}>YOUR BAG IS EMPTY</h2>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>Discover our latest collections and add your favorite styles to the shopping bag.</p>
          <Link to="/" className="btn-black" style={{ textDecoration: 'none', padding: '1rem 2.5rem', background: '#000', color: '#fff', fontWeight: 'bold', fontSize: '0.75rem', letterSpacing: '0.15em' }}>
            RETURN TO SHOP
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="site-wrapper" style={{ padding: '4rem 2rem' }}>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#111', fontSize: '0.8rem', fontWeight: '700', marginBottom: '2rem', letterSpacing: '0.1em' }}>
        <ArrowLeft size={16} /> CONTINUE SHOPPING
      </Link>

      <h1 className="font-condensed" style={{ fontSize: '3rem', marginBottom: '2.5rem' }}>SHOPPING BAG ({cart.length})</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'start' }}>
        
        {/* Cart Items List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', gap: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1.0px solid #e0dfdc', alignItems: 'center' }}>
              <img src={item.image} alt={item.title} style={{ width: '100px', height: '130px', objectFit: 'cover', borderRadius: '4px' }} />
              
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.75rem', color: '#777', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.category}</p>
                <div style={{ fontSize: '1rem', fontWeight: '700' }}>${item.price.toFixed(2)}</div>
              </div>

              {/* Quantity Controls */}
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', background: '#fff' }}>
                <button 
                  onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}
                  style={{ background: 'none', border: 'none', padding: '0.5rem 0.75rem', cursor: 'pointer', fontWeight: 'bold' }}
                >-</button>
                <span style={{ padding: '0 0.5rem', fontSize: '0.85rem', fontWeight: '600' }}>{item.quantity || 1}</span>
                <button 
                  onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}
                  style={{ background: 'none', border: 'none', padding: '0.5rem 0.75rem', cursor: 'pointer', fontWeight: 'bold' }}
                >+</button>
              </div>

              {/* Remove Item */}
              <button 
                onClick={() => onRemoveItem(item.id)}
                style={{ background: 'none', border: 'none', color: '#e11d48', cursor: 'pointer', padding: '0.5rem' }}
                title="Remove item"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary Box */}
        <div style={{ background: '#f1efeb', padding: '2.5rem', borderRadius: '8px', border: '1px solid #e0dfdc' }}>
          <h2 className="font-condensed" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>ORDER SUMMARY</h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9rem', color: '#555' }}>
            <span>Subtotal</span>
            <span style={{ fontWeight: '700', color: '#111' }}>${subtotal.toFixed(2)}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#555' }}>
            <span>Express Shipping</span>
            <span style={{ fontWeight: '700', color: '#111' }}>${shipping.toFixed(2)}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', fontSize: '1.2rem', fontWeight: '800', borderTop: '1px solid #d0ceca', paddingTop: '1rem' }}>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button 
            onClick={() => alert('Order placed successfully! Thank you for shopping with Gritte.')}
            style={{ width: '100%', background: '#000000', color: '#ffffff', border: 'none', padding: '1rem', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '4px' }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

      </div>
    </div>
  );
}