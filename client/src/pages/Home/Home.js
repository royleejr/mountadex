import React from "react";

import "./Home.scss";
import SiteDescription from "../../components/SiteDescription/SiteDescription";

export default function Home() {
  return (
    <main className="home" id="home">
      <div className="full">Hello</div>
      <SiteDescription />
    </main>
  );
}
