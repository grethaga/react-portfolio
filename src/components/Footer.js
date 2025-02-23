import React from "react";
import "../style/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container p-0">
      <div className="footer">
        <div className="contact-box px-sm-5 justify-content-between mb-5">
          <div>
            <h4>Work Inquiry</h4>
            <p className="text-muted mb-0">Let's work togheter</p>
          </div>
          <div className="mt-3">
            <Link to="/contact" className="btn contact-btn">
              contact me
            </Link>
          </div>
        </div>

        <a href="mailto:gretha.gall@gmail.com" className="email-link">
          gretha.gall@gmail.com
        </a>
        <div className="social-links mt-4">
          <a
            href="https://www.linkedin.com/in/gretha-gall-6815ba328/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/grethaga"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
