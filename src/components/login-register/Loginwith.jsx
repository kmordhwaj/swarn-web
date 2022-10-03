import "./loginwith.css";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context route/AuthContext";
import React, { useState } from "react";

const Loginwith = ({}) => {
  const [error, setError] = useState("");
  const { signinwithGoogle, signinwithFb } = UserAuth();
  const navigate = useNavigate();

  const googleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signinwithGoogle();
      navigate("/home");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  const fbLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signinwithFb();
      navigate("/home");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className="login">
      <span>Login with</span>
      <img
        onClick={googleLogin}
        style={{ height: 57, width: 57 }}
        src={`${process.env.PUBLIC_URL}/images/google-logo.png`}
        alt="logo"
        className="imgl"
      />
      {/* <img
        onClick={fbLogin}
        style={{ height: 50, width: 50 }}
        src={`${process.env.PUBLIC_URL}/images/fbook.png`}
        alt="logo"
        className="imgl"
      /> */}
    </div>
  );
};

export default Loginwith;
