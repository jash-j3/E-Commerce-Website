import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import toast, { Toaster } from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    pass: "",
    cpass: "",
    phone:"",
  });
  const notify_emae = () =>{
    const toastId= toast.error(
      (t) => (
        <span>
          Email already exists,{" "}
          <span className="toast-span" onClick={() => {navigate("/login"); toast.dismiss(toastId);}}>
            Login Instead
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
  const notify_faf = () =>
    toast.error(
      (t) => (
        <span>
          {" "}
          Please fill all the required (<span className="asterix1">*</span>)
          fields.
        </span>
      ),
      {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      }
    );
  const notify_pnm = () =>
    toast.error((t) => <span>The passwords don't match.</span>, {
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
    const { fName, lName, email, pass, cpass, phone } = data;
    if (fName && email && pass && cpass && phone) {
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
        } else {
          notify_emae();
        }
      } else {
        notify_pnm();
      }
    } else {
      notify_faf();
    }
  }
  return (
    <div>
      <div className="container-sgnp">
        <form onSubmit={handleSubmit}>
          <div className="login-box">
            <div className="login-content">
              <h1>Sign Up</h1>
              <div className="wrap">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <label htmlFor="fName">
                  <h2>
                    First Name<span className="asterix">*</span>
                  </h2>
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
              <div className="wrap">
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
              <div className="wrap">
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <label htmlFor="email">
                  <h2>
                    Email ID<span className="asterix">*</span>
                  </h2>
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
              <div className="wrap">
                <i>
                  <FontAwesomeIcon icon={faPhone} />
                </i>
                <label htmlFor="phone">
                  <h2>
                    Phone<span className="asterix">*</span>
                  </h2>
                </label>
                <input
                  type={"number"}
                  name="phone"
                  id="phone"
                  value={data.phone}
                  onChange={onChange}
                  placeholder="Won't Call, Don't Worry!!"
                  className="phoneeeee"
                />
              </div>
              <div className="wrap">
                <i>
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <label htmlFor="pass">
                  <h2>
                    Password<span className="asterix">*</span>
                  </h2>
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
              <div className="wrap">
                <i>
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <label htmlFor="cpass">
                  <h2>
                    Confirm Password<span className="asterix">*</span>
                  </h2>
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
                Already a User? Login{" "}
                <Link to="/login" className="linktologin">
                  Here
                </Link>
              </h3>
              <button>SIGN UP</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default Signup;
