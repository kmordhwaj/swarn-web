import React, { useState } from "react";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";
import Gap from "../../components/login-register/Gap";
import Loginwith from "../../components/login-register/Loginwith";
import { UserAuth } from "../../context route/AuthContext";

const Form = () => {
  const [fName, setFName] = useState("");
  const [sName, setSName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password, fName, sName, phone);
      navigate("/home");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="rightBody">
        <form action="" onSubmit={handleSubmit}>
          <div className="form">
            <input
              onChange={(event) => setFName(event.target.value)}
              type="text"
              placeholder="Enter Your First Name"
              className="textInput"
            />
            <input
              onChange={(event) => setSName(event.target.value)}
              type="text"
              placeholder="Enter Your Second Name"
              className="textInput"
            />
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter Your Email"
              className="textInput"
            />
            <input
              onChange={(event) => setPhone(event.target.value)}
              type="tel"
              placeholder="Enter Your Mobile Number"
              className="textInput"
            />
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Enter Your Password"
              className="textInput"
            />
            <input
              onChange={(event) => setConfirmPassword(event.target.value)}
              type="password"
              placeholder="Confirm Your Password"
              className="textInput"
            />
          </div>
          <button className="navButto">Register</button>
        </form>
        <div className="login">
          <span className="already">Already have an account?</span>
          <nav>
            <Link to="/" className="loginaccount">
              Login
            </Link>
          </nav>
        </div>
        <Gap />
        <Loginwith />
      </div>
    </div>
  );
};

export default Form;
