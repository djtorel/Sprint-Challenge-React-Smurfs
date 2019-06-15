import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  fontWeight: 'bold'
};

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/smurf-form" activeStyle={activeStyle}>
        Add Smurf
      </NavLink>
    </nav>
  );
};

export default NavBar;
