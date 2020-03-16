import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import "./Header.scss";

export default function Header(props) {
  const [toggle, setToggle] = useState(false);
  const [dropToggle, setDropToggle] = useState(false);
  // const [view, setView] = useState("");

  useEffect(() => {
    expand();
    window.addEventListener("resize", updateView);
    updateView();
  }, [toggle]);

  const updateView = () => {
    if (window.innerWidth >= 1280) {
      console.log("no");
      console.log(document.querySelector(".header__sub-container"));
      document
        .querySelector(".header__sub-container")
        .addEventListener("click", dropDown);
    }
  };

  const dropDown = () => {
    setDropToggle(!dropToggle);
    console.log("this is happening", dropToggle);
  };

  const headerToggle = async (event, link) => {
    if (link) {
      await setToggle(!toggle);
    } else {
      event.preventDefault();
      await setToggle(!toggle);
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
      document.querySelector("nav").classList.remove("header__links--display");
      let timer = 150;
      document.querySelectorAll(".header__links").forEach(item => {
        setTimeout(() => {
          if (!item.innerText.includes("MOUNTAINS")) {
            item.classList.remove("header__links--display");
            item.addEventListener("click", event =>
              headerToggle(event, "link")
            );
          } else {
            item.classList.remove("header__links--display");
          }
        }, timer);
        timer += 150;
      });
    } else {
      document.querySelector(".header").removeAttribute("style");
      document.getElementById("input").checked = false;
      document.querySelector("nav").classList.add("header__links--display");
      document.querySelectorAll(".header__links").forEach(item => {
        item.classList.add("header__links--display");
        item.removeEventListener("click", event => headerToggle(event, "link"));
      });
    }
  };

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
        <nav className="header__nav header__links--display">
          <NavHashLink
            smooth
            exact
            to="/#home"
            className="header__links"
            isActive={(match, location) => {
              if (location.pathname === "/" && location.hash === "") {
                return true;
              } else {
                return false;
              }
            }}
            activeClassName="header__links--selected"
            // onClick={event => headerToggle(event, "link")}
          >
            HOME
          </NavHashLink>
          <NavHashLink
            smooth
            exact
            to="/#about"
            className="header__links header__links--display"
            isActive={(match, location) => {
              if (location.pathname === "/#about") {
                return true;
              } else {
                return false;
              }
            }}
            activeClassName="header__links--selected"
            location={{
              pathname: document.location.pathname + document.location.hash
            }}
            // onClick={event => headerToggle(event, "link")}
          >
            ABOUT
          </NavHashLink>
          <NavHashLink
            smooth
            exact
            to="/#index"
            className="header__links header__links--display"
            isActive={(match, location) => {
              if (location.hash === "#index") {
                return true;
              } else {
                return false;
              }
            }}
            activeClassName="header__links--selected"
            // onClick={event => headerToggle(event, "link")}
          >
            MOUNTAIN INDEX
          </NavHashLink>
          <div className="header__links header__links--display">
            <div className="header__links">MOUNTAINS</div>
            <div
              className={`header__sub-container ${
                dropToggle ? null : "header__sub-container--display"
              }`}
            >
              <NavLink
                to="/mountain/blue-mountain"
                className="header__links header__links--sub header__links--display"
                activeClassName="header__links--selected"
                // onClick={event => headerToggle(event, "link")}
              >
                Blue Mountain
              </NavLink>
              <NavLink
                to="/mountain/horseshoe-valley"
                className="header__links header__links--sub header__links--display"
                activeClassName="header__links--selected"
                // onClick={event => headerToggle(event, "link")}
              >
                Horseshoe Valley
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
