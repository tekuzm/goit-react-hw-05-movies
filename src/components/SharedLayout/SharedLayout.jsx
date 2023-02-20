import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

// ========== styles ==========

import css from './SharedLayout.module.css';

const SharedLayout = () => (
  <>
    <header className={css.header}>
      <nav className={css.navigation}>
        <Link className={css.navLink} to="/">
          Home
        </Link>
        <Link className={css.navLink} to="/movies">
          Movies
        </Link>
      </nav>
    </header>
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  </>
);

export default SharedLayout;
