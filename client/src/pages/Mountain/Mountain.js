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
        return (
          <MountainHeroBlueMountain pageLocation={this.props.pageLocation} />
        );
      case "horseshoe-resort":
        return (
          <MountainHeroHorseshoeResort pageLocation={this.props.pageLocation} />
        );
      case "st-louis-moonstone":
        return (
          <MountainHeroMountStLouis pageLocation={this.props.pageLocation} />
        );
      case "whistler-blackcomb":
        return (
          <MountainHeroWhistlerBlackcomb
            pageLocation={this.props.pageLocation}
          />
        );
      case "big-white-ski-resort":
        return <MountainHeroBigWhite pageLocation={this.props.pageLocation} />;
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
