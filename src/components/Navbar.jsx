   import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, User, Heart, ShoppingBag, X, ArrowRight } from 'lucide-react';
import { productsData } from '../data/productsData';

export default function Navbar({ cartCount, wishlistCount }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const searchResults = searchQuery.trim() === '' 
    ? [] 
    : productsData.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSelectProduct = (id) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    navigate(`/product/${id}`);
  };

  return (
    <>
      <header className="header-nav">
        <div className="nav-container">
          <Link to="/" className="brand-logo">GRITTE</Link>

          <ul className="nav-links">
            <li><Link to="/">NEW ARRIVALS</Link></li>
            <li><Link to="/catalog">CATALOG</Link></li>
            <li><Link to="/collections">COLLECTIONS</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
            <li><Link to="/returns">RETURNS</Link></li>
          </ul>

          <div className="nav-actions">
            <button className="icon-btn" aria-label="Search" onClick={() => setIsSearchOpen(true)}>
              <Search size={18} />
            </button>
            <button className="icon-btn" aria-label="Account">
              <User size={18} />
            </button>
            <button className="icon-btn" aria-label="Wishlist">
              <Heart size={18} />
              {wishlistCount > 0 && <span className="badge-count">{wishlistCount}</span>}
            </button>
            <Link to="/cart" className="icon-btn" aria-label="Cart">
              <ShoppingBag size={18} />
              {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </header>

      {/* Styled Professional Search Modal Overlay */}
      {isSearchOpen && (
        <div 
          style={{ 
            position: 'fixed', 
            inset: 0, 
            background: 'rgba(0, 0, 0, 0.6)', 
            backdropFilter: 'blur(6px)', 
            zIndex: 1000, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'flex-start',
            paddingTop: '5vh'
          }} 
          onClick={() => setIsSearchOpen(false)}
        >
          <div 
            style={{ 
              background: '#ffffff', 
              width: '90%', 
              maxWidth: '750px', 
              borderRadius: '12px', 
              padding: '2.5rem', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
              position: 'relative'
            }} 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Search size={20} color="#111827" />
                <span className="font-condensed" style={{ fontSize: '1.4rem', letterSpacing: '0.05em', color: '#111827' }}>
                  SEARCH ATELIER
                </span>
              </div>
              <button 
                onClick={() => setIsSearchOpen(false)} 
                style={{ background: '#f3f4f6', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#111827' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Input Search Field */}
            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <input 
                type="text" 
                placeholder="Search by product name, category or style..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.9rem 1rem 0.9rem 2.8rem',
                  fontSize: '1rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  outline: 'none',
                  fontWeight: 500,
                  background: '#f9fafb',
                  color: '#111827'
                }}
                autoFocus
              />
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            </div>

            {/* Live Search Results Container */}
            {searchQuery.trim() !== '' && (
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.8rem' }}>
                  Matching Results ({searchResults.length})
                </div>

                {searchResults.length > 0 ? (
                  <div style={{ maxHeight: '380px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {searchResults.map((product) => (
                      <div 
                        key={product.id} 
                        onClick={() => handleSelectProduct(product.id)}
                        style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between',
                          alignItems: 'center', 
                          cursor: 'pointer', 
                          padding: '0.8rem 1rem', 
                          borderRadius: '8px', 
                          background: '#f9fafb', 
                          border: '1px solid #eae8e4',
                          transition: 'background 0.2s'
                        }}
                      >
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                          <img src={product.image} alt={product.title} style={{ width: '45px', height: '55px', objectFit: 'cover', borderRadius: '4px' }} />
                          <div>
                            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#111827' }}>{product.title}</div>
                            <div style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', marginTop: '0.1rem' }}>{product.category}</div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#111827' }}>${product.price.toLocaleString()}</span>
                          <ArrowRight size={16} color="#6b7280" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '2rem 0', color: '#6b7280', fontSize: '0.9rem' }}>
                    No products found matching "{searchQuery}". Try searching for another keyword.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}