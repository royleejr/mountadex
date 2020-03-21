import React from "react";

import Hero from "../../components/Hero/Hero";
import SiteDescription from "../../components/SiteDescription/SiteDescription";

import "./Home.scss";

export default class Home extends React.Component {
  render() {
    return (
      <main className="home" id="home">
        <Hero />
        <SiteDescription />
      </main>
    );
  }
}
