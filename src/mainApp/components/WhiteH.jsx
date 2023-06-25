import React, {useState} from 'react'
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./HeaderTop.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route, useNavigate } from 'react-router-dom';

let searchQuery='';
function WhiteH() {
  const navigate = useNavigate()
    
    // const [searchQuery, setSearchQuery] = useState("");
    // function handleChange(event) {
    //   fetch(`http://localhost:3001/products?name=${event.target.value}`).then(
    //     (res)=>{console.log(res.json());}
    //   );
    // }
    
    const handleChange = async(event)=>{
      event.preventDefault()
        if(event.key !== "Enter") return;
        // const fetchData = await fetch(`http://localhost:3001/products/find/`,{
        //   method : "POST",
        //   headers : {
        //     "content-type" : "application/json"
        //   },
        //   body : JSON.stringify({name:event.target.value})
        // })
        
        // const dataRes = await fetchData.json()
        navigate(`/products/${event.target.value}`);
            window.location.reload(0);
        // if(!dataRes.message)
        // {
        //     navigate(`/products/${dataRes.name}`);
        //     window.location.reload(0);
        // }
    }

  return (
    <div className="whiteH">
        <Link to="/">
          <div>
            <h1>JcubeStore</h1>
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
              id = "searcher"
              onKeyUp={handleChange}
            ></input>
          <SearchIcon />
        </div>
        <div className="iconss">
          <div className="searchbar">
            
            <Link to= '/login'><AccountCircleOutlinedIcon /> </Link>
            </div>
  
          <div className="searchbar">
             <a href=""> <FavoriteBorderIcon /> </a>
          </div>
          <div className="searchbar">
            <a href=""><ShoppingCartOutlinedIcon /> </a>
          </div>                         
        </div>
      </div>
  )
}

export default WhiteH;
export {searchQuery};
