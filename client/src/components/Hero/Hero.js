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
    // console.log(event)
    let scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;

    document.querySelectorAll("[data-speed]").forEach(item => {
      const speed = item.getAttribute("data-speed");
      const yPos = `-${scrollTop / speed}`;
      item.setAttribute("style", `transform: translate3d(0px, ${yPos}px, 0px)`);
    });
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
