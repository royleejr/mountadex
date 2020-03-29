import React from "react";

import "./SiteIndex.scss";

export default class SiteIndex extends React.Component {
  state = {
    checked: 1
  };

  componentDidMount() {
    this.rotate();
  }

  startCarousel = () => {
    const allDivs = document.querySelectorAll(".box");
    let timeout = setInterval(() => {
      // console.log('this is HAPP')
      if (this.state.checked + 1 === allDivs.length) {
        this.setState({
          checked: 0
        });
      } else {
        this.setState({
          checked: this.state.checked + 1
        });
      }
    }, 3000);
  };

  position = num => {
    this.setState(
      {
        checked: num
      },
      () => {
        this.rotate();
      }
    );
  };

  rotate = () => {
    const allDivs = document.querySelectorAll(".site-index__box");
    const middle = Math.floor(allDivs.length / 2);
    const end = this.state.checked + middle;
    const stop = this.state.checked - middle;
    let position = 175;
    let positionEnd = 50;
    let newI = 0;
    let newNegativeI = allDivs.length - 1;
    let zIndex = 20;
    for (let i = this.state.checked; i <= end; i++) {
      if (!allDivs[i]) {
        allDivs[newI].setAttribute(
          "style",
          `transform: translate3d(${position}%,0%,0); z-index: ${zIndex}; transition: 1s ease-in-out;`
        );
        position += 125;
        newI++;
        zIndex--;
      } else {
        allDivs[i].setAttribute(
          "style",
          `transform: translate3d(${position}%,0%,0); z-index: ${zIndex}; transition: 1s ease-in-out;`
        );
        position += 125;
        zIndex--;
      }
    }
    for (let i = this.state.checked - 1; i >= stop; i--) {
      if (allDivs[i]) {
        allDivs[i].setAttribute(
          "style",
          `transform: translate3d(${positionEnd}%,0%,0); z-index: ${zIndex}; transition: 1s ease-in-out;`
        );
        positionEnd += -125;
        zIndex--;
      } else {
        allDivs[newNegativeI].setAttribute(
          "style",
          `transform: translate3d(${positionEnd}%,0%,0); z-index: ${zIndex}; transition: 1s ease-in-out;`
        );
        positionEnd += -125;
        newNegativeI--;
        zIndex--;
      }
    }
  };

  render() {
    return (
      <section className="site-index">
        <div className="site-index__carousel">
          <div
            className="site-index__box site-index__box--0"
            onClick={() => this.position(0)}
          ></div>
          <div
            className="site-index__box site-index__box--1"
            onClick={() => this.position(1)}
          ></div>
          {/* <div
            className="site-index__box site-index__box--0"
            onClick={() => this.position(2)}
          ></div> */}
        </div>
      </section>
    );
  }
}
