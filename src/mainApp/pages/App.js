import React from "react";
import "./App.css";
import HeaderTop from "../components/HeaderTop";
import TopCat from "../components/TopCat";
import Deals from "../components/Deals";
import Carou from "../components/Carou";
import Cashback from "../components/Cashback";
import Brands from "../components/Brands";
import Upto from "../components/Upto";
import Bgimg from "../components/Bgimg";
import Body from "../components/Body";
import Services from "../components/Services"
import Footer from "../components/Footer"
import P_App from './P_App'
import WhiteH from "../components/WhiteH";
import GreenH from "../components/GreenH";
function App() {
  return (
    <div>
      {/* <GreenH />
      <WhiteH /> */}
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
      {/* <P_App /> */}
    </div>
  );
}

export default App;
