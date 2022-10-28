import React from "react";
import Image from "../../components/login-register/Image";
import LoginForm from "../../components/login-register/LoginForm";
import { Helmet } from "react-helmet";

const Login = ({ setAuth, title }) => {
  return (
    <>
      {/* seo portion */}
      <Helmet>
        <meta charset="utf-8" />
        <title>{title}</title>
        <meta
          name="description"
          content="Login, and continuously be in touch with best deals on holidays packages."
        />
        <meta
          name="keywords"
          content="Swarn-holidays swarn-holidays toor travel holiday-packages swarn-holidays-raipur swarn-holidays-login"
        />
      </Helmet>
      <div className="bodyReg">
        <Image />
        <LoginForm setAuth={setAuth} />
      </div>
    </>
  );
};

Login.defaultProps = {
  title: "Swarn Holidays | Login",
};

export default Login;
