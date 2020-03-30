import React from "react";

import "./MountainHeroHorseshoeResort.scss";

export default class MountainHeroHorseshoeResort extends React.Component {
  componentDidMount() {
    this.props.pageLocation("horseshoe-resort");
  }
  render() {
    return (
      <section className="mountain-hero-horse">
        <div className="mountain-hero-horse__container nonparallax">
          <div
            className="mountain-hero-horse__layer mountain-hero-horse__layer--one parallax"
            data-speed="15"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-horse__layer mountain-hero-horse__layer--two parallax"
            data-speed="9"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-horse__layer mountain-hero-horse__layer--three parallax"
            data-speed="6"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-horse__layer mountain-hero-horse__layer--four parallax"
            data-speed="4"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-horse__layer mountain-hero-horse__layer--five parallax"
            data-speed="3"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-horse__layer mountain-hero-horse__layer--six parallax"
            data-speed="2"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-horse__layer mountain-hero-horse__layer--seven parallax"
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
