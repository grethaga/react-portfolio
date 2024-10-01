import React from "react";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <div className="nav-bar">
      <nav className="d-flex justify-content-between">
        <h3 className="m-0 pt-2 d-none d-sm-block custom-heading">
          Gretha Gall
        </h3>
        <ul className="list-unstyled d-flex">
          <li className="me-1">
            <a href="/index.html">Home</a>
          </li>
          <li className="me-1">
            <a href="/about.html" className="active">
              About
            </a>
          </li>
          <li className="me-1">
            <a href="/work.html">Work</a>
          </li>
          <li>
            <a href="/contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
