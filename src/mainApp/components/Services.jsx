import React from "react";
import "./Services.css";

function Upto() {
  return (
    <div className="upto-main">
      <div className="upto-card marg">
        <div className="upto-txt">
          <h3>Frequently Asked Questions</h3>

          <p>Updates on safe Shopping in our Stores.</p>
        </div>
        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png"></img>
      </div>

      <div className="upto-card marg">
        <div className="upto-txt">
          <h3>JcubeStore Wallet Payments</h3>

          <p>Pay directly from our wallets and Save more!!</p>
        </div>
        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png"></img>
      </div>

      <div className="upto-card marg">
        <div className="upto-txt">
          <h3>Easy Returns and Replacement</h3>

          <p>Didn't Like the product? Don't worry.</p>
        </div>
        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png"></img>
      </div>
    </div>
  );
}

export default Upto;
