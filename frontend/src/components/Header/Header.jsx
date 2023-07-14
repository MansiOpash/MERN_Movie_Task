import React from "react";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="head">
          <h1 className="title">DEMO Streaming</h1>
          <div className="nav_right">
            <a href="/">Log In</a>
            <button className="bt1">
              <span>Start your free trial</span>
            </button>
            <div className="menu-icon">
              <BiMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
