import React from 'react'
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import store from '../pages/store';
import { useSelector, useDispatch } from 'react-redux';
import {increment,decrement} from '../pages/store'


function Log()
{
  const count = useSelector((state) => state.loggedIn.value);
  const dispatch = useDispatch();
  console.log(count);
  if(count === 1)
  {console.log(count);
    
    return(<div>
      <button onClick  = {() =>{dispatch(decrement())}}>Logout</button> 
    </div>)
  }
  else {
    return(<div>
      <a href="">Login</a> | <a href="">Register</a>
    </div>)
  }
}

export default Log;