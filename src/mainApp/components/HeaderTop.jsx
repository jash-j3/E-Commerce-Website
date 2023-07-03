import React from "react";
// import { Product } from "../Backend(DB)/models/product";
import GreenH from "./GreenH";
import WhiteH from './WhiteH'
import { Outlet } from "react-router-dom";


function HeaderTop() {
  

  return (
    <div>
      <GreenH />
      <WhiteH />
      <main><Outlet /></main>
    </div>
  );
}
export default HeaderTop;
