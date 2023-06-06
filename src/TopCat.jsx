import React from "react";
import "./TopCat.css";

const catCards = [
  {
    imgsrc:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png",
    text: "Tech",
  },
  {
    imgsrc:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png",
    text: "Books",
  },
  {
    imgsrc:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png",
    text: "Travel",
  },
  {
    imgsrc:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png",
    text: "Sneakers",
  },
  {
    imgsrc:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png",
    text: "Furniture",
  },
  {
    imgsrc:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png",
    text: "Hand Bags",
  },
];

function categories(cards) {
  return (
    <div className="card">
      <a href="">
        <img className="tech-img" src={cards.imgsrc}></img>
        <h3>{cards.text}</h3>
      </a>
    </div>
  );
}

function TopCat() {
  return (
    <div>
      <div className="shops">
        <div className="top-cat-h3">
          <h3>Shop Our Top Categories</h3>
        </div>
        <div className="cards-grid">{catCards.map(categories)}</div>
      </div>
    </div>
  );
}

export default TopCat;
