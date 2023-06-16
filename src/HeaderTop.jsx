import React from "react";
import "./HeaderTop.css";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function HeaderTop() {
  return (
    <div>
      <div className="greenH">
        <div className="phone">
          <LocalPhoneRoundedIcon className="phone-icon" />
          +91 94260 23104
        </div>
        <div>Get 50% Off on Selected Items | Shop Now</div>
        <div>
          <a href="">Login</a> | <a href="">Register</a>
        </div>
      </div>
      <div className="whiteH">
        <div>
          <h1>JcubeStore</h1>
        </div>
        <div className="dwd">
          <div>
            <a href="">Deals</a>
          </div>
          <div>
            <a href="">What's New</a>
          </div>
          <div>
            <a href="">Delivery</a>
          </div>
        </div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search products"
            className="input-box"
          ></input>
          <SearchIcon />
        </div>
        <div className="iconss">
          <div className="searchbar">
            <AccountCircleOutlinedIcon /> <div className="acc-txt"><a href="">Account</a></div>
          </div>
          <div className="searchbar">
            <FavoriteBorderIcon /> <div className="acc-txt"><a href="">Wishlist</a></div>
          </div>
          <div className="searchbar">
            <ShoppingCartOutlinedIcon /> <div className="acc-txt"><a href="">Cart</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
