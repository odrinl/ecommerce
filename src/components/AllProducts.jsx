import React from 'react';
import useFetch from '../hooks/useFetch';
import useRouting from '../hooks/useRouting';

function AllProducts() {
  const { navigateTo } = useRouting();
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
              <button onClick={() => navigateTo(`/product/${product.id}`)}>
                More...
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AllProducts;
