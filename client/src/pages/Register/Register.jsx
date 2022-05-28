import "./Register.css";

function Register() {
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
          <div className="loginBox">
            <input type="text" placeholder="Username" className="loginInput" />
            <input type="email" placeholder="Email" className="loginInput" />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
