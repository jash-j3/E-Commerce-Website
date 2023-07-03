import React from 'react'
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import store from '../pages/store';
import { useSelector, useDispatch } from 'react-redux';
import { counterSlice } from '../pages/store';
import { Link } from 'react-router-dom';
import './Log.css';

import { Userrr } from "../pages/store";

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
  const currentUser = useSelector((state) => state.user.details);
  const dispatch = useDispatch();
  const addToStore = (data) => {
    let newData = JSON.parse(JSON.stringify(data));
    dispatch(Userrr(newData));
  };
  if( getToken() == 1)
  {
    return(<div className='logout-btn'>
      <button className='logout-btn' onClick  = {() => {setToken(0); addToStore({});window.location.reload();}}>Logout</button> 
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
