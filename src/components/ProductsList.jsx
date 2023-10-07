import React from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

function ProductsList({ url }) {
  const { category } = useParams();

  let apiUrl;
  if (url === 'all') {
    apiUrl = 'https://fakestoreapi.com/products';
  } else {
    apiUrl = `https://fakestoreapi.com/products/category/${category}`;
  }

  const { data, isLoading, error } = useFetch(apiUrl);

  return (
    <div>
      {isLoading && <div>Products are loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div className='container text-center'>
          <br />
          <div className='row align-content-center'>
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsList;
