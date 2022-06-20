import React from "react";
import {Fade } from "react-reveal";

const Header = () => {
  return (
    <Fade right>
      <div className="header">
      <div className="header__content">
        <h1 className="header__content-h1">
          Get ready and start to take your <br />
          career to the next level!
        </h1>
        <div className="header__inputArea">
          <input className="header__inputArea-child1" type="text" placeholder="Your name*" />
          <input className="header__inputArea-child2" type="email" placeholder="Your email address*" />
          <button type="submit" className="header__inputArea-child3">Start Free Course</button>
        </div>
        <p className="header__content-p">
          *Sign up and start learning your first course for free!
        </p>
      </div>
    </div>
    </Fade>
  );
};

export default Header;
