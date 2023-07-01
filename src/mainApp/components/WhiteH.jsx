import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./HeaderTop.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route, useNavigate } from "react-router-dom";


function WhiteH() {
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(true);
  const [searchedPro, setSearchedPro] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchQuery, setSearchQuery] = useState("");
  // function handleChange(event) {
  //   fetch(`http://localhost:3001/products?name=${event.target.value}`).then(
  //     (res)=>{console.log(res.json());}
  //   );
  // }

  const handler = async(event) =>{
    event.preventDefault();
    setSearchQuery(event.target.value);
  }
  const handleChange = async (event) => {
    event.preventDefault();
    if (event.target.value != "") {
      setIsSearching(false);
    } else {
      setIsSearching(true);
    }

    const fetchData = await fetch(`http://localhost:3001/products/find/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name: event.target.value }),
    });

    const dataRes = await fetchData.json();

    setSearchedPro([dataRes]);
    if (event.key !== "Enter") return;
    if(dataRes[0]) navigate(`/products/id/${dataRes[0]._id}`);
    window.location.reload(0);
    // if(!dataRes.message)
    // {
    //     navigate(`/products/${dataRes.name}`);
    //     window.location.reload(0);
    // }
  };

  return (
    <div className="whiteH">
      <Link to="/">
        <div>
          <h1>CartDiya</h1>
        </div>
      </Link>
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
      <div className="searchbar sb">
        <input
          type="text"
          placeholder="Search products"
          className="input-box"
          id="searcher"
          onKeyUp={handleChange}
          onInput = {handler}
          value = {searchQuery}
        ></input>
        <SearchIcon />
        <div className="srch" style={isSearching ? { display: "none" } : {}}>
          {searchedPro[0] && searchedPro[0].length > 0
            ? searchedPro[0].map((p) => {
                if (p) {
                  let lnk = `/products/id/${p._id}`;
                  return (
                    <div>
                      <Link to={lnk} onClick = {() => {setIsSearching(1); setSearchQuery('');}}>
                        <div className="srchpro">
                          <div className="srchproimg">
                            <img
                              src={p.image}
                              alt="product-img"
                              className="srchimg"
                            />
                          </div>
                          <div className="srchdet">
                            <h3>{p.name}</h3>
                            <p className="srchp">{p.description}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                }
              })
            : "No Products Found"}
        </div>
      </div>
      <div className="iconss">
        <div className="searchbar">
          <Link to="/login">
            <AccountCircleOutlinedIcon />{" "}
          </Link>
        </div>

        <div className="searchbar">
          <a href="">
            {" "}
            <FavoriteBorderIcon />{" "}
          </a>
        </div>
        <div className="searchbar">
          <Link to = "/cart">
            <ShoppingCartOutlinedIcon />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WhiteH;
