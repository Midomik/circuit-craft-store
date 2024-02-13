import { NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = ({ children }) => {
  return (
    <div>
      <header className="header">
        <NavLink className={css.home_page} to="/">
          Home
        </NavLink>
        <NavLink className={css.roducts_page} to="/product">
          Products
        </NavLink>
      </header>
      <main>{children}</main>
    </div>
  );
};
