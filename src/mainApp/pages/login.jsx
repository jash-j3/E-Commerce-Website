import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        pass: "",
      });
      function onChange(e) {
        const { name, value } = e.target;
        setData((previous) => ({ ...previous, [name]: value }));
      }
      async function handleSubmit(e) {
        e.preventDefault();
        const {  email, pass} = data;
        if (email && pass) {
            const fetchData = await fetch(
                `http://localhost:3001/users/login`,
                {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(data),
                }
              );
        
              const dataRes = await fetchData.json();
              console.log(dataRes);
              if (dataRes.alert) {
                setTimeout(() => {
                    navigate("/");
                  }, 1000);
              }
        }
      }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type={"email"}
          name="email"
          id="email"
          value={data.email}
          onChange={onChange}
        />
        <label htmlFor="pass">Password</label>
        <input
          type={"password"}
          name="pass"
          id="pass"
          value={data.pass}
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
      <Link to= '/signup'>
      <button>New? Signup</button></Link>
    </div>
  )
}

export default Login