import React from 'react'
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import store from '../pages/store';
import { useSelector, useDispatch } from 'react-redux';
import {increment,decrement} from '../pages/store'
import { counterSlice } from '../pages/store';

function setToken(count)
{
    sessionStorage.setItem("Token" , count);
    getToken();
}

function getToken()
{
  let x =  sessionStorage.getItem('Token');
  console.log("Hello",x);
  return x;
}
function Log()
{
  const count = useSelector((state) => state.loggedIn.value);
  const dispatch = useDispatch();
  if( getToken() == 1)
  {
    
    return(<div>
      <button onClick  = {() => {setToken(0); window.location.reload();}}>Logout</button> 
    </div>)
  }
  else {
    return(<div>
      <a href="">Login</a> | <a href="">Register</a>
    </div>)
  }
}

export {setToken};
export default Log;
