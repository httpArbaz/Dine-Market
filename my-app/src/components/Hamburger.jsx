import React from "react";
import "./Hamburger.css";
import "./Phone.css";
export default function Hamburger() {
  return (
    <>
      <div className="navbar-Hel">
        <div className="container nav-container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="nav-logo">
            <h1>
              Dine <span style={{ color: "red" }}>Market</span>
            </h1>
          </div>
          <div className="menu-items">
            <li>
              <a href="#">Females</a>
            </li>
            <li>
              <a href="#">Males</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">All Products</a>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
