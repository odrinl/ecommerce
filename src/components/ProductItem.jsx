import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product, likedProducts, toggleLike }) {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button onClick={() => toggleLike(product.id)}>
        {likedProducts.includes(product.id) ? 'Unlike' : 'Like'}
      </button>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductItem;
