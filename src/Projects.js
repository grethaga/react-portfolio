import React from "react";
import "./Projects.css";
import weather from "./images/weather-app.png";
import clock from "./images/world-clock.png";
import poem from "./images/AI-poem-generator.png";

export default function Projects() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <a
            href="https://api-weather-project.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={weather}
              className="img-fluid d-none d-sm-block project-img"
              alt="Weather App"
            />
          </a>
          <div className="project-description d-block d-sm-none">
            <h2>Weather App</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here'.
            </p>
            <a href="/work.html" className="btn contact-btn learn-btn">
              Learn more
            </a>
          </div>
        </div>
        <div className="col-sm">
          <img
            src={clock}
            className="img-fluid d-none d-sm-block"
            alt="world-clock project"
          />
          <div className="project-description d-block d-sm-none mt-5">
            <h2>World Clock</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here'.
            </p>
            <a href="/work.html" className="btn contact-btn learn-btn">
              Learn more
            </a>
          </div>
        </div>
        <div className="col">
          <img
            src={poem}
            className="img-fluid d-none d-sm-block"
            alt=" AI project"
          />
          <div className="project-description d-block d-sm-none mt-5">
            <h2>AI Poem Generator App</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here'.
            </p>
            <a href="/work.html" className="btn contact-btn learn-btn">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
