import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import downArrow from "../../assets/icons/down-arrow.svg";
import upArrow from "../../assets/icons/up-arrow.svg";

import "./Header.scss";

export default class Header extends React.Component {
  state = {
    toggle: false,
    dropDown: false
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateView);
    this.updateView();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateView);
  }

  updateView = () => {
    if (window.innerWidth >= 1280) {
      document
        .getElementById("mountain")
        .addEventListener("click", this.dropDownToggle);

      //added it mouse over and mouse leave instead of click.
      // document
      //   .getElementById("mountain")
      //   .addEventListener("mouseover", this.dropDownToggle);
      // document
      //   .getElementById("mountain")
      //   .addEventListener("mouseleave", this.dropDownToggle);
    }
  };

  dropDownToggle = async event => {
    await this.setState(
      {
        dropDown: !this.state.dropDown
      },
      () => {
        this.classToggle();
      }
    );
  };

  classToggle = () => {
    if (this.state.dropDown) {
      document
        .querySelector(".header__sub-container")
        .classList.remove("header__sub-container--display");
      document.querySelectorAll(".header__links").forEach(item => {
        item.addEventListener("click", this.dropDownToggle);
      });
      let timer = 0;
      document.querySelectorAll(".header__links--sub").forEach(item => {
        item.setAttribute("style", "transform: translateY(60px); opacity: 0;");
        setTimeout(() => {
          item.setAttribute(
            "style",
            "transform: translateY(40px); opacity: 1;"
          );
        }, timer);
        timer += 300;
      });
    } else {
      let newTimer = 0;
      const subLinks = document.querySelectorAll(".header__links--sub");
      subLinks.forEach((item, index) => {
        setTimeout(() => {
          item.setAttribute("style", "transform: translateY(20px); opacity:0;");
        }, newTimer);
        newTimer += 300;
        if (index === subLinks.length - 1) {
          setTimeout(() => {
            document
              .querySelector(".header__sub-container")
              .classList.add("header__sub-container--display");
          }, 400);
        }
      });

      document.querySelectorAll(".header__links").forEach(item => {
        if (!item.innerText.includes("MOUNTAINS")) {
          item.removeEventListener("click", this.dropDownToggle);
        }
      });
    }
  };

  headerToggle = async (event, link) => {
    if (!link) {
      await this.setState({
        toggle: !this.state.toggle
      });
      this.expand();
    } else {
      event.preventDefault();
      await this.setState({
        toggle: !this.state.toggle
      });
      this.expand();
    }
  };

  expand = () => {
    if (this.state.toggle) {
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
            item.addEventListener("click", this.headerToggle);
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
        item.removeEventListener("click", this.headerToggle);
        item.classList.add("header__links--display");
      });
    }
  };

  render() {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__top">
            <div className="header__logo">Logo</div>
            <div
              className="header__menu"
              onClick={event => this.headerToggle(event, "link")}
            >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "none" }}
              >
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
                if (
                  (location.pathname === "/" && location.hash === "") ||
                  location.hash === "#home"
                ) {
                  return true;
                } else {
                  return false;
                }
              }}
              activeClassName="header__links--selected"
            >
              HOME
            </NavHashLink>
            <NavHashLink
              smooth
              exact
              to="/#about"
              className="header__links header__links--display"
              isActive={(match, location) => {
                if (window.location.href.split("#")[1] === "about") {
                  return true;
                } else {
                  return false;
                }
              }}
              activeClassName="header__links--selected"
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
            >
              MOUNTAIN INDEX
            </NavHashLink>
            <div className="header__desktop">
              <div
                className="header__links header__links--display"
                id="mountain"
              >
                <p>MOUNTAINS</p>
                <object
                  className="header__caret-down"
                  data={downArrow}
                ></object>
              </div>
              <div className="header__sub-container header__sub-container--display">
                <NavLink
                  to="/mountain/blue-mountain"
                  className="header__links header__links--sub header__links--display"
                  activeClassName="header__links--selected"
                >
                  Blue Mountain
                </NavLink>
                <NavLink
                  to="/mountain/horseshoe-valley"
                  className="header__links header__links--sub header__links--display"
                  activeClassName="header__links--selected"
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
}
