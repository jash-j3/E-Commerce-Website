import React from "react";
import "./P_MainC.css";
import { Product } from "../../Backend(DB)/models/product";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Height } from "@mui/icons-material";

async function dataReturn(params) {
  const fetchData = await fetch(`http://localhost:3001/products/find/`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ name: params.name }),
  });

  const dataRes = await fetchData.json();
  console.log(dataRes);
  return dataRes[0];
}
function P_MainC() {
  const params = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dataReturn(params);
      setData(response);
    };

    fetchData();
  }, [params]);

  console.log(params);
  console.log(data);

  if (!data) {
    return <div style={{ height: "90vh" }}>Loading...</div>;
  }
  return (
    <div>
      <div className="prev-next">
        <div className="left">
          <Link to="/">Home</Link> /<span id="product-name">{data.name}</span>
        </div>
      </div>
      <div className="main-content">
        <div className="product-image">
          <img src={data.image} id="display-image" alt="DSLR image"></img>
          <div className="ratings">
            <h1> Ratings</h1>
            {/* <span className="fa fa-star"></span> */}
            Rated {data.rating} out of 5
            <br />
            <div className="context">
              <span className="fa fa-star rate "> </span>
              <span className="fa fa-star rate "> </span>
              <span className="fa fa-star rate "> </span>
              <span className="fa fa-star rate "> </span>
              <span className="fa fa-star rate "> </span>
              <br />
              <span className="fa fa-star rate "> </span>
              <span className="fa fa-star rate "> </span>
              <span className="fa fa-star rate "> </span>
              <span className="fa fa-star rate "> </span>
              <br />
              <span className="fa fa-star rate "> </span>
              <span className="fa fa-star rate "> </span>
              <span className="fa fa-star rate "> </span>
              <br />
              <span className="fa fa-star rate "> </span>
              <span className="fa fa-star rate "> </span>
              <br />
              <span className="fa fa-star rate "> </span>
              <br />
            </div>
            <div className="context" style={{ width: "200px" }}>
              <span className="rectangle">
                {" "}
                <span
                  className="rectangle rect"
                  style={{
                    backgroundColor: "orange",
                    width: `${data.Five}%`,
                  }}
                ></span>{" "}
              </span>{" "}
              <br />
              <span className="rectangle">
                {" "}
                <span
                  className="rectangle rect"
                  style={{
                    backgroundColor: "orange",
                    width: `${data.Four}%`,
                  }}
                ></span>
              </span>
              <br />
              <span className="rectangle">
                <span
                  className="rectangle rect"
                  style={{
                    backgroundColor: "orange",
                    width: `${data.Three}%`,
                  }}
                ></span>
              </span>
              <br />
              <span className="rectangle">
                {" "}
                <span
                  className="rectangle rect"
                  style={{
                    backgroundColor: "orange",
                    width: `${data.Two}%`,
                  }}
                ></span>
              </span>
              <br />
              <span className="rectangle">
                <span
                  className="rectangle rect"
                  style={{
                    backgroundColor: "orange",
                    width: `${data.One}%`,
                  }}
                ></span>{" "}
              </span>
              <br />
            </div>
          </div>
        </div>
        <div className="product-buy">
          <h1>{data.name}</h1>
          <span id="product-id">ID: {data._id} </span>
          <h2 id="price-display">&#8377;{data.price}</h2>
          <div className="quantity">
            <p>Quantity</p>
            <label htmlFor="quantity"></label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              placeholder="1"
              max={data.countInStock}
            ></input>
          </div>
          <button type="button" id="btn-cart">
            Add to Cart
          </button>
          <button type="button" id="btn-buy">
            Buy Now
          </button>
          <div className="product-info">
            <h3>Product info</h3>
            <p>{data.description}</p>
          </div>
          <hr></hr>
          <div className="product-info">
            <h3>Return and Refund Policy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
              rutrum mi, et ultrices augue. Nunc condimentum risus dui. Donec
              cursus, lacus sed blandit feugiat, felis erat volutpat justo, sit
              amet viverra mauris neque ac nibh. Donec eget lectus ante. Nam ac
              tellus ut velit condimentum sollicitudin. Ut viverra sed neque
              vitae consequat. Interdum et malesuada fames ac ante ipsum primis
              in faucibus. Nunc eu turpis id massa feugiat blandit et vitae
              ligula. Praesent eget commodo ante. Duis ultrices efficitur
              posuere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default P_MainC;
