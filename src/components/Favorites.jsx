import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLikeContext } from '../context/LikeContext';

function Favorites() {
  const navigate = useNavigate();
  const { likedProducts, toggleLike } = useLikeContext();
  const [likesData, setLikesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchLikesData = async () => {
      try {
        const promises = likedProducts.map(async (id) => {
          const response = await fetch(
            `https://fakestoreapi.com/products/${id}`
          );
          const data = await response.json();
          return data;
        });

        const liked = await Promise.all(promises);
        setLikesData(liked);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    if (likedProducts.length >= 0) {
      fetchLikesData();
    } else {
      setIsLoading(false);
    }
  }, [likedProducts]);

  return (
    <div>
      {isLoading && <div>Products are loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {likesData && (
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
              {likesData.map((product) => (
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
        </div>
      )}
    </div>
  );
}

export default Favorites;
