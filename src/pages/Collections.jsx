   import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import cart1 from '../assets/cart1.jpg';
import cart2 from '../assets/cart2.jpg';
import cart3 from '../assets/cart3.jpg';
import cart4 from '../assets/cart4.jpg';
import cart5 from '../assets/cart5.jpg';
import cart7 from '../assets/cart7.jpg';

export default function Collections() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const collectionsData = [
    { id: 1, title: "CLASSIC LEATHER TOTE", price: "$450.00", rating: "4.5", category: "EVENING", image: cart1, link: "/product/1" },
    { id: 2, title: "SCULPTURAL HANDBAG", price: "$620.00", rating: "4.8", category: "EVENING", image: cart2, link: "/product/2" },
    { id: 3, title: "LEATHER JACKET", price: "$420.00", rating: "4.8", category: "OUTERWEAR", image: cart3, link: "/product/3" },
    { id: 4, title: "LEATHER BIKER JACKET", price: "$420.00", rating: "4.8", category: "OUTERWEAR", image: cart4, link: "/product/4" },
    { id: 5, title: "LEATHER TOTE", price: "$450.00", rating: "4.5", category: "EVENING", image: cart5, link: "/product/5" },
    { id: 6, title: "ATELIER WRAP COAT", price: "$510.00", rating: "4.9", category: "MONOCHROME", image: cart7, link: "/product/6" }
  ];

  const filteredCollections = activeFilter === 'ALL' 
    ? collectionsData 
    : collectionsData.filter(item => item.category === activeFilter);

  return (
    <div style={{ maxWidth: '1360px', margin: '2rem auto', padding: '0 1.5rem' }}>
      
      {/* Filter Navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
        {['ALL', 'FALL-WINTER', 'MONOCHROME', 'EVENING', 'OUTERWEAR'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              background: activeFilter === filter ? '#000000' : 'transparent',
              color: activeFilter === filter ? '#ffffff' : '#666666',
              border: 'none',
              padding: '0.4rem 1.1rem',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              cursor: 'pointer',
              borderRadius: '20px',
              transition: 'all 0.2s',
              textTransform: 'uppercase'
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Small Balanced Grid Layout */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
        gap: '1.25rem' 
      }}>
        {filteredCollections.map((item) => (
          <Link 
            key={item.id} 
            to={item.link} 
            style={{ textDecoration: 'none', color: '#111111' }}
          >
            <div 
              style={{
                background: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid #e0dfdc',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Product Card Image Container */}
              <div style={{ 
                position: 'relative', 
                width: '100%',
                aspectRatio: '1 / 1',
                background: '#f8f7f5',
                overflow: 'hidden'
              }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
                
                {/* Badge Overlay */}
                <span style={{ 
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: 'rgba(255,255,255,0.95)', 
                  color: '#111111', 
                  fontSize: '0.55rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.1em', 
                  padding: '0.25rem 0.55rem', 
                  borderRadius: '12px',
                  textTransform: 'uppercase'
                }}>
                  EDITORIAL LEATHER
                </span>
              </div>

              {/* Product Info Below Image */}
              <div style={{ padding: '0.75rem 0.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <h3 style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', margin: 0, textTransform: 'uppercase', color: '#111111' }}>
                    {item.title}
                  </h3>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#111111', display: 'flex', alignItems: 'center', gap: '2px' }}>
                    ★ {item.rating}
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#111111' }}>
                  {item.price}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}