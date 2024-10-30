import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../style/About.css";

function About() {
  return (
    <div class="About container p-2">
      <div class="row">
        <div class="col">
          <h1>Hi, my name is Gretha</h1>
          <h2 class="mt-3">Front-end Developer based in Vienna.</h2>
          <p class="about-text">
            For anyone who wants to start learning code, this workshop is very
            interesting. You will be challenged with different exercises, and
            everything is well explained, homework and deadlines are good for
            keep focus
          </p>
          <Link to="/work" class="btn contact-btn">
            See my projects
          </Link>
        </div>
        <div class="col d-none d-sm-block">
          <img
            class="profile-img img-fluid"
            src="images/Profilbild.jpg"
            alt="Gretha Gall"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
