import * as React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

function Navigation() {
  // let activeStyle = {
  //   textDecoration: 'underline',
  // };

  // let activeClassName = 'underline';

  return (
    <nav>
      <NavLink
        end
        to="/"
        className={s.active}
        // style={isActive => ({
        //   color: isActive ? 'blue' : 'green',
        // })}
        // style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        HomePage
      </NavLink>
      <NavLink
        end
        to="/movies"
        className={s.active}
        // className={({ isActive }) => (isActive ? activeClassName : undefined)}
        // style={isActive => ({
        //   color: isActive ? 'blue' : 'green',
        // })}
      >
        MoviesPage
      </NavLink>
    </nav>
  );
}

export default Navigation;
