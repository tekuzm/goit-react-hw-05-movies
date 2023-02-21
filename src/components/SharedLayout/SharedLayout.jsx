import { NavLink, Outlet, useLocation } from 'react-router-dom';

// ========== styles ==========

import css from './SharedLayout.module.css';

const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={location.pathname === '/movies' ? 'active' : ''}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default SharedLayout;
