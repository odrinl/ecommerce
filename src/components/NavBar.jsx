import React from 'react';
import CategoriesList from './CategoriesList';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();
  const isAllProductsActive =
    location.pathname === '/' || location.pathname === '/products';
  return (
    <nav>
      <div className='nav'>
        <Link to={'/'}>
          <button>
            <h1>My Shop</h1>
          </button>
        </Link>

        <ul>
          <li>
            <Link to={'/products'}>
              <button className={isAllProductsActive ? 'active' : ''}>
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
