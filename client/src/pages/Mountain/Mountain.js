import React from "react";

import MountainDescription from "../../components/MountainDescription/MountainDescription";

import data from "../../data/data.json";

import "./Mountain.scss";

export default function Mountain(props) {
  const mountainData = data.find(
    mountain => mountain.url === props.match.params.mountainName
  );

  return (
    <main className="mountain">
      <MountainDescription mountainData={mountainData} />
    </main>
  );
}
