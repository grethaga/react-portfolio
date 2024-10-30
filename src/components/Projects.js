import React from "react";
import "../style/Projects.css";
import { imageData } from "./imageLoader";

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
