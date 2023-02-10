import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo-ito.png';

export default function Navbar() {
  return (
    <nav className="flex">
      <img className="logo" src={logo} alt="logo" />
      <ul className="flex">
        <li>
          <NavLink
            className="link"
            to="/"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
          >
            Home
          </NavLink>
        </li>
        <li>
          <FontAwesomeIcon icon={faMicrophone} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGear} />
        </li>
      </ul>
    </nav>
  );
}
