import React from 'react';
import CategoriesList from './CategoriesList';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();
  return (
    <nav>
      <div className='nav'>
        <Link to={'/'}>
          <button className={location.pathname === '/' ? 'active' : ''}>
            <h1>My Shop</h1>
          </button>
        </Link>

        <ul>
          <li>
            <Link to={'/products'}>
              <button
                className={location.pathname === '/products' ? 'active' : ''}
              >
                All Products
              </button>
            </Link>
          </li>
          <li>
            <Link to={'/favorites'}>
              <button
                className={location.pathname === '/favorites' ? 'active' : ''}
              >
                Favorites
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <CategoriesList />
    </nav>
  );
}

export default NavBar;
