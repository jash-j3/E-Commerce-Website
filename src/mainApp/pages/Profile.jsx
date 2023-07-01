import React from "react";
import "./Profile.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function Profile() {
  const currentUser = useSelector((state) => state.user.details);
  
    if(currentUser.length>0){
  return (
    <>
      <div className="pro-bdy">
        <div class="pro-cont">
          <div class="username">
            <h3>{currentUser[currentUser.length-1].fName} {currentUser[currentUser.length-1].lName}</h3>
            <p>{currentUser[currentUser.length-1].email}</p>
            <p>{currentUser[currentUser.length-1].phone}</p>
          </div>
          <Link to='/'>
              <div class="button">
                <div class="button__text">Home</div>
              </div>
          </Link>
          <Link to='/cart'>
              <div class="button">
                <div class="button__text">Cart</div>
              </div>
          </Link>
          
          {/* <div class="button">
            <div class="button__text">About</div>
          </div>
          <div class="button">
            <div class="button__text">Education</div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  )}
  else{
    return <>LOGIN</>
  };
}

export default Profile;
