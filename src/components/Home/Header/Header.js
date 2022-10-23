/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import loctionPointer from "../../../images/marker.svg";
import starbucksLogo from "../../../images/logo.svg";
import "./Header.css";

const Header = () => {
  const [btnToggle, setBtnToggle] = useState(false);
  const toggle = () => {
    setBtnToggle(!btnToggle);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <a href="#">
              <img src={starbucksLogo} alt="starbucks" />
            </a>
          </div>

          <ul className="navbar-nav-left">
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Rewards</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
          </ul>

          <ul className="navbar-nav-right">
            <li>
              <a href="#">
                <img src={loctionPointer} alt="" />
                <span>Find a store</span>
              </a>
            </li>
            <li>
              <button className="btn btn-dark-outline">Sing in</button>
              <button className="btn btn-dark">Join Now</button>
            </li>
          </ul>
          {/* Hamburger menu */}
          <button onClick={toggle} type="button" className="hamburger">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
      </nav>
        {/* Mobile Menu */}
    <div class="mobile-menu hidden" id="menu">
      <ul>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Rewards</a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
      </ul>

      <div class="mobile-menu-bottom">
        <button class="btn btn-dark-outline">Sign in</button>
        <button class="btn btn-dark">Join now</button>
        <div>
          <a href="#">
            <img src={loctionPointer} alt="" />
            <span>Find a store</span>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};
export default Header;
