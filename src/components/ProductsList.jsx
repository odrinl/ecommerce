import React from 'react';
import useFetch from '../hooks/useFetch';
import useRouting from '../hooks/useRouting';
import { CategoryContext } from '../context/CategoryContext';
import { useParams } from 'react-router-dom';

function ProductsList() {
  const { category } = useParams();
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const { navigateTo } = useRouting();

  return (
    <CategoryContext.Consumer>
      {({ selectedCategory, likedProducts, toggleLike }) => (
        <div>
          <h2>Selected Category: {selectedCategory}</h2>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {data && (
            <ul>
              {data.map((product) => (
                <li key={product.id}>
                  {product.name} - {product.price}
                </li>
              ))}
            </ul>
          )}
          <button onClick={() => navigateTo('/cart')}>Go to Cart</button>
          <ul>
            {likedProducts.map((productId) => (
              <li key={productId}>
                Product ID: {productId}{' '}
                <button onClick={() => toggleLike(productId)}>
                  {likedProducts.includes(productId) ? 'Unlike' : 'Like'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </CategoryContext.Consumer>
  );
}

export default ProductsList;
