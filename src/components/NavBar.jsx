import React from 'react';
import CategoriesList from './CategoriesList';
import { Link, NavLink, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();
  const isAllProductsActive =
    location.pathname === '/' || location.pathname === '/products';
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='nav container-fluid'>
        <NavLink to={'/'}>
          <button>
            <h1>My Shop</h1>
          </button>
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='true'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='navbar-collapse collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav d-flex me-auto mb-2 mb-lg-0 align-items-center'>
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
      </div>
      <CategoriesList />
    </nav>
  );
}

export default NavBar;
