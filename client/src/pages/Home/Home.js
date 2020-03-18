import React from "react";

import Hero from "../../components/Hero/Hero";
import SiteDescription from "../../components/SiteDescription/SiteDescription";

import "./Home.scss";

export default class Home extends React.Component {
  // componentDidMount() {
  //   // const header = document.querySelector("header");
  //   // const home = document.getElementById("home");
  //   // console.log(home);
  //   // home.onScroll = this.scrollChange;
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // handleScroll = event => {
  //   // console.log(event);
  //   console.log(event.srcElement.body.scrollTop);
  // };

  render() {
    return (
      <main className="home" id="home">
        <Hero />
        <SiteDescription />
      </main>
    );
  }
}
