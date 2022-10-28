import React from "react";
import Image from "../../components/login-register/Image";
import LoginForm from "../../components/login-register/LoginForm";
import { Helmet } from "react-helmet";

const Login = ({ setAuth }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Swarn Holidays</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className="bodyReg">
        <Image />
        <LoginForm setAuth={setAuth} />
      </div>
    </>
  );
};

export default Login;
