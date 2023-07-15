import "./Cart.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSolid,
  faPlus,
  faMinus,
  faLg,
  faFade,
} from "@fortawesome/free-solid-svg-icons";
import { increment, decrement, Empty } from "../pages/store";
import { useState } from "react";
import { GpsFixed } from "@mui/icons-material";
import { loadStripe } from "@stripe/stripe-js";
import { getToken } from "../components/Log";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

function Cart() {
  const navigate = useNavigate();
  const notify_log = () => {
    const myToast = toast.error(
      (t) => (
        <span>
          Please{" "}
          <span
            className="toast-span"
            onClick={() => {
              navigate("/login");
              toast.dismiss(myToast);
            }}
          >
            Login
          </span>{" "}
          to Continue.{" "}
        </span>
      ),
      {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      }
    );
  };

  function handler1(data1) {
    console.log(getToken());
    if (getToken() == 1) {
      handleBuy(data1);
    } else {
      console.log("Hello");
      notify_log();
    }
  }
  async function handleBuy() {
    let data2 = JSON.parse(JSON.stringify(cart));
    const stripePromise = await loadStripe(
      "pk_test_51NNfYPSFJzv4F3NJF6nw8wpnrhEM9q8ilUX1MKbT53ZzqP3AVgkLNaPHB2qPaYpFdtlQvakKoOFqQ1676HlvtmrO008KMPp1xv"
    );
    const res = await fetch(
      `http://localhost:3001/products/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data2),
      }
    );
    // if(res.statusCode === 500) return;
    const data3 = await res.json();
    // console.log(data)

    // toast("Redirect to payment Gateway...!")
    stripePromise.redirectToCheckout({ sessionId: data3 });
    dispatch(Empty());
  }

  const cart = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const listOfItems = cart.map((product, index) => {
    return (
      <div className="product-card">
        <div className="details">
          <div className="productImage">
            <img src={product.image} alt="product image" />
          </div>
          <div className="name-date">
            <h1> {product.name}</h1>
            <h2 style={{ fontSize: 20, fontWeight: 100, margin: "10px 0" }}>
              &#8377;{product.price}
            </h2>
            <div className="qty-count">
              <div className="quantity">
                <FontAwesomeIcon
                  icon={faMinus}
                  className="faFade"
                  onClick={() => {
                    if (product.productCount > 0) {
                      dispatch(decrement(index));
                    }
                  }}
                />
                <span className="counter"> {product.productCount}</span>
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => {
                    if (product.productCount < product.countInStock) {
                      dispatch(increment(index));
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <h2 className="price">
          <span>Total : &#8377;{product.price * product.productCount}</span>
        </h2>
        <Toaster />
      </div>
    );
  });

  console.log(cart);
  if (cart.length !== 0) {
    return (
      <>
        <div className="out">
          <div className="orders">
            <div className="product-list">{listOfItems}</div>
            <div className="place-order-button">
              <button
                type="button"
                className="remove"
                onClick={() => {
                  dispatch(Empty());
                  console.log(cart);
                }}
              >
                Empty Cart
              </button>
              <button
                type="button"
                className="place-order"
                onClick={() => {
                  handler1(cart);
                }}
              >
                Place Order
              </button>
            </div>
          </div>

          <div className="price-summary">
            <div className="price-details">
              <p>Price Details</p>
            </div>
            <div className="price-final">
              <h1>Price</h1>
              <h1> &#8377;{total}</h1>
            </div>
            <div className="Delivery">
              <h1>Delivery Tax</h1>
              <h1> &#8377; {Math.floor((1 / 100) * total)}</h1>
            </div>
            <div className="Total">
              <h1>Total</h1>
              <h1> &#8377; {total + Math.floor((1 / 100) * total)}</h1>
            </div>
          </div>
          <Toaster />
        </div>
        <Footer />
      </>
    );
  } else {
    return <div className="empty-image"> </div>;
  }
}

export default Cart;
