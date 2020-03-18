import React from "react";

import SiteDesription from "../MountainDescription/MountainDescription";

import "./Hero.scss";

export default class Hero extends React.Component {
  state = {
    scroll: null
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    let scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;

    document.querySelectorAll("[data-speed]").forEach(item => {
      const speed = item.getAttribute("data-speed");
      const yPos = `-${scrollTop / speed}`;
      item.setAttribute("style", `transform: translate3d(0px, ${yPos}px, 0px)`);
    });

    console.log(scrollTop);
    if (scrollTop >= 620) {
      // console.log(document.querySelector("header"));
      console.log("this happens");
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
        // item.classList.add("header__span--light");
        item.setAttribute("style", "stroke: rgb(180, 200, 223);");
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
        // item.classList.add("header__span--light");
        item.removeAttribute("style", "stroke: rgb(180, 200, 223);");
      });
      document
        .querySelector(".toggle")
        .removeAttribute("id", "header__span--light");
    }
  };

  render() {
    return (
      <section className="hero">
        <h1 className="hero__title">Mountadex</h1>
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
        {/* <SiteDesription /> */}
      </section>
    );
  }
}
