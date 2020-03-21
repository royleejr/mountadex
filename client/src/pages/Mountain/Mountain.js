import React from "react";

import MountainHeroBlueMountain from "../../components/MountainHeroBlueMountain/MountainHeroBlueMountain";
import MountainHeroHorseshoeResort from "../../components/MountainHeroHorseshoeResort/MountainHeroHorseshoeResort";
import MountainDescription from "../../components/MountainDescription/MountainDescription";
import "./Mountain.scss";

export default class Mountain extends React.Component {
  mountain = () => {
    const route = this.props.match.params.mountainName;
    console.log(route);
    switch (route) {
      case "blue-mountain":
        return <MountainHeroBlueMountain />;
      case "horseshoe-resort":
        console.log("this is happening");
        return <MountainHeroHorseshoeResort />;
      default:
        return <p>No mountain found</p>;
    }
  };

  render() {
    return (
      <main className="mountain">
        {this.mountain()}
        <MountainDescription />
      </main>
    );
  }
}
