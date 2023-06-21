import React, {useState} from 'react'
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

let searchQuery='';
function WhiteH() {
    
    // const [searchQuery, setSearchQuery] = useState("");
    // function handleChange(event) {
    //   fetch(`http://localhost:3001/products?name=${event.target.value}`).then(
    //     (res)=>{console.log(res.json());}
    //   );
    // }
    
    const handleChange = async(event)=>{
      event.preventDefault()
      
        const fetchData = await fetch(`http://localhost:3001/products/find/`,{
          method : "POST",
          headers : {
            "content-type" : "application/json"
          },
          body : JSON.stringify({name:event.target.value})
        })
  
        const dataRes = await fetchData.json()
        console.log(dataRes)
    }

  return (
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
  )
}

export default WhiteH;
export {searchQuery};
