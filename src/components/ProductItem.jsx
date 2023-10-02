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
        <div className='container justify-content-center'>
          <button
            className='btn btn-outline-secondary mt-3'
            onClick={() => navigate(-1)}
          >
            &lt;&lt; &nbsp;Go Back
          </button>
          <div className='card m-3'>
            <div className='row g-0 p-3'>
              <div className='col-md-4 d-flex align-items-center'>
                <i
                  className={`bi ${
                    likedProducts.includes(data.id)
                      ? 'bi-heart-fill'
                      : 'bi-heart'
                  } bi-lg position-absolute top-0 end-0 m-2`}
                  onClick={() => toggleLike(data.id)}
                ></i>
                <img
                  src={data.image}
                  className='card-img-top'
                  alt={data.title}
                  style={{ maxWidth: '540px' }}
                />
              </div>
              <div className='info col-md-8 d-flex align-items-center'>
                <div className='card-body d-flex info pl-5'>
                  <div>{`Category: ${data.category}`}</div>
                  <h5 className='card-title'>{data.title}</h5>
                  <p className='card-text description'>{data.description}</p>
                  <p className='card-text'>{`$${data.price}`}</p>
                  <div className='card-footer'>
                    <small className='text-body-secondary'>{`Rating: ${data.rating.rate} from ${data.rating.count}`}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
