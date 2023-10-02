import React from 'react';
import useFetch from '../hooks/useFetch';
import FetchError from '../errorHandling/FetchError';

import { Link, useLocation } from 'react-router-dom';

function CategoriesList() {
  const location = useLocation();

  const { data, isLoading, error } = useFetch(
    'https://fakestoreapi.com/products/categories'
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <FetchError />;
  }

  return (
    <div className='categories'>
      <ul>
        {data &&
          data.map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category}`}>
                <button
                  className={
                    location.pathname === `/category/${encodeURI(category)}`
                      ? 'active'
                      : ''
                  }
                >
                  {category}
                </button>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CategoriesList;
