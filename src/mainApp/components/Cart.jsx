import './Cart.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Cart()
{
    const cart = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    console.log(cart);
    return (
        <div className="out">
        <div className="orders">
            <div className="product-list">
                <div className="product-card">
                    <img src= {cart[0].image} alt="product image"/>
                    <div>
                    <div className="name-date">
                        <h1> {cart[0].name}</h1>      
                        <h2 style = {{fontSize: 12}}>Rating: {cart[0].rating}</h2>
                        <div className="qty-count">
                        <div className="quantity">
                            <i className="fa-solid fa-plus fa-lg"></i>
                            <input type="text" maxlength="5" placeholder="Qty"/>
                            <i className="fa-solid fa-minus fa-lg"></i>
                        </div>
                        </div>
                    </div>
                    </div>
                    <h2 className = "price"><span>Price : &#8377;{cart[0].price}</span></h2>

                </div>
                
            </div>
            <div className="place-order-button">
                <button type="button" className="remove">Remove</button>
                <button type="button" className="place-order">Place Order</button>
            </div>
        </div>
        


        <div className="price-summary">
            <div className="price-details">
                <p>Price Details</p>
            </div>
            <div className="price">
                <h1>Price</h1>
                <h1>&#8377 XXXXXX</h1>
            </div>
            <div className="Disc">
                <h1>Discount</h1>
                <h1>&#8377 XXXXXX</h1>
            </div>
            <div className="Delivery">
                <h1>Delivery</h1>
                <h1>&#8377 XXXXXX</h1>
            </div>
            <div className="Total">
                <h1>Total</h1>
                <h1>&#8377 XXXXXX</h1>
            </div>
        </div>
    </div>
    )   
}   

export default Cart;