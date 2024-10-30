import React from "react";
import "../style/Contact.css";

export default function Contact() {
  return (
    <div className="Contact p-2">
      <div className="container">
        <h1 className="mb-2">Let's get in touch!</h1>
        <h3 className="mb-0">Email</h3>
        <a href="mailto:gretha.gall@gmail.com" className="email-link">
          gretha.gall@gmail.com
        </a>
        <h3 className="mb-0">LinkedIn</h3>
        <a
          className="linkedin-link"
          href="https://www.linkedin.com/in/gretha-gall-6815ba328/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gretha Gall
        </a>
      </div>
    </div>
  );
}
