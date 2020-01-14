import React from "react";
import { NavLink } from "react-router-dom";
import "./AppHeader.css";

const AppHeader = () => (
  <header>
    <div className="center-column">
      <h1>🍽 Feed me</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/">App Core</NavLink>
        </li>
        <li>
          <NavLink to="/snps">Snps</NavLink>
        </li>
        <li>
          <NavLink to="/app-two">App Two</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
