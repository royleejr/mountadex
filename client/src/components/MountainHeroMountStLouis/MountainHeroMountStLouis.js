import React from "react";

import "./MountainHeroMountStLouis.scss";

export default class MountainHeroMountStLouis extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    document.querySelectorAll("[data-speed]").forEach(item => {
      const speed = item.getAttribute("data-speed");
      const yPos = `-${scrollTop / speed}`;
      item.setAttribute("style", `transform: translate3d(0px, ${yPos}px, 0px)`);
    });
    if (scrollTop >= 620) {
      document
        .querySelector(".header__caret-down")
        .classList.add("header__desktop-color");
      document
        .querySelector(".header__nav")
        .classList.add("header__desktop-color");
      document.querySelectorAll(".header__span").forEach(item => {
        item.setAttribute("id", "header__span--light");
      });
      document.querySelectorAll(".header__svg").forEach(item => {
        item.classList.add("header__span--light");
      });
      document
        .querySelector(".toggle")
        .setAttribute("id", "header__span--light");
    } else {
      document
        .querySelector(".header__caret-down")
        .classList.remove("header__desktop-color");
      document
        .querySelector(".header__nav")
        .classList.remove("header__desktop-color");
      document.querySelectorAll(".header__span").forEach(item => {
        item.removeAttribute("id", "header__span--light");
      });
      document.querySelectorAll(".header__svg").forEach(item => {
        item.classList.remove("header__span--light");
      });
      document
        .querySelector(".toggle")
        .removeAttribute("id", "header__span--light");
    }
  };
  render() {
    return (
      <section className="mountain-hero-louis">
        <div className="mountain-hero-louis__container nonparallax">
          <div
            className="mountain-hero-louis__layer mountain-hero-louis__layer--one parallax"
            data-speed="15"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-louis__layer mountain-hero-louis__layer--two parallax"
            data-speed="9"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-louis__layer mountain-hero-louis__layer--three parallax"
            data-speed="4"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-louis__layer mountain-hero-louis__layer--four parallax"
            data-speed="2"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-louis__layer mountain-hero-louis__layer--five parallax"
            data-speed="1"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
        </div>
      </section>
    );
  }
}
