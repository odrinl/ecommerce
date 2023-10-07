import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLikeContext } from '../context/LikeContext';
import ProductCard from './ProductCard';
import useFetch from '../hooks/useFetch';

function Favorites() {
  const navigate = useNavigate();
  const { likedProducts } = useLikeContext();

  const { data, isLoading, error } = useFetch(
    'https://fakestoreapi.com/products'
  );

  return (
    <div>
      {isLoading && <div>Products are loading...</div>}
      {error && (
        <div>Sorry, products can't be loaded. Server doesn't respond.</div>
      )}
      {data && (
        <div className='container justify-content-center'>
          <button
            className='btn btn-outline-secondary mt-3'
            onClick={() => navigate(-1)}
          >
            &lt;&lt; &nbsp;Go Back
          </button>
          <div className='container text-center'>
            <br />
            <div className='row align-content-center'>
              {data
                .filter((product) => likedProducts.includes(product.id))
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
