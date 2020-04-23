import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//pages
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Mountain from "./pages/Mountain/Mountain";

//styling
import "./styles/app.scss";

class App extends React.Component {
  state = {
    page: "home",
    windowHeight: null,
    windowWidth: null
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.size);
    this.size();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.size);
  }

  size = () => {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  };

  handleScroll = () => {
    let scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop <= this.state.windowHeight)
      document.querySelectorAll("[data-speed]").forEach(item => {
        const speed = item.getAttribute("data-speed");
        const yPos = `-${scrollTop / speed}`;
        item.setAttribute(
          "style",
          `transform: translate3d(0px, ${yPos}px, 0px)`
        );
      });

    //currently have 3 different only because I know I will
    //want to have different classes for each page
    if (this.state.page === "home") {
      if (
        scrollTop >= this.state.windowHeight - 60 &&
        scrollTop < this.state.windowHeight * 2 - 70
      ) {
        document
          .querySelector(".header")
          .classList.add("header--background-color");
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
          .querySelector(".header")
          .classList.remove("header--background-color");
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
    }

    if (this.state.page === "blue-mountain") {
      if (scrollTop >= this.state.windowHeight - 100) {
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
    }

    if (this.state.page === "horseshoe-resort") {
      if (scrollTop >= this.state.windowHeight - 100) {
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
    }
  };

  pageLocation = page => {
    this.setState({
      page: page
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Home
                {...props}
                pageLocation={this.pageLocation}
                windowWidth={this.state.windowWidth}
              />
            )}
          />
          <Route
            path="/mountain/:mountainName"
            render={props => (
              <Mountain {...props} pageLocation={this.pageLocation} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
