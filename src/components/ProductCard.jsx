    import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onToggleWishlist, isWishlisted, isInCart }) {
  return (
    <div className="product-card-box">
      {/* Clickable Image Link to Details Page */}
      <Link to={`/product/${product.id}`} className="product-img-wrapper" style={{ display: 'block' }}>
        <img src={product.image} alt={product.title} />
        
        {/* Wishlist Heart Button */}
        <button 
          className={`fav-heart-btn ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault(); // Prevent navigating when clicking wishlist heart
            onToggleWishlist(product.id);
          }}
          aria-label="Wishlist"
        >
          <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
        </button>
      </Link>

      <div className="product-details-content">
        <div>
          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <h3 className="product-title-text" style={{ cursor: 'pointer' }}>{product.title}</h3>
          </Link>
          <p className="product-price-text">${product.price.toLocaleString()}</p>
        </div>

        <button 
          className={`add-cart-btn ${isInCart ? 'in-cart' : ''}`}
          onClick={() => onAddToCart(product)}
        >
          {isInCart ? 'IN BAG (CHECKOUT)' : 'ADD TO CART'}
        </button>
      </div>
    </div>
  );
}