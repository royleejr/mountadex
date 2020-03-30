import React from "react";

import "./Hero.scss";

export default class Hero extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    let scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    console.log(scrollTop);
    document.querySelectorAll("[data-speed]").forEach(item => {
      const speed = item.getAttribute("data-speed");
      const yPos = `-${scrollTop / speed}`;
      item.setAttribute("style", `transform: translate3d(0px, ${yPos}px, 0px)`);
    });
    if (scrollTop >= 620) {
      // document.querySelector(".header").classList.add("header--background-color");
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
      // document
      //   .querySelector(".header")
      //   .classList.remove("header__desktop-color");
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
      <section className="hero" id="home">
        <div className="hero__container nonparallax">
          <div
            className="hero__layer hero__layer--one parallax"
            data-speed="19"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="hero__layer hero__layer--two parallax"
            data-speed="12"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="hero__layer hero__layer--three parallax"
            data-speed="8"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="hero__layer hero__layer--four parallax"
            data-speed="8"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="hero__layer hero__layer--five parallax"
            data-speed="6"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="hero__layer hero__layer--six parallax"
            data-speed="4"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="hero__layer hero__layer--seven parallax"
            data-speed="2"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="hero__layer hero__layer--eight parallax"
            data-speed="1"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="hero__layer hero__layer--nine parallax"
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
