import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

export default function Header(props) {
  const [toggle, setToggle] = useState(true);

  const headerToggle = async (event, link) => {
    if (link) {
      await setToggle(!toggle);
      expand();
    } else {
      event.preventDefault();
      await setToggle(!toggle);
      expand();
    }
  };

  const expand = () => {
    if (toggle) {
      const header = document.querySelector(".header");
      header.setAttribute(
        "style",
        "position: fixed; height: 100vh; width: 100vw; top:0; bottom:0; left:0; right: 0;"
      );
      document.getElementById("input").checked = true;
      document.querySelector("nav").removeAttribute("style");
      let timer = 150;
      document.querySelectorAll(".header__links").forEach(item => {
        setTimeout(() => {
          item.removeAttribute("style");
        }, timer);
        timer += 150;
      });
    } else {
      const header = document.querySelector(".header");
      header.removeAttribute("style");
      document.getElementById("input").checked = false;
      document.querySelector("nav").setAttribute("style", "display:none");
      document.querySelectorAll(".header__links").forEach(item => {
        item.setAttribute("style", "display:none;");
      });
    }
  };

  // useEffect(() => {
  //   expand();
  // }, [toggle, expand]);
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__top">
          <div className="header__logo">Logo</div>
          <div className="header__menu" onClick={headerToggle}>
            <input type="checkbox" id="input" />
            <label className="toggle" htmlFor="input">
              <div>
                <div>
                  <span></span>
                  <span></span>
                </div>
                <svg>
                  <use xlinkHref="#path" />
                </svg>
                <svg>
                  <use xlinkHref="#path" />
                </svg>
              </div>
            </label>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
              <symbol
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 44 44"
                id="path"
              >
                <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"></path>
              </symbol>
            </svg>
          </div>
        </div>
        <nav className="header__fullscreen" style={{ display: "none" }}>
          <NavLink
            to="/"
            className="header__links"
            style={{ display: "none" }}
            activeClassName="header__links--selected"
            onClick={event => headerToggle(event, "link")}
          >
            HOME
          </NavLink>
          <NavLink
            to="/#about"
            className="header__links"
            style={{ display: "none" }}
            activeClassName="header__links--selected"
            onClick={event => headerToggle(event, "link")}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="#index"
            className="header__links"
            activeClassName="header__links--selected"
            style={{ display: "none" }}
            onClick={event => headerToggle(event, "link")}
          >
            MOUNTAIN INDEX
          </NavLink>
          <NavLink
            to="/mountain"
            className="header__links"
            activeClassName="header__links--selected"
            style={{ display: "none" }}
            onClick={event => headerToggle(event, "link")}
          >
            MOUNTAINS
          </NavLink>
          <div className="header__sub-container">
            <NavLink
              to="/mountain/blue-mountain"
              className="header__links header__links--sub"
              activeClassName="header__links--selected"
              style={{ display: "none" }}
              onClick={event => headerToggle(event, "link")}
            >
              Blue Mountain
            </NavLink>
            <NavLink
              to="/mountain/horseshoe-valley"
              className="header__links header__links--sub"
              activeClassName="header__links--selected"
              style={{ display: "none" }}
              onClick={event => headerToggle(event, "link")}
            >
              Horseshoe Valley
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
