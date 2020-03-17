import React from "react";

import Hero from "../../components/Hero/Hero";
import SiteDescription from "../../components/SiteDescription/SiteDescription";

import "./Home.scss";

export default function Home() {
  return (
    <main className="home" id="home">
      <Hero />
      <SiteDescription />
    </main>
  );
}
