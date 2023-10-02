import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLikeContext } from '../context/LikeContext';

function Favorites() {
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

    if (likedProducts.length > 0) {
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
        <div>
          <h1>Liked Products</h1>
          <ul>
            {likesData.map((product) => (
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
        </div>
      )}
    </div>
  );
}

export default Favorites;
