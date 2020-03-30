import React from "react";

import "./Hero.scss";

export default class Hero extends React.Component {
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
