import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsList from './ProductsList';
import ProductItem from './ProductItem';
import Favorites from './Favorites';
import FetchError from '../errorHandling/FetchError';
import NotFound from '../errorHandling/NotFound';

function MainArea() {
  return (
    <div className='main-area'>
      <Routes>
        <Route path='/products/:category' element={<ProductsList />} />
        <Route
          path='/categories/:categoryId/items/:itemId'
          element={<ProductItem />}
        />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/fetch-error' element={<FetchError />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainArea;
