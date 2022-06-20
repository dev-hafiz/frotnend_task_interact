import React, { useEffect, useState } from "react";
import logo from "../../src/images/logo.png";
import logo2 from "../../src/images/logo2.png";

const NavBar = () => {
  // Declare state for changing nabvar style conditional rendering
  const [state, setState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <div className={`navbar ${state ? 'whiteBg' : 'transparent'}`}>
      <div className="container">
        <div className="navbar__content">
          <div className="navbar__left">
            <img src={ state ? logo : logo2 } alt="logo" />
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
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
