import React from "react";
import logo from "../../src/images/logo.png";
import logo2 from "../../src/images/logo2.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__content">
          <div className="navbar__left">
            <img src={logo2} alt="logo" />
          </div>
          <ul className="navbar__right">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Why Us</a>
            </li>
            <li>
              <a href="#">Free Steps</a>
            </li>
            <li>
              <a href="#">Join Us</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
