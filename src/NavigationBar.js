import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="nav-bar">
      <div>
        <nav className="d-flex justify-content-between">
          <h3 className="m-0 pt-2 d-none d-sm-block custom-heading">
            Gretha Gall
          </h3>
          <ul className="list-unstyled d-flex">
            <li className="me-1">
              <Link to="/home">Home</Link>
            </li>
            <li className="me-1">
              <Link to="/about">About</Link>
            </li>
            <li className="me-1">
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
