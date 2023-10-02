import React, { createContext, useState, useContext, useEffect } from 'react';

export const Context = createContext();

export const useLikeContext = () => {
  return useContext(Context);
};

export const ContextProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  // Function to toggle liked products
  const toggleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  // Load liked products from localStorage on initial render
  useEffect(() => {
    const storedLikedProducts = localStorage.getItem('likedProducts');
    if (storedLikedProducts) {
      setLikedProducts(JSON.parse(storedLikedProducts));
    }
  }, []);

  // Update localStorage when likedProducts state changes
  useEffect(() => {
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
  }, [likedProducts]);

  return (
    <Context.Provider
      value={{
        likedProducts,
        toggleLike,
      }}
    >
      {children}
    </Context.Provider>
  );
};
