import React from "react";
import "./Cashback.css";

function Cashback() {
  return (
    <div className="bgcolor">
      <div>
          <h1 id="eighty">Get Upto 80% OFF!</h1>

          <h6>On JcubeStore</h6>
          <p>It's Raining Discounts, what are you waiting for?</p>
      <div className="addtocart"><a href=""><div>Shop Now!</div></a></div>

      </div>
      <img id="crdit" src={require("../images/crdit.png")} alt="headphone"></img>
    </div>
  );
}

export default Cashback;
