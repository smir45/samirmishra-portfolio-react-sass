import React from "react";
import "../scss/container-box.scss";

export default function Contentbox() {
  
  return (
    <div className="container-main-outer">
      <div className="main-container-box">
        <div class="wrapper">
          <h1 contenteditable data-heading="Samir">
            Samir
          </h1>
        </div>
      </div>
    </div>
  );
}
