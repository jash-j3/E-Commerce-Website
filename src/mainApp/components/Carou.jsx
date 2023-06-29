import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Carou.css";
import { Link } from "react-router-dom";
function Carou() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  const products = [
    {
      id: 1,
      imag: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e54b76914b262f2448_headphone-min.png",
      text: "BoAT Headphones",
      price: 3899,
    },
    {
      id: 1,
      imag: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e74b769109fd2f245a_tomford%20watch-min.png",
      text: "Fireboltt Smartwatch",
      price: 3999,
    },
    {
      id: 1,
      imag: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png",
      text: "Mini-Speaker BoAT",
      price: 1999,
    },
    {
      id: 2,
      imag: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png",
      text: "Instamax Mini Camera",
      price: 8999,
    },
    {
      id: 1,
      imag: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e48b497e63cc46b800_base%20camp%20duffel%2002-min.png",
      text: "Skybags Duffle",
      price: 3199,
    },
    {
      id: 1,
      imag: "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e7e006821d3b04db74_Tote%20Medium-min.png",
      text: "Baggit Purse",
      price: 1999,
    },
    {
      id: 1,
      imag: "https://static.wixstatic.com/media/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg/v1/fill/w_413,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/22e53e_7066c7318bb34be38d3a4f2e3a256021~mv2.jpg",
      text: "DNMX Cap",
      price: 599,
    },
  ];

  return (
    <div className="carouClass">
      <Carousel breakPoints={breakPoints} pagination={false}>
        {products.map((product) => (
          <Link to={`/products/${product.text}`}>
            <Item
              imag={product.imag}
              text={product.text}
              price={product.price}
            ></Item>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}

export default Carou;
