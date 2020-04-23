import React from "react";

import "./SiteIndex.scss";

var timeout = null;
export default class SiteIndex extends React.Component {
  state = {
    checked: 1,
    skyClass: "site-index__sky--basic",
    currentSky: -1,
    alreadySelected: false,
    carouselStatus: true
  };

  componentDidMount() {
    this.rotate();
    this.startCarousel();
  }

  componentDidUpdate(prevProps) {
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
    console.log(this.state.carouselStatus);
    if (!this.state.carouselStatus) {
      this.startCarousel();
      this.setState({
        carouselStatus: true
      });
    }
    if (num === this.state.checked) {
      this.changeBackground(num);
    } else {
      this.setState(
        {
          checked: num
        },
        () => {
          this.rotate();
        }
      );
    }
  };

  rotate = () => {
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
        allDivs[i].setAttribute(
          "style",
          `transform: translate3d(${positionEnd}%,0%,0); z-index: ${zIndex}; transition: 1s ease-in-out;`
        );
        if (this.props.windowWidth && this.props.windowWidth <= 768) {
          positionEnd += -110;
        } else {
          positionEnd += -125;
        }
        zIndex--;
      } else {
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

  pushCarouselOut = () => {
    clearInterval(timeout);
    this.setState({
      carouselStatus: false
    });
    const allDivs = document.querySelectorAll(".site-index__box");
    const middle = Math.floor(allDivs.length / 2);
    const end = this.state.checked + middle;
    const stop = this.state.checked - middle;
    let position = 180;
    let positionEnd = -1000;
    if (this.props.windowWidth <= 768) {
      position = 60;
      positionEnd = -280;
    } else if (this.props.windowWidth > 768 && this.props.windowWidth < 1280) {
      position = 130;
      positionEnd = -280;
    } else if (this.props.windowWidth >= 1680) {
      position = 220;
    }
    let newI = 0;
    let newNegativeI = allDivs.length - 1;
    let zIndex = 20;

    for (let i = this.state.checked; i <= end; i++) {
      if (!allDivs[i]) {
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
        allDivs[i].setAttribute(
          "style",
          `transform: translate3d(${positionEnd}%,0%,0); z-index: ${zIndex}; transition: 1s ease-in-out;`
        );
        if (this.props.windowWidth && this.props.windowWidth <= 768) {
          positionEnd += -110;
        } else {
          positionEnd += -125;
        }
        zIndex--;
      } else {
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

  addText = () => {
    const title = document.querySelector(".site-index__title");
    title.classList.remove("site-index__title--hide");
    title.classList.add("site-index__title--animate");
    title.innerHTML = this.mountainName();
  };

  removeText = () => {
    const title = document.querySelector(".site-index__title");
    title.classList.remove("site-index__title--animate");
    title.classList.add("site-index__title--hide");
  };

  changeShadow = checked => {
    const shadow = document.querySelector(".site-index__shadow");
    shadow.classList.remove(`site-index__shadow--basic`);
    shadow.classList.remove(`site-index__shadow--${this.state.currentSky}`);
    if (checked === 0) {
      shadow.classList.add("site-index__shadow--0");
    } else if (checked === 1) {
      shadow.classList.add("site-index__shadow--1");
    } else if (checked === 2) {
      shadow.classList.add("site-index__shadow--2");
    } else if (checked === 3) {
      shadow.classList.add("site-index__shadow--3");
    }
  };

  changeBackground = checked => {
    if (this.state.currentSky !== checked) {
      let newElement = document.createElement("div");
      newElement.setAttribute(
        "class",
        `site-index__sky site-index__sky--${checked} site-index__sky--animate`
      );
      const section = document.querySelector(".site-index");
      section.appendChild(newElement);
      setTimeout(() => {
        section.removeChild(document.querySelector(".site-index__sky"));
      }, 1500);

      this.setState({
        currentSky: checked,
        alreadySelected: true
      });

      this.pushCarouselOut();
      this.addText();
      this.changeShadow(checked);
    } else if (this.state.alreadySelected === false) {
      this.pushCarouselOut();
      this.addText();
      this.changeShadow(checked);
      this.setState({
        alreadySelected: true
      });
    } else {
      this.rotate();
      this.removeText();
      this.setState({
        alreadySelected: false
      });
    }
  };

  mountainName = () => {
    if (this.state.checked === 0) {
      return "Blue Mountain";
    } else if (this.state.checked === 1) {
      return "Horseshoe Resort";
    } else if (this.state.checked === 2) {
      return "Mount St Louis";
    } else if (this.state.checked === 3) {
      return "Whistler Blackcomb";
    } else if (this.state.checked === 4) {
      return "Big White Ski Resort";
    }
  };

  render() {
    return (
      <section className="site-index" id="index">
        <div className="site-index__carousel">
          <div
            className="site-index__box site-index__box--0"
            onClick={() => this.position(0)}
          ></div>
          <div
            className="site-index__box site-index__box--1"
            onClick={() => this.position(1)}
          ></div>
          <div
            className="site-index__box site-index__box--2"
            onClick={() => this.position(2)}
          ></div>
          <div
            className="site-index__box site-index__box--3"
            onClick={() => this.position(3)}
          ></div>
          <div
            className="site-index__box site-index__box--4"
            onClick={() => this.position(4)}
          ></div>
        </div>
        <div className="site-index__title site-index__title--hide"></div>
        <div className={`site-index__sky ${this.state.skyClass}`}></div>
        <div className="site-index__shadow site-index__shadow--basic"></div>
        {/* <div className="site-index__person"></div> */}
        <div className="site-index__ground"></div>
      </section>
    );
  }
}
