import React from "react";

import personReadingMap from "../../assets/images/adam-stefanca-uwOKynS43U8-unsplash.jpg";

import "./SiteDescription.scss";

export default function SiteDescription() {
  return (
    <section className="site-description">
      <div className="site-description__container">
        <div className="site-description__image-container">
          <img
            className="site-description__image"
            src={personReadingMap}
            alt="Person reading map"
          />
        </div>
        <div className="site-description__text-container">
          <h2 className="site-description__title">About Mountadex</h2>
          <p className="site-description__description">
            Mountadex takes you on an interactive visual journey of Canada's
            world-class ski resorts. Whether you're planning your next alpine
            escape or just want to learn more about Canada's favorite ski hills,
            Mountadex has all the information you'll need. Explore mountain
            stats, browse through animated trail maps featuring lit-up run
            information, and find useful links for buying tickets and getting
            directions to your favorite resorts... all at your fingertips.
          </p>
        </div>
      </div>
    </section>
  );
}
