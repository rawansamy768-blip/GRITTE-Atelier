  import React, { useState } from 'react';
import { productsData } from '../data/productsData';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export default function Home({ onAddToCart, onToggleWishlist, wishlist, cart }) {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [startIndex, setStartIndex] = useState(0);

  const filteredProducts = activeCategory === 'ALL' 
    ? productsData 
    : productsData.filter(p => p.category.toUpperCase() === activeCategory);

  const visibleProducts = filteredProducts.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex + 4 < filteredProducts.length) {
      setStartIndex(startIndex + 4);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex - 4 >= 0) {
      setStartIndex(startIndex - 4);
    } else {
      setStartIndex(Math.max(0, filteredProducts.length - 4));
    }
  };

  return (
    <div style={{ width: '100%' }}>
      
      {/* Container for upper content with nice padding */}
      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* 1. Hero Editorial Section */}
        <section className="hero-editorial">
          <div className="hero-editorial-info">
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', color: '#666', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.8rem', display: 'block' }}>
              CLOTHING FOR POWERFUL WOMEN
            </span>
            <h1 className="hero-editorial-title">
              STRENGTH<br />IN DETAILS<br />& CHARACTER
            </h1>
            <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.6', marginBottom: '1.8rem', maxWidth: '380px' }}>
              Premium fabrics. Precise tailoring. Wardrobe designed to work for you effortlessly.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <Link to="/catalog" style={{ background: '#000000', color: '#ffffff', padding: '0.85rem 1.8rem', textDecoration: 'none', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                VIEW ARRIVALS
              </Link>
              <Link to="/catalog" style={{ background: 'transparent', color: '#000000', border: '1px solid #000000', padding: '0.85rem 1.8rem', textDecoration: 'none', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                ALL COLLECTIONS
              </Link>
            </div>
          </div>

          <div className="hero-editorial-image">
            <img 
              src="src/assets/background2.jpg  " 
              alt="Editorial Models" 
            />
          </div>
        </section>

      </div>

      {/* 2. Black Ticker Strip */}
      <div className="ticker-strip">
        <div className="ticker-content">
          <span><span className="ticker-star">✦</span> NEW COLLECTION</span>
          <span><span className="ticker-star">✦</span> POWER OF STYLE</span>
          <span><span className="ticker-star">✦</span> BE YOURSELF</span>
          <span><span className="ticker-star">✦</span> NEW COLLECTION</span>
          <span><span className="ticker-star">✦</span> POWER OF STYLE</span>
        </div>
      </div>

      <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 2rem' }}>

        {/* 3. Category Cards (4 Columns) */}
        <div className="category-strip-4">
          <div className="category-banner-item">
            <img src=" src/assets/proudut1.jpg" alt="Knitwear" />
            <div className="category-banner-overlay">
              <div>
                <h3 className="font-condensed" style={{ fontSize: '1.5rem' }}>KNITWEAR</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>Softness highlighting your inner strength.</p>
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>DISCOVER &rarr;</span>
            </div>
          </div>

          <div className="category-banner-item">
            <img src=" src/assets/product2.jpg" alt="Coats" />
            <div className="category-banner-overlay">
              <div>
                <h3 className="font-condensed" style={{ fontSize: '1.5rem' }}>COATS</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>Flawless fit and sharp silhouette.</p>
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>DISCOVER &rarr;</span>
            </div>
          </div>

          <div className="category-banner-item">
            <img src=" src/assets/product3.jpg" alt="New Capsule" />
            <div className="category-banner-overlay">
              <div>
                <h3 className="font-condensed" style={{ fontSize: '1.5rem' }}>NEW CAPSULE</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>Minimalism and architectural lines.</p>
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>DISCOVER &rarr;</span>
            </div>
          </div>

          <div className="category-banner-item">
            <img src=" src/assets/product4.jpg" alt="Weekly Look" />
            <div className="category-banner-overlay">
              <div>
                <h3 className="font-condensed" style={{ fontSize: '1.5rem' }}>WEEKLY LOOKS</h3>
                <p style={{ fontSize: '0.75rem', opacity: 0.8 }}>Complete outfits tailored for every day.</p>
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>DISCOVER &rarr;</span>
            </div>
          </div>
        </div>

        {/* 4. Collection Section Carousel */}
        <section className="collection-section">
          <div className="collection-header">
            <h2 className="section-title-sleek">COLLECTION</h2>
            
            <div className="filter-tab-buttons">
              {['ALL', 'JACKETS', 'DRESSES', 'KNITWEAR', 'ACCESSORIES'].map((cat) => (
                <button 
                  key={cat}
                  className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setStartIndex(0);
                  }}
                >
                  {cat}
                </button>
              ))}

              <div style={{ display: 'flex', gap: '0.4rem', marginLeft: '0.8rem' }}>
                <button className="carousel-nav-btn" onClick={handlePrev} aria-label="Previous Slide">
                  <ArrowLeft size={14} />
                </button>
                <button className="carousel-nav-btn" onClick={handleNext} aria-label="Next Slide">
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* 4 Products per Row Fixed Grid */}
          <div className="products-grid-fixed">
            {visibleProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlist.includes(product.id)}
                isInCart={cart.some(item => item.id === product.id)}
              />
            ))}
          </div>
        </section>

      </div>

      {/* 5. Edge-to-Edge Luxurious Editorial Footer */}
      <footer style={{ background: '#0a0a0a', color: '#ffffff', width: '100%', padding: '5rem 4rem 3rem 4rem', marginTop: '4rem' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center', borderBottom: '1px solid #262626', paddingBottom: '4rem', marginBottom: '3rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                <Sparkles size={14} />
                <span>FALL-WINTER 2026 CAMPAIGN</span>
              </div>
              <h2 className="font-condensed" style={{ fontSize: '3.8rem', lineHeight: 1, margin: '0 0 1.2rem 0', color: '#ffffff' }}>
                CREATED FOR ACTION
              </h2>
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: 1.7, marginBottom: '2.2rem', maxWidth: '480px' }}>
                This collection embodies freedom, self-reliance, and strength. Clean lines, tailored silhouettes, and signature black tones designed for the modern rhythm of life.
              </p>
              <Link 
                to="/catalog" 
                style={{ 
                  background: '#ffffff', 
                  color: '#000000', 
                  padding: '0.9rem 2.2rem', 
                  borderRadius: '4px',
                  fontWeight: 700, 
                  fontSize: '0.78rem', 
                  letterSpacing: '0.15em', 
                  textDecoration: 'none', 
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <span>EXPLORE COLLECTION</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ width: '100%', height: '420px', borderRadius: '8px', overflow: 'hidden', background: '#1f1f1f' }}>
              <img 
                src=" src/assets/catr6.jpg  "
                alt="Editorial Campaign" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>

          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#737373', flexWrap: 'wrap', gap: '1rem' }}>
            <div>© 2026 GRITTE ATELIER. ALL RIGHTS RESERVED.</div>
            <div style={{ display: 'flex', gap: '2.5rem' }}>
              <Link to="/catalog" style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.05em' }}>CATALOG</Link>
              <Link to="/collections" style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.05em' }}>COLLECTIONS</Link>
              <Link to="/about" style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.05em' }}>ABOUT</Link>
              <Link to="/returns" style={{ color: '#9ca3af', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.05em' }}>RETURNS</Link>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}