import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';


function Signup() {
    // useNavigate();
    const [data, setData] = useState({
        fName: "",
        lName: "",
        email: "",
        pass: "",
        cpass: "",
      });
    function onChange(e) {
        const {name,value}=e.target;
        setData((previous)=>({...previous,[name]:value}));
        console.log(data);
        
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const {fName, lName, email, pass, cpass}=data;
        if (fName && lName && email && pass && cpass) {
            if (pass === cpass) {
                const fetchData = await fetch(`http://localhost:3001/users/signup`,{
                    method : "POST",
                    headers : {
                      "content-type" : "application/json"
                    },
                    body : JSON.stringify(data)
                  })
        
                  const dataRes = await fetchData.json()
            }
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label htmlFor="fName" >First Name</label>
          <input type={"text"} name="fName" id="Name" value={data.fName} onChange={onChange}/>
          <label htmlFor="lName">Last Name</label>
          <input type={"text"} name="lName" id="lName" value={data.lName} onChange={onChange}/>
          <label htmlFor="email">Email</label>
          <input type={"email"} name="email" id="email" value={data.email} onChange={onChange}/>
          <label htmlFor="pass">Password</label>
          <input type={"password"} name="pass" id="pass" value={data.pass} onChange={onChange}/>
          <label htmlFor="cpass">Confirm Password</label>
          <input type={"password"} name="cpass" id="cpass" value={data.cpass} onChange={onChange}/>
          <button>Submit</button>
      </form>
    </div>
  );
}

export default Signup;
