import { NavLink, Outlet } from 'react-router-dom';

// ========== styles ==========

import css from './SharedLayout.module.css';

const SharedLayout = () => {
  const activeStyle = {
    color: '#ff0000',
    textDecoration: 'underline',
  };

  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
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
