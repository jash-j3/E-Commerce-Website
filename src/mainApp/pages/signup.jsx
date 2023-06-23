import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer'

function Signup() {
  const element = <FontAwesomeIcon icon={faUser} />;
  const navigate = useNavigate();
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    pass: "",
    cpass: "",
  });
  function onChange(e) {
    const { name, value } = e.target;
    setData((previous) => ({ ...previous, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const { fName, lName, email, pass, cpass } = data;
    if (fName && lName && email && pass && cpass) {
      if (pass === cpass) {
        const fetchData = await fetch(`http://localhost:3001/users/signup`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const dataRes = await fetchData.json();
        console.log(dataRes);
        if (dataRes.alert) {
          navigate("/login");
        }
      }
    }
  }
  return (
    <div>
      <div class="container-sgnp">
            <form onSubmit={handleSubmit}>
        <div class="login-box">
          <div class="login-content">
            <h1>Sign Up</h1>
              <div class="wrap">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <label htmlFor="fName">
                  <h2>First Name</h2>
                </label>
                <input
                  type={"text"}
                  name="fName"
                  id="fname"
                  value={data.fName}
                  onChange={onChange}
                  placeholder="We'll call you by that!"
                />
              </div>
              <div class="wrap">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <label htmlFor="lName">
                  <h2>Last Name</h2>
                </label>
                <input
                  type={"text"}
                  name="lName"
                  id="lName"
                  value={data.lName}
                  onChange={onChange}
                  placeholder="Ufff, too many formalities?"
                />
              </div>
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
                    placeholder="Won't spam, Don't Worry!!"
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
                  placeholder="Choose a Strong One!"
                />
              </div>
              <div class="wrap">
                <i>
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <label htmlFor="cpass">
                  <h2>Confirm Password</h2>
                </label>
                <input
                    type={"password"}
                    name="cpass"
                    id="cpass"
                    value={data.cpass}
                    onChange={onChange}
                    placeholder="Make it Match the Strong One!"
                  />
              </div>
              <h3>
                Already a User? Login <Link to='/login' className="linktologin">Here</Link>
              </h3>
              <button>LOGIN</button>
          </div>
        </div>
            </form>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
