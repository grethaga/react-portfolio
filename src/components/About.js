import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../style/About.css";
import Profilbild from "../images/Profilbild.jpg";

function About() {
  return (
    <div className="About">
      <div className="section d-flex gap-5">
        <div className="">
          <h1>Hi, my name is Gretha</h1>
          <h2 className="mt-3">Front-end Developer based in Vienna.</h2>
          <p className="about-text">
            I graduated from an HLTW specializing in tourism and business, then
            began studying Software & Information Engineering. <br />
            Along the way, I briefly stepped off this path to fulfill a
            childhood dream by successfully opening my own restaurant, but later
            returned to the tech field, where I discovered a real passion for
            front-end development through a dedicated course.
            <br />
            I'm curious, love working in a team, and am excited to continue
            expanding my skills and knowledge in web development.
          </p>
          <Link to="/work" className="btn contact-btn">
            See my projects
          </Link>
        </div>
        <div className="profile-image">
          <img
            className="img-fluid rounded h-75"
            src={Profilbild}
            alt="Gretha Gall"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
