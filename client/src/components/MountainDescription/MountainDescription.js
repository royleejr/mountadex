import React from "react";

import "./MountainDescription.scss";

export default function MountainDescription({ mountainData }) {
  return (
    <section className="mountain-description">
      <div className="mountain-description__container">
        <div className="mountain-description__map-container">
          <iframe
            className="mountain-description__map"
            title={`Map centered on ${mountainData.name}`}
            src={mountainData.googleMapsLink}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="mountain-description__text-container">
          <h2 className="mountain-description__title">{`About ${mountainData.name}`}</h2>
          <h3 className="mountain-description__location">
            {mountainData.location}
          </h3>
          <p className="mountain-description__description">
            {mountainData.description}
          </p>
          <a
            href={mountainData.officialWebsiteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mountain-description__button">
              Go to official website
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
