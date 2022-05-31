import "./Login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogoContainer">
            <img src="/assets/logo.png" alt="logo" className="loginImg" />
            <h3 className="loginLogo">FofocaChat</h3>
          </div>
          <span className="loginDesc">
            Lets sharing stories and befriend with people all around the world.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              minLength="8"
              ref={password}
              required
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
