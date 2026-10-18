 import React, { useState } from 'react';
import { productsData } from '../data/productsData';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal, Sparkles, X } from 'lucide-react';

export default function Catalog({ onAddToCart, onToggleWishlist, wishlist, cart }) {
  const [selectedCat, setSelectedCat] = useState('ALL');
  const [searchFilter, setSearchFilter] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Filter products by category & search query
  let filtered = productsData.filter(p => {
    const matchesCat = selectedCat === 'ALL' || p.category === selectedCat;
    const matchesQuery = p.title.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCat && matchesQuery;
  });

  // Sort products
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2.5rem 3rem 6rem 3rem' }}>
      
      {/* 1. Page Header */}
      <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '2rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
          <Sparkles size={14} />
          <span>FULL ASSORTMENT</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 className="font-condensed" style={{ fontSize: '3.6rem', lineHeight: 1, letterSpacing: '0.01em', color: '#111827' }}>
              EDITORIAL CATALOG
            </h1>
            <p style={{ color: '#4b5563', fontSize: '0.88rem', marginTop: '0.5rem' }}>
              Explore our complete collection of tailored suits, outerwear, dresses, and fine knitwear.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Filter Tabs & Search Bar Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        
        {/* Category Tabs */}
        <div style={{ display: 'flex', gap: '0.4rem', background: '#f3f4f6', padding: '0.3rem', borderRadius: '30px' }}>
          {['ALL', 'JACKETS', 'DRESSES', 'KNITWEAR', 'ACCESSORIES'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              style={{
                background: selectedCat === cat ? '#111827' : 'transparent',
                color: selectedCat === cat ? '#ffffff' : '#4b5563',
                border: 'none',
                padding: '0.45rem 1.1rem',
                borderRadius: '20px',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div style={{ position: 'relative', minWidth: '260px' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} />
          <input 
            type="text" 
            placeholder="Search catalog..." 
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '0.55rem 2.2rem 0.55rem 2.2rem', 
              border: '1px solid #d1d5db', 
              borderRadius: '20px', 
              fontSize: '0.8rem', 
              outline: 'none',
              background: '#ffffff',
              color: '#111827'
            }}
          />
          {searchFilter && (
            <button 
              onClick={() => setSearchFilter('')}
              style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280' }}
            >
              <X size={14} />
            </button>
          )}
        </div>

      </div>

      {/* 3. Sub-bar: Products Count & Sorting Control */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '0.8rem 0', marginBottom: '2.5rem', fontSize: '0.8rem', color: '#6b7280' }}>
        <div>
          Showing <strong style={{ color: '#111827' }}>{filtered.length}</strong> items
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <SlidersHorizontal size={15} style={{ color: '#111827' }} />
          <span>Sort by:</span>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            style={{ 
              border: 'none', 
              background: 'transparent', 
              fontWeight: 700, 
              color: '#111827', 
              fontSize: '0.8rem', 
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* 4. Products Grid */}
      {filtered.length > 0 ? (
        <div className="products-grid-fixed">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlist.includes(product.id)}
              isInCart={cart.some(c => c.id === product.id)}
            />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#f9fafb', borderRadius: '8px' }}>
          <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '1rem' }}>No products match your search criteria.</p>
          <button 
            onClick={() => { setSelectedCat('ALL'); setSearchFilter(''); }}
            style={{ background: '#111827', color: '#fff', border: 'none', padding: '0.6rem 1.5rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
          >
            CLEAR FILTERS
          </button>
        </div>
      )}

    </div>
  );
}