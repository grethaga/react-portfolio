import React from "react";
import "./NavigationBar.css";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  return (
    <div className="navigation">
      <nav className="d-flex justify-content-between p-4">
        <h3 className="m-0 pt-2 d-none d-sm-block custom-heading">
          Gretha Gall
        </h3>
        <ul className="list-unstyled d-flex">
          <li className="me-1">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "rgb(52, 55, 60)" : "rgb(52, 55, 60)",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Home
            </NavLink>
          </li>
          <li className="me-1">
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "rgb(52, 55, 60)" : "rgb(52, 55, 60)",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              About
            </NavLink>
          </li>
          <li className="me-1">
            <NavLink
              to="/work"
              style={({ isActive }) => ({
                color: isActive ? "rgb(52, 55, 60)" : "rgb(52, 55, 60)",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "rgb(52, 55, 60)" : "rgb(52, 55, 60)",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
