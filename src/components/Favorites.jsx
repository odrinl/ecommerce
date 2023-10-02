import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { CategoryContext } from '../context/CategoryContext';
import ProductItem from '../components/ProductItem';

function Favorites() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: favoriteProducts,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  const { toggleLike } = useContext(CategoryContext);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch favorite products');
        }
        const favoriteProduct = await response.json();
        toggleLike(favoriteProduct.id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavoriteProducts();
  }, [id, toggleLike]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>My Favorite Products</h2>
      {!favoriteProducts &&
        favoriteProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Favorites;
