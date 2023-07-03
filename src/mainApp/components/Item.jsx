import "./Item.css";
import React from "react";

function Item(params) {
  return (
    <div className="carouDiv">
      <img src={params.imag}></img>
      <div className="price-prod">
        <div>
          <p>{params.text}</p>
        </div>
        <div>
          <p>
            {" "}
            ₹ <span>{params.price}</span>
          </p>
        </div>
      </div>
      <div className="descc">
        <p>kgrbdkihjdsaskm</p>
      </div>
      <div className="addtocart"><a href=""><div>Details</div></a></div>
    </div>
  );
}

export default Item;
