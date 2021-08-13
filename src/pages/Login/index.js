import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import amazonImg from "../../assets/images/png/amazon_logo.png";
import { auth } from "../../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("Sign-in success: ", auth);
        if (auth) {
          history.replace("/");
        }
        setError("");
      })
      .catch((err) => {
        console.log("SignIn error: ", err.message);
        setError(err.message);
      });
  };

  const registerHandler = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log("SignUp success: ", auth);
        setError("");
        if (auth) {
          history.replace("/");
        }
      })
      .catch((err) => {
        console.log("SignUp error: ", err.message);
        setError(err.message);
      });
  };

  return (
    <div className="login">
      <Link to="/" className="login__logo">
        <img src={amazonImg} alt="logo" />
      </Link>

      <div className="login__wrapper">
        <h1 className="login__title">Login page</h1>
        <form className="login__form" onSubmit={loginHandler}>
          <h5 className="login__form-label">E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login__form-input"
          />

          <h5 className="login__form-label">Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login__form-input"
          />

          {error && <p className="error-text">{error}</p>}
          <button className="btn btn__primary">Sign in</button>
        </form>

        <p className="login__desc">
          By signing-in you agree the AMAZON FAKE CLONE Condutions of Use &
          sale. PLace see our Privecy Notice, our Cookies Notice and our
          Internet-Based Ads Notics.
        </p>

        <button className="btn btn__grey" onClick={registerHandler}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}
