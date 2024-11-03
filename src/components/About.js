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
            I graduated from an HLTW specializing in tourism and business, then
            began studying Software & Information Engineering. Along the way, I
            briefly stepped off this path to fulfill a childhood dream by
            opening my own restaurant, but later returned to the tech field,
            where I discovered a real passion for front-end development through
            a dedicated course. I'm curious, love working in a team, and am
            excited to continue expanding my skills and knowledge in web
            development.
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
