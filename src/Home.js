import React from "react";
import Projects from "./Projects";
import Footer from "./Footer";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home p-2">
      <div className="hero">
        <h1>Hi, my name is Gretha</h1>
        <p className="mb-4">Front-end Developer based in Vienna.</p>
        <div className="text-center">
          <Link to="/contact" className="btn contact-btn">
            contact me
          </Link>
        </div>
      </div>
      <h3 className="custom-heading my-5">recent projects</h3>
      <Projects />
      <Footer />
      <div />
    </div>
  );
}

export default Home;
