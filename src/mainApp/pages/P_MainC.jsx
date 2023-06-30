import React from "react";
import "./P_MainC.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import { getToken } from "../components/Log";
import toast, { Toaster } from "react-hot-toast";
import { Navigate , useNavigate} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {Add} from "./store";

async function dataReturn(params) {
  const id=params.id
  const fetchData = await fetch(`http://localhost:3001/products/id/${id}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ id: id}),
  });

  const dataRes = await fetchData.json();
  console.log(dataRes);
  return dataRes;
}


function P_MainC() {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentCart = useSelector((state) => state.cart.products);
  const params = useParams();
  const [data, setData] = useState(null);

  const addToCart =  (data)  =>{ dispatch(Add(data));};
  const notify_log = () => {
    const myToast = toast.error(
      (t) => (
        <span>
          Please <span className="toast-span" onClick={() => {navigate("/login"); toast.dismiss(myToast); }}>
          Login
        </span> to Continue.{" "}
          
        </span>
      ),
      {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      }
    )
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await dataReturn(params);
      setData(response);
    };

    fetchData();
  }, [params]);

  function handler(data1)
  {
    if(getToken() == 1) handleBuy(data1);
    else notify_log();
  }
  async function handleBuy(data1) {
    const stripePromise = await loadStripe('pk_test_51NNfYPSFJzv4F3NJF6nw8wpnrhEM9q8ilUX1MKbT53ZzqP3AVgkLNaPHB2qPaYpFdtlQvakKoOFqQ1676HlvtmrO008KMPp1xv')
          const res = await fetch(`http://localhost:3001/products/create-checkout-session`,{
            method : "POST",
            headers  : {
              "content-type" : "application/json"
            },
            body  : JSON.stringify(data1)
          })
          // if(res.statusCode === 500) return;

          const data2 = await res.json()
          // console.log(data)

          // toast("Redirect to payment Gateway...!")
          stripePromise.redirectToCheckout({sessionId : data2}) 
  }



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
          <button type="button" id="btn-cart" onClick = {() =>{addToCart(data); console.log(currentCart);}}>
            Add to Cart
          </button>
          <button type="button" id="btn-buy" onClick={()=>{handler(data)}}>
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
                  All Returns must be postmarked within ten(10) days of the purchase date. All the returned items must be new and unused condition, with all original tags and labels attached. All returned items must be in new and unused condition, with all original tags and labels attached. After receiving your return and inspecting the condition of your item, we will process your return or exchange. Please allow at least seven days from the receipt of your item to process your return or exchange. xRefunds may take 1-2 billing cycles to appear on your credit card statement, depending on your credit card company. 
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default P_MainC;
