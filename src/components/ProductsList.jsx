import React from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLikeContext } from '../context/LikeContext';

function ProductsList() {
  const { likedProducts, toggleLike } = useLikeContext();
  const { category } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://fakestoreapi.com/products/category/${category}`
  );

  return (
    <div>
      {isLoading && <div>Products are loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <ul>
          {data.map((product) => (
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
              <button>
                <Link to={`/product/${product.id}`}>View Details</Link>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductsList;
