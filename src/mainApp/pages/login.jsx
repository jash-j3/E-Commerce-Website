import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer'

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
      <div class="container-sgnp">
            <form onSubmit={handleSubmit}>
        <div class="login-box">
          <div class="login-content">
            <h1>Login</h1>

              <div class="wrap">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <label htmlFor="email">
                  <h2>Email ID</h2>
                </label>
                  <input
                    type={"email"}
                    name="email"
                    id="email"
                    value={data.email}
                    onChange={onChange}
                    placeholder="ilove@jcubestore.com"
                  />
              </div>
              <div class="wrap">
                <i>
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <label htmlFor="pass">
                  <h2>Password</h2>
                </label>
                <input
                  type={"password"}
                  name="pass"
                  id="pass"
                  value={data.pass}
                  onChange={onChange}
                  placeholder="Recall the Strong One!"
                />
              </div>
              <h3>
                New? Signup <Link to='/signup' className="linktologin">Here</Link>
              </h3>
              <button>SIGN UP</button>
          </div>
        </div>
            </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login