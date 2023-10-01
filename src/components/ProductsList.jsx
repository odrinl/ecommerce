import React from 'react';
import useFetch from '../hooks/useFetch';
import useRouting from '../hooks/useRouting';
import { useParams } from 'react-router-dom';

function ProductsList() {
  const { category } = useParams();
  const { data, loading, error } = useFetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const { navigateTo } = useRouting();

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <ul>
          {data.map((product) => (
            <li key={product.id}>
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

export default ProductsList;