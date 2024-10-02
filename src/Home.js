import React from "react";
import Projects from "./Projects";
import Footer from "./Footer";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="hero">
        <h1>Hi, my name is Gretha.</h1>
        <p className="mb-4">Front-end Developer based in Vienna.</p>
        <div className="text-center">
          <a href="/contact.html" className="btn contact-btn">
            contact me
          </a>
        </div>
      </div>
      <h3 className="custom-heading">recent projects</h3>
      <Projects />
      <Footer />
      <div />
    </div>
  );
}

export default Home;
