import React from "react";
import MountainHeroBlueMountain from "../../components/MountainHeroBlueMountain/MountainHeroBlueMountain";
import MountainHeroHorseShoeResort from "../../components/MountainHeroHorseShoeResort/MountainHeroHorseShoeResort";
import MountainDescription from "../../components/MountainDescription/MountainDescription";
import data from "../../data/data.json";
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
