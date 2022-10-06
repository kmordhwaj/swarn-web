import React from "react";
import Image from "../../components/login-register/Image";

import LoginForm from "../../components/login-register/LoginForm";

const Login = ({setAuth}) => {
  return (
    <div className="bodyReg">
      <Image />
      <LoginForm setAuth= {setAuth}/>
    </div>
  );
};

export default Login;
