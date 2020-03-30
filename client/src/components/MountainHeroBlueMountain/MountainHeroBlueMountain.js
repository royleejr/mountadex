import React from "react";

import "./MountainHeroBlueMountain.scss";

export default class MountainHeroBlueMountain extends React.Component {
  componentDidMount() {
    this.props.pageLocation("blue-mountain");
  }
  render() {
    return (
      <section className="mountain-hero-blue">
        <div className="mountain-hero-blue__container nonparallax">
          <div
            className="mountain-hero-blue__layer mountain-hero-blue__layer--one parallax"
            data-speed="15"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-blue__layer mountain-hero-blue__layer--two parallax"
            data-speed="9"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-blue__layer mountain-hero-blue__layer--three parallax"
            data-speed="6"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-blue__layer mountain-hero-blue__layer--four parallax"
            data-speed="4"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-blue__layer mountain-hero-blue__layer--five parallax"
            data-speed="2"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-blue__layer mountain-hero-blue__layer--six parallax"
            data-speed="1"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {" "}
          </div>
          <div
            className="mountain-hero-blue__layer mountain-hero-blue__layer--seven parallax"
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
