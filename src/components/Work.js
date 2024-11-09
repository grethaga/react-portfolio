import React from "react";
import Footer from "./Footer";
import { imageData } from "./imageLoader";
import "../style/Work.css";

export default function Work() {
  return (
    <div className="Work text-center">
      <h1 className="mb-5 pb-4">What I've been working on</h1>

      <div className="col">
        {imageData.map((project, index) => (
          <div className="col-sm mb-5" key={index}>
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <img
                src={project.src}
                className="img-fluid d-block project-image my-4 rounded mx-auto"
                alt={project.title}
                style={{ maxWidth: "60%" }}
              />
            </a>
            <h3 className="text-center m-0">{project.title}</h3>
            <p className="text-muted mt-1 comment">built with {project.tags}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
