import React from "react";
import "../scss/navbar.scss";

export default function NavBar() {
  return (
    <div className="container">
      <div className="navbar-main-container">
        <div className="logo-text-div">
          <div className="h1">Samir Mishra</div>
        </div>
        <div className="navbar-left">
          <ul>
            <li>service</li>
            <li>projects</li>
            <li>gallery</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
