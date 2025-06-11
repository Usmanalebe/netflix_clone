import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <div className="Header-outer-container">
      <div className="Header-container">
        <div className="Header-left">
          <ul>
            <li>
              <img src={logo} alt="netflix logo" width="100" />
            </li>
            <li>Netflix</li>
            <li>Home </li>
            <li>TVShows</li>
            <li>Movies </li>
            <li>Latest </li>
            <li>Mylist</li>
            <li>Brouse by language</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
