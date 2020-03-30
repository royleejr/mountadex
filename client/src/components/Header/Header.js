import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

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

  scrollToTop = () => {
    window.scrollTo(0, 0);
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
        item.setAttribute("style", "transform: translateY(60px); opacity: 0; ");
        setTimeout(() => {
          item.addEventListener("click", this.scrollToTop);
          item.setAttribute(
            "style",
            "transform: translateY(40px); opacity: 1;"
          );
        }, timer);
        timer += 300;
      });
      document
        .getElementById("mountain")
        .setAttribute("style", "color: rgb(81, 107, 136)");
      document
        .querySelector(".header__caret-down")
        .classList.add("class", "header__caret-down--hidden");
      document
        .querySelector(".header__caret-up")
        .classList.remove("header__caret-down--hidden");
      document
        .querySelector(".header__caret-up")
        .classList.add("header__caret-up--fill");
    } else {
      let newTimer = 0;
      const subLinks = document.querySelectorAll(".header__links--sub");
      subLinks.forEach((item, index) => {
        setTimeout(() => {
          item.removeEventListener("click", this.scrollToTop);
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

      document
        .getElementById("mountain")
        .classList.remove("header__caret-up--fill");
      document
        .querySelector(".header__caret-down")
        .classList.remove("header__caret-down--hidden");

      document
        .querySelector(".header__caret-up")
        .classList.add("header__caret-down--hidden");
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
    const header = document.querySelector(".header");
    if (this.state.toggle) {
      header.classList.add("header--transition");
      header.setAttribute("id", "header--expand");
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
      setTimeout(() => {
        header.classList.remove("header--transition");
      }, 1000);
      document.querySelector(".header").removeAttribute("id", "header--expand");
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
                    <span className="header__span"></span>
                    <span className="header__span"></span>
                  </div>
                  <svg className=".header__svg">
                    <use xlinkHref="#path" />
                  </svg>
                  <svg className=".header__span">
                    <use xlinkHref="#path" />
                  </svg>
                </div>
              </label>
              <svg
                className="header__span"
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
                <svg
                  className="header__caret-down"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512.011 512.011"
                  xmlSpace="preserve"
                >
                  <path
                    d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421 123.592c-8.341-8.341-21.824-8.341-30.165,0
			              s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251 15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
			              C514.096,145.416,514.096,131.933,505.755,123.592z"
                  />
                </svg>
                <svg
                  version="1.1"
                  className="header__caret-up header__caret-down--hidden"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 511.997 511.997"
                  xmlSpace="preserve"
                >
                  <path
                    d="M508.707,365.621L263.374,130.954c-4.125-3.938-10.625-3.938-14.75,0L3.29,365.621c-3.146,3.01-4.146,7.635-2.521,11.677
			c1.615,4.052,5.542,6.698,9.896,6.698h42.667c2.729,0,5.354-1.042,7.333-2.927l195.333-185.042l195.333,185.042
			c1.979,1.885,4.604,2.927,7.333,2.927h42.667c4.354,0,8.281-2.646,9.896-6.698C512.853,373.256,511.853,368.631,508.707,365.621z"
                  />
                </svg>
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
                  to="/mountain/horseshoe-resort"
                  className="header__links header__links--sub header__links--display"
                  activeClassName="header__links--selected"
                >
                  Horseshoe Resort
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
