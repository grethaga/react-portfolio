import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="contact-box d-flex justify-content-between mb-5">
          <div>
            <h4>Work Inquiry</h4>
            <p className="text-muted mb-0">Let's work togheter</p>
          </div>
          <div className="mt-3">
            <a href="/contact.html" className="btn contact-btn">
              contact me
            </a>
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
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/grethaga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
