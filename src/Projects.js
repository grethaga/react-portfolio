import React from "react";
import "./Projects.css";

const importAllImages = (parameter) =>
  parameter
    .keys()
    .filter((path) => !path.includes("Profilbild.jpg"))
    .map(parameter);

const images = importAllImages(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

const imageData = [
  {
    src: images[0],
    href: "https://api-weather-project.netlify.app/",
    title: "Weather App",
    description: "Beschreibung des Wetterprojekts.",
  },
  {
    src: images[1],
    href: "https://world-clock-example.com",
    title: "World Clock",
    description: "Beschreibung des Weltuhrprojekts.",
  },
  {
    src: images[2],
    href: "https://ai-poem-generator.netlify.app/",
    title: "AI Poem Generator",
    description: "Beschreibung des KI-Gedichtgenerators.",
  },
];

export default function Projects() {
  return (
    <div className="container">
      <div className="row">
        {imageData.map((project, index) => (
          <div className="col-sm" key={index}>
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <img
                src={project.src}
                className="img-fluid d-none d-sm-block project-img"
                alt={project.title}
              />
            </a>
            <div className="project-description d-block d-sm-none mb-5">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.href}
                className="btn contact-btn learn-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
