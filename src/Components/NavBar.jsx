import React from "react";
import avatar from "../img/avatar.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className='NavBar'>
        <div className='nav'>
          <div className='profile'>
            <img src={avatar} alt='Avatar' />
          </div>
          <div className='nav_items'>
            <ul>
              <li className='nav_item'>
                <NavLink exact to='/' activeClassName='active_link'>
                  Home
                </NavLink>
              </li>
              <li className='nav_item'>
                <NavLink exact to='/about' activeClassName='active_link'>
                  About
                </NavLink>
              </li>
              <li className='nav_item'>
                <NavLink exact to='/portfolios' activeClassName='active_link'>
                  Portfolios
                </NavLink>
              </li>
              <li className='nav_item'>
                <NavLink exact to='/contact' activeClassName='active_link'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <footer className='footer'>
            <p>
              CopyRight Reserved <sup>©</sup>Abdullah Al Nahdi
            </p>
          </footer>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
