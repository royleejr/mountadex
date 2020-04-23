import React from "react";
import MountainHeroBlueMountain from "../../components/MountainHeroBlueMountain/MountainHeroBlueMountain";
import MountainHeroHorseshoeResort from "../../components/MountainHeroHorseshoeResort/MountainHeroHorseshoeResort";
import MountainDescription from "../../components/MountainDescription/MountainDescription";
import MountainHeroMountStLouis from "../../components/MountainHeroMountStLouis/MountainHeroMountStLouis";
import MountainHeroWhistlerBlackcomb from "../../components/MountainHeroWhisterBlackcomb/MountainHeroWhisterBlackcomb";
import MountainHeroBigWhite from "../../components/MountainHeroBigWhite/MountainHeroBigWhite";
import data from "../../data/data.json";
import "./Mountain.scss";

export default class Mountain extends React.Component {
  mountain = () => {
    const route = this.props.match.params.mountainName;
    switch (route) {
      case "blue-mountain":
        return <MountainHeroBlueMountain />;
      case "horseshoe-resort":
        return <MountainHeroHorseshoeResort />;
      case "st-louis-moonstone":
        return <MountainHeroMountStLouis />;
      case "whistler-blackcomb":
        return <MountainHeroWhistlerBlackcomb />;
      case "big-white-ski-resort":
        return <MountainHeroBigWhite />;
      default:
        return <p>No mountain found</p>;
    }
  };

  render() {
    const mountainData = data.find(
      mountain => mountain.url === this.props.match.params.mountainName
    );

    return (
      <main className="mountain">
        {this.mountain()}
        <MountainDescription mountainData={mountainData} />
      </main>
    );
  }
}
