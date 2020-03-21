import React from "react";

import MountainHeroBlueMountain from "../../components/MountainHeroBlueMountain/MountainHeroBlueMountain";
import MountainHeroHorseShoeResort from "../../components/MountainHeroHorseShoeResort/MountainHeroHorseShoeResort";
import MountainDescription from "../../components/MountainDescription/MountainDescription";
import "./Mountain.scss";

export default class Mountain extends React.Component {
  mountain = () => {
    const route = this.props.match.params.mountainName;
    switch (route) {
      case "blue-mountain":
        return (
          <>
            <MountainHeroBlueMountain />
          </>
        );
      case "horseshoe-resort":
        return <MountainHeroHorseShoeResort />;
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
