import React from 'react'
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import store from '../pages/store';
import { useSelector, useDispatch } from 'react-redux';
import { counterSlice } from '../pages/store';
import { Link } from 'react-router-dom';
import './Log.css';

function setToken(count)
{
    localStorage.setItem("Token" , count);
    getToken();
}

function getToken()
{
  let x =  localStorage.getItem('Token');
  return x;
}
function Log()
{
  const dispatch = useDispatch();
  if( getToken() == 1)
  {
    return(<div className='logout-btn'>
      <button className='logout-btn' onClick  = {() => {setToken(0); window.location.reload();}}>Logout</button> 
    </div>)
  }
  else {
    return(<div>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
    </div>)
  }
}

export {setToken, getToken};
export default Log;
