     import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/productsData';
import { Heart, ShoppingBag, Star, Truck, RotateCcw, ShieldCheck } from 'lucide-react';

import imgCart1 from '../assets/cart1.jpg';

export default function ProductDetails({ onAddToCart, onToggleWishlist, wishlist = [], cart = [] }) {
  const { id } = useParams();
  
  const product = productsData.find(p => p.id.toString() === id) || {
    id: Number(id) || 1,
    title: "Essential Oversized Hoodie",
    price: 59.99,
    originalPrice: 89.99,
    discount: "33% OFF",
    rating: 4.8,
    reviewsCount: 128,
    category: "New Arrival",
    image: imgCart1,
    description: "Premium heavyweight cotton hoodie with an oversized fit for ultimate comfort and modern style."
  };

  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Charcoal Gray');
  const [activeTab, setActiveTab] = useState('Details');

  const isWishlisted = wishlist.includes(product.id);
  const isInCart = cart.some(item => item.id === product.id);

  const relatedProducts = productsData.filter(p => p.id !== product.id).slice(0, 4);

  const tabContents = {
    Details: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.6 }}>
          Crafted from high-quality heavyweight cotton, this piece delivers unmatched comfort and durability. The relaxed fit and minimal design make it a versatile staple for any wardrobe.
        </p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', lineHeight: 1.8 }}>
          <li>Oversized architectural silhouette</li>
          <li>Soft & heavyweight premium fabric</li>
          <li>Adjustable drawstring hood</li>
          <li>Ribbed cuffs and hem</li>
          <li>Unisex styling</li>
        </ul>
      </div>
    ),
    Materials: (
      <div>
        <p style={{ lineHeight: 1.6 }}>
          100% Organic Heavyweight Cotton (450 GSM). Sustained finish with garment-dyed wash for soft touch and longevity.
        </p>
      </div>
    ),
    "Size & Fit": (
      <div>
        <p style={{ lineHeight: 1.6 }}>
          Designed for an oversized fit. Take your true size for the intended relaxed look, or size down for a more structured fit. Model is 185cm and wears size M.
        </p>
      </div>
    ),
    "Shipping & Returns": (
      <div>
        <p style={{ lineHeight: 1.6 }}>
          Free express shipping on all orders over $99. Complimentary 30-day hassle-free returns and exchanges globally.
        </p>
      </div>
    )
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '2rem auto', padding: '0 2rem' }}>
      
      {/* Top Main Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3.5rem', alignItems: 'start', marginBottom: '4rem' }}>
        
        {/* Single Main Image */}
        <div style={{ width: '100%', height: '620px', borderRadius: '8px', overflow: 'hidden', background: '#f3f4f6', border: '1px solid #eae8e4' }}>
          <img 
            src={product.image || imgCart1} 
            alt={product.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>

        {/* Product Details Info */}
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: '#6b7280', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>
            {product.category || 'New Arrival'}
          </span>
          
          <h1 className="font-condensed" style={{ fontSize: '2.6rem', lineHeight: 1.05, margin: '0 0 0.8rem 0', color: '#111827' }}>
            {product.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
            <div style={{ display: 'flex', color: '#111827' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#111827" />
              ))}
            </div>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}>
              {product.rating || 4.8} ({product.reviewsCount || 128} reviews)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 700, color: '#111827' }}>
              ${product.price}
            </span>
            {product.originalPrice && (
              <span style={{ fontSize: '1.1rem', color: '#9ca3af', textDecoration: 'line-through' }}>
                ${product.originalPrice}
              </span>
            )}
            {product.discount && (
              <span style={{ background: '#000000', color: '#ffffff', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '2px' }}>
                {product.discount}
              </span>
            )}
          </div>

          <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6, marginBottom: '2rem' }}>
            {product.description}
          </p>

          {/* Color Selection */}
          <div style={{ marginBottom: '1.8rem' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.6rem' }}>
              Color: <span style={{ fontWeight: 400, color: '#6b7280' }}>{selectedColor}</span>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {[
                { name: 'Charcoal Gray', hex: '#374151' },
                { name: 'Heather Light', hex: '#e5e7eb' },
                { name: 'Beige', hex: '#f3f4f6' },
                { name: 'Black', hex: '#111827' }
              ].map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: color.hex,
                    border: selectedColor === color.name ? '2px solid #111827' : '1px solid #d1d5db',
                    outlineOffset: '2px',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>Size: {selectedSize}</span>
              <a href="#sizeguide" style={{ fontSize: '0.75rem', color: '#111827', textDecoration: 'underline', fontWeight: 600 }}>Size Guide</a>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    flex: 1,
                    height: '42px',
                    borderRadius: '4px',
                    border: selectedSize === size ? '2px solid #111827' : '1px solid #d1d5db',
                    background: selectedSize === size ? '#111827' : '#ffffff',
                    color: selectedSize === size ? '#ffffff' : '#111827',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button
              onClick={() => onAddToCart({ ...product, selectedSize, selectedColor })}
              style={{
                flex: 1,
                background: '#111827',
                color: '#ffffff',
                border: 'none',
                padding: '1rem',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem'
              }}
            >
              <ShoppingBag size={18} />
              <span>{isInCart ? 'ADD ANOTHER TO BAG' : 'ADD TO CART'}</span>
            </button>

            <button
              onClick={() => onToggleWishlist(product.id)}
              style={{
                background: '#ffffff',
                border: '1px solid #d1d5db',
                width: '52px',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Heart size={20} color={isWishlisted ? '#e11d48' : '#111827'} fill={isWishlisted ? '#e11d48' : 'none'} />
            </button>
          </div>

          {/* Service Perks */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', borderTop: '1px solid #e5e7eb', paddingTop: '1.2rem', fontSize: '0.72rem', color: '#4b5563' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Truck size={15} /> Free Shipping over $99
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <RotateCcw size={15} /> 30-Day Easy Returns
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={15} /> 100% Secure Checkout
            </div>
          </div>

        </div>

      </div>

      {/* Tabs & Texture Section */}
      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '3rem', marginBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'start' }}>
          
          <div>
            {/* Tab Headers */}
            <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid #e5e7eb', marginBottom: '1.5rem', paddingBottom: '0.8rem' }}>
              {['Details', 'Materials', 'Size & Fit', 'Shipping & Returns'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: activeTab === tab ? '#111827' : '#9ca3af',
                    borderBottom: activeTab === tab ? '2px solid #111827' : 'none',
                    paddingBottom: '0.8rem',
                    marginBottom: '-0.8rem',
                    cursor: 'pointer',
                    letterSpacing: '0.05em'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content Body */}
            <div style={{ fontSize: '0.88rem', color: '#4b5563' }}>
              {tabContents[activeTab]}
            </div>
          </div>

          {/* Detail/Texture Image */}
          <div style={{ width: '100%', height: '320px', borderRadius: '8px', overflow: 'hidden', background: '#eaeaea' }}>
            <img 
              src={product.image || imgCart1} 
              alt="Detail Texture" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

        </div>
      </div>

      {/* You May Also Like Section */}
      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.8rem' }}>
          <h2 className="font-condensed" style={{ fontSize: '1.8rem', margin: 0, letterSpacing: '0.05em' }}>
            YOU MAY ALSO LIKE
          </h2>
          <Link to="/catalog" style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111827', textDecoration: 'none' }}>
            VIEW ALL &rarr;
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
          {relatedProducts.map((relProduct) => (
            <Link 
              key={relProduct.id} 
              to={`/product/${relProduct.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ background: '#ffffff', borderRadius: '6px', overflow: 'hidden', border: '1px solid #eae8e4' }}>
                <div style={{ width: '100%', aspectRatio: '3/4', background: '#eaeaea', overflow: 'hidden' }}>
                  <img 
                    src={relProduct.image || imgCart1} 
                    alt={relProduct.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div style={{ padding: '0.8rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#111827', marginBottom: '0.3rem' }}>
                    {relProduct.title}
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827' }}>
                    ${relProduct.price}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}