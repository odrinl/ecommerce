import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

function AllProducts() {
  const {
    data: products,
    loading,
    error,
  } = useFetch('https://fakestoreapi.com/products');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {products && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {' '}
              <img src={product.image} alt={product.title} />
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
