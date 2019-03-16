import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = ({ categories }) => (
  <div>
    <nav className="nav">
      <ul className="nav-list">
        {categories.map(category => (
          <NavLink exact key={category.label} className="nav-link" to={category.route}>{category.label}</NavLink>
        ))}
      </ul>
    </nav>
  </div>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default Header;
