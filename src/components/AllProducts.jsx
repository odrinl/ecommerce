import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useLikeContext } from '../context/LikeContext';

function AllProducts() {
  const { likedProducts, toggleLike } = useLikeContext();
  const {
    data: products,
    isLoading,
    error,
  } = useFetch('https://fakestoreapi.com/products');

  return (
    <div>
      {isLoading && <div>All products are loading..</div>}
      {error && <div>Error: {error.message}</div>}
      {products && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <i
                className={
                  likedProducts.includes(product.id)
                    ? 'bi bi-heart-fill'
                    : 'bi bi-heart'
                }
                onClick={() => toggleLike(product.id)}
              ></i>
              {/* <img src={product.image} alt={product.title} /> */}
              {product.title} - {product.price}
              <Link to={`/product/${product.id}`}>
                <button>More...</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllProducts;
