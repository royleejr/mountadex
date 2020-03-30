import React from "react";

import Hero from "../../components/Hero/Hero";
import SiteDescription from "../../components/SiteDescription/SiteDescription";
import SiteIndex from "../../components/SiteIndex/SiteIndex";

import "./Home.scss";

export default class Home extends React.Component {
  componentDidMount() {
    this.props.pageLocation("home");
  }

  render() {
    return (
      <main className="home">
        <Hero />
        <SiteDescription />
        <SiteIndex />
      </main>
    );
  }
}
