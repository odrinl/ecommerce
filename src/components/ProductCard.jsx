import React from 'react';
import { Link } from 'react-router-dom';
import { useLikeContext } from '../context/LikeContext';

function ProductCard({ product }) {
  const { likedProducts, toggleLike } = useLikeContext();

  return (
    <div className='col-12 col-md-6 col-lg-3 mb-4'>
      <div className='card h-100'>
        <div className='card-body d-flex align-items-center justify-content-center'>
          <i
            className={`bi ${
              likedProducts.includes(product.id) ? 'bi-heart-fill' : 'bi-heart'
            } bi-lg position-absolute top-0 end-0 m-2`}
            onClick={() => toggleLike(product.id)}
          ></i>
          <img
            src={product.image}
            alt={product.title}
            className='card-img-top'
          />
        </div>
        <div className='card-footer d-flex flex-column mt-auto'>
          <Link to={`/product/${product.id}`}>
            <h5 className='card-title'>{product.title}</h5>
          </Link>
          <p className='card-text'>Price: ${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
