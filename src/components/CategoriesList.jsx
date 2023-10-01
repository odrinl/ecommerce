import React, { useContext } from 'react';
import useRouting from '../hooks/useRouting';
import useFetch from '../hooks/useFetch';
import FetchError from '../errorHandling/FetchError';
import { CategoryContext } from '../context/CategoryContext';

function CategoriesList() {
  const { currentRoute, navigateTo } = useRouting();
  const { setSelectedCategory } = useContext(CategoryContext);
  const { data, isLoading, error } = useFetch(
    'https://fakestoreapi.com/products/categories'
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <FetchError />;
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigateTo(`/products/${category}`);
  };

  return (
    <div className='categories'>
      <ul>
        {data &&
          data.map((category, index) => (
            <li key={index}>
              <button
                className={
                  currentRoute === `/products/${category}` ? 'active' : ''
                }
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CategoriesList;
