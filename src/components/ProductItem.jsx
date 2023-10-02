import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useLikeContext } from '../context/LikeContext';

function ProductItem() {
  const { likedProducts, toggleLike } = useLikeContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  return (
    <div>
      {isLoading && <div>Product is loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div>
          <button onClick={() => navigate(-1)}>Back</button>
          <i
            className={`bi ${
              likedProducts.includes(data.id) ? 'bi-heart-fill' : 'bi-heart'
            } bi-lg position-absolute top-0 end-0 m-2`}
            onClick={() => toggleLike(data.id)}
          ></i>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <p>Price: {data.price}</p>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
