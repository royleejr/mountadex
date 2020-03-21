import React from "react";

import MountainHeroBlueMountain from "../../components/MountainHeroBlueMountain/MountainHeroBlueMountain";
import MountainHeroHorseShoeResort from "../../components/MountainHeroHorseShoeResort/MountainHeroHorseShoeResort";
import "./Mountain.scss";

export default class Mountain extends React.Component {
  mountain = () => {
    const route = this.props.match.params.mountainName;
    switch (route) {
      case "blue-mountain":
        return <MountainHeroBlueMountain />;
      case "horseshoe-resort":
        return <MountainHeroHorseShoeResort />;
    }
  };

  render() {
    return <main className="mountain">{this.mountain()}</main>;
  }
}
