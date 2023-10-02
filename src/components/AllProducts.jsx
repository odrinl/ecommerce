import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { useLikeContext } from '../context/LikeContext';

function AllProducts() {
  const { likedProducts, toggleLike } = useLikeContext();
  const { data, isLoading, error } = useFetch(
    'https://fakestoreapi.com/products'
  );

  return (
    <div>
      {isLoading && <div>Products are loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div className='container text-center'>
          <br />
          <div className='row align-content-center'>
            {data.map((product) => (
              <div key={product.id} className='col-12 col-md-6 col-lg-3 mb-4'>
                <div className='card h-100'>
                  <div className='card-body d-flex align-items-center justify-content-center'>
                    <i
                      className={`bi ${
                        likedProducts.includes(product.id)
                          ? 'bi-heart-fill'
                          : 'bi-heart'
                      } bi-lg position-absolute top-0 end-0 m-2`}
                      onClick={() => toggleLike(product.id)}
                    ></i>
                    <img
                      src={product.image}
                      alt={product.title}
                      className='card-img-top'
                    />
                  </div>
                  <div className='card-footer d-flex flex-column mt-auto'>
                    <Link to={`/product/${product.id}`}>
                      <h5 className='card-title'>{product.title}</h5>
                    </Link>
                    <p className='card-text'>Price: ${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AllProducts;
