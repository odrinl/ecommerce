import React, { createContext, useState, useContext } from 'react';

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
