import React from 'react';
import useRouting from '../hooks/useRouting';
import CategoriesList from './CategoriesList';

function NavBar() {
  const { currentRoute, navigateTo } = useRouting();

  return (
    <nav>
      <div className='nav'>
        <button
          className={currentRoute === '/' ? 'active' : ''}
          onClick={() => navigateTo('/')}
        >
          <h1>My Shop</h1>
        </button>

        <ul>
          <li>
            <button
              className={currentRoute === '/products' ? 'active' : ''}
              onClick={() => navigateTo('/products')}
            >
              All Products
            </button>
          </li>
          <li>
            <button
              className={currentRoute === '/favorites' ? 'active' : ''}
              onClick={() => navigateTo('/favorites')}
            >
              Favorites
            </button>
          </li>
        </ul>
      </div>
      <CategoriesList />
    </nav>
  );
}

export default NavBar;
