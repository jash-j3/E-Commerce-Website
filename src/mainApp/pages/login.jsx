import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { Toaster, toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../components/Log";
import { Userr } from "./store";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [data, setData] = useState({
    email: "",
    pass: "",
  });
  const currentUser = useSelector((state) => state.user.details);
  const addToStore = (data) => {
    let newData = JSON.parse(JSON.stringify(data));
    dispatch(Userr(newData));
  };
  const notify_nu = () =>{
    const toastId = toast.error(
      (t) => (
        <span>
          Account dosen't exist,{" "}
          <span className="toast-span" onClick={() => {navigate("/signup"); toast.dismiss(toastId);}}>
            Signup Instead
          </span>
        </span>
      ),
      {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      }
    )};
  const notify_pi = () =>
    toast.error((t) => <span>Password Incorrect, Try Again.</span>, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  function onChange(e) {
    const { name, value } = e.target;
    setData((previous) => ({ ...previous, [name]: value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const { email, pass } = data;
    if (email && pass) {
      const fetchData = await fetch(`http://localhost:3001/users/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataRes = await fetchData.json();
      console.log(dataRes);
      if (dataRes.alert) {
        setToken(1);
        addToStore(dataRes.data)
        navigate("/");
        window.location.reload();
        
      } else {
        if (dataRes.alertin) {
          notify_pi();
        } else {
          notify_nu();
        }
      }
    }
  }
  return (
    <div>
      <div className="container-sgnp">
        <form onSubmit={handleSubmit}>
          <div className="login-box">
            <div className="login-content">
              <h1>Login</h1>

              <div className="wrap">
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
                  placeholder="ilove@CartDiya.com"
                />
              </div>
              <div className="wrap">
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
                New? Signup{" "}
                <Link to="/signup" className="linktologin">
                  Here
                </Link>
              </h3>
              <button>LOGIN</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default Login;
