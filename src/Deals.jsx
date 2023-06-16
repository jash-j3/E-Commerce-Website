import React from "react";
import "./Deals.css";

function Deals(params) {
  return (
    <div>
      <div className="top-cat-h3">
        <h3>{params.text}</h3>
      </div>
    </div>
  );
}

export default Deals;
