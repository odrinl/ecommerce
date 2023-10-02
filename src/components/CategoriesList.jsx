import React from 'react';
import useFetch from '../hooks/useFetch';

import { Link, useLocation } from 'react-router-dom';

function CategoriesList() {
  const location = useLocation();

  const { data, isLoading, error } = useFetch(
    'https://fakestoreapi.com/products/categories'
  );

  return (
    <div className='container'>
      <div
        className='categories navbar-collapse collapse'
        id='navbarSupportedContent'
      >
        {isLoading && <div>Categories are loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && (
          <div className='navbar-nav d-flex me-auto mb-2 mb-lg-0 align-items-center'>
            {data &&
              data.map((category, index) => (
                <div className='nav-item mx-2 m-2' key={index}>
                  <Link to={`/category/${category}`}>
                    <button
                      className={`nav-link p-2 nav-item btn btn-light ${
                        location.pathname === `/category/${encodeURI(category)}`
                          ? 'active'
                          : ''
                      }`}
                    >
                      {category}
                    </button>
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoriesList;
