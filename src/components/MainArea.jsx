import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsList from './ProductsList';
import ProductItem from './ProductItem';
import Favorites from './Favorites';
import FetchError from '../errorHandling/FetchError';
import NotFound from '../errorHandling/NotFound';
import AllProducts from './AllProducts';

function MainArea() {
  return (
    <div className='main-area'>
      <Routes>
        <Route path='/' element={<AllProducts />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='category/:category' element={<ProductsList />} />
        <Route path='/product/:id' element={<ProductItem />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/fetch-error' element={<FetchError />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainArea;
