import React from "react";
import "./App.css";
import HeaderTop from "./HeaderTop";
import ImageC from "./ImageC";
import TopCat from "./TopCat";
import Deals from "./Deals";
import Carou from "./Carou";
import Cashback from "./Cashback";
import Brands from "./Brands";
import Upto from "./Upto";
import Bgimg from "./Bgimg";
import Body from "./Body";
import Services from "./Services"
import Footer from "./Footer"
import P_App from './P_App'

function App() {
  return (
    <div>
      <HeaderTop />
      {/* <ImageC /> */}
      <Body />
      <TopCat />
      <Cashback />
      <Deals text="Todays Best Deals For You!" />
      <Carou />
      <Deals text="Choose By Brand" />
      <Brands />
      <Deals text="Get Upto 90% Off" />
      <Upto />
      <Bgimg />
      <Deals text="Services To Help You Shop" />
      <Services />
      <Footer />
      <P_App />
    </div>
  );
}

export default App;
