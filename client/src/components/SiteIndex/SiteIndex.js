import React from "react";

import "./SiteIndex.scss";

var timeout = null;
export default class SiteIndex extends React.Component {
  state = {
    checked: 1
  };

  componentDidMount() {
    this.rotate();
    // this.startCarousel();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
    if (prevProps.windowWidth !== this.props.windowWidth) {
      this.rotate();
    }
  }

  componentWillUnmount() {
    clearInterval(timeout);
  }

  startCarousel = () => {
    const allDivs = document.querySelectorAll(".site-index__box");
    timeout = setInterval(() => {
      console.log("thisis happening", allDivs.length, this.state.checked);
      if (this.state.checked + 1 === allDivs.length) {
        this.setState(
          {
            checked: 0
          },
          () => {
            this.rotate();
          }
        );
      } else {
        this.setState(
          {
            checked: this.state.checked + 1
          },
          () => this.rotate()
        );
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
    console.log(this.props.windowWidth);
    const allDivs = document.querySelectorAll(".site-index__box");
    const middle = Math.floor(allDivs.length / 2);
    const end = this.state.checked + middle;
    const stop = this.state.checked - middle;
    let position = -50;
    let positionEnd = -175;
    if (this.props.windowWidth <= 768) {
      positionEnd = -160;
    }
    let newI = 0;
    let newNegativeI = allDivs.length - 1;
    let zIndex = 20;
    for (let i = this.state.checked; i <= end; i++) {
      if (!allDivs[i]) {
        console.log(allDivs[newI]);
        allDivs[newI].setAttribute(
          "style",
          `transform: translate3d(${position}%,0%,0); z-index: ${zIndex}; transition: 1s ease-in-out;`
        );
        if (this.props.windowWidth && this.props.windowWidth <= 768) {
          position += 110;
        } else {
          position += 125;
        }
        newI++;
        zIndex--;
      } else {
        console.log(allDivs[i]);
        allDivs[i].setAttribute(
          "style",
          `transform: translate3d(${position}%,0%,0); z-index: ${zIndex}; transition: 1s ease-in-out;`
        );
        if (this.props.windowWidth && this.props.windowWidth <= 768) {
          position += 110;
        } else {
          position += 125;
        }
        zIndex--;
      }
    }
    for (let i = this.state.checked - 1; i >= stop; i--) {
      if (allDivs[i]) {
        console.log("this is width", this.props.windowWidth);
        console.log(allDivs[i]);
        allDivs[i].setAttribute(
          "style",
          `transform: translate3d(${positionEnd}%,0%,0); z-index: ${zIndex}; transition: 1s ease-in-out;`
        );
        if (this.props.windowWidth && this.props.windowWidth <= 768) {
          console.log("100");
          positionEnd += -110;
        } else {
          positionEnd += -125;
          console.log("125");
        }
        zIndex--;
      } else {
        console.log(allDivs[newNegativeI]);
        allDivs[newNegativeI].setAttribute(
          "style",
          `transform: translate3d(${positionEnd}%,0%,0); z-index: ${zIndex}; transition: 1s ease-in-out;`
        );
        if (this.props.windowWidth && this.props.windowWidth <= 768) {
          positionEnd += -110;
        } else {
          positionEnd += -125;
        }
        newNegativeI--;
        zIndex--;
      }
    }
  };

  render() {
    return (
      <section className="site-index" id="index">
        <div className="site-index__carousel">
          <div
            className="site-index__box site-index__box--0"
            onClick={() => this.position(0)}
          >
            0
          </div>
          <div
            className="site-index__box site-index__box--1"
            onClick={() => this.position(1)}
          >
            1
          </div>
          <div
            className="site-index__box site-index__box--0"
            onClick={() => this.position(2)}
          >
            2
          </div>
          <div
            className="site-index__box site-index__box--1"
            onClick={() => this.position(3)}
          >
            3
          </div>
          <div
            className="site-index__box site-index__box--0"
            onClick={() => this.position(4)}
          >
            4
          </div>
        </div>
        <div className="site-index__sky"></div>
        <div className="site-index__shadow"></div>
        <div className="site-index__person"></div>
        <div className="site-index__ground"></div>
      </section>
    );
  }
}
