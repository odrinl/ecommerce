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
          <div className='navbar-brand'>
            <h1>My Shop</h1>
          </div>
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
          <div className='navbar-nav d-flex me-auto mb-2 mb-lg-0 align-items-center'>
            <div className='nav-item mx-2 m-2'>
              <Link to={'/products'}>
                <button
                  className={`nav-link p-2 nav-item btn btn-light ${
                    isAllProductsActive ? 'active' : ''
                  }`}
                >
                  All Products
                </button>
              </Link>
            </div>
            <div className='nav-item mx-2 m-2'>
              <Link to={'/favorites'}>
                <button
                  className={`nav-link p-2 nav-item btn btn-light ${
                    location.pathname === '/favorites' ? 'active' : ''
                  }`}
                >
                  Favorites
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CategoriesList />
    </nav>
  );
}

export default NavBar;
