import React from "react";
import Footer from "./Footer";
import "./Work.css";
import weather from "./images/weather-app.png";
import clock from "./images/world-clock.png";
import poem from "./images/AI-poem-generator.png";

export default function Work() {
  return (
    <div className="Work text-center me-5 ms-5">
      <div className="content">
        <h1 className="mb-2">What I've been working on</h1>

        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid mb-3 mt-5"
              src={weather}
              alt="weather-app"
            />
            <h3 className="text-center m-0">Weather Project</h3>
            <p className="text-muted mt-1 comment">
              built with HTML, CSS and JavaScript
            </p>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid mb-3 mt-5"
              src={clock}
              alt="world-clock project"
            />
            <h3 className="text-center m-0">World Clock Project</h3>
            <p className="text-muted mt-1 comment">
              built with HTML, CSS and JavaScript
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid mb-3 mt-5" src={poem} alt="ai project" />
            <h3 className="text-center m-0">AI Poem Generator Project</h3>
            <p className="text-muted mt-1 comment">
              built with HTML, CSS and JavaScript
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
