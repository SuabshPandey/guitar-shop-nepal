import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import baseUrl from "../../home/Constant";
import { NavLink } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import swal from 'sweetalert';
import "./Login.css";




const Login = () => {
  const navigate = useNavigate();
  const login_button = document.getElementById('login_button')




  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (event) => {
    let name = event.target.name;
    let value = event.target.value;


    setUser({ ...user, [name]: value });
    // setUser({});
  };


  const loginHandler = async (event) => {
    event.preventDefault();
    if (user.email === "" || user.password === "") {
      swal("", "Please fill the form", "error")
    }
    else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email))) {
      swal("", "Enter a valid email address", "error")
    }


    else {

      login_button.disabled = true
      const { email, password } = user;
      console.log(user.email)
      const response = await fetch(`${baseUrl}/user/login`, {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);

      if (data.code === 200) {
        swal({title: "Success", text:"Login Successfull", icon: "success", timer: 2000, buttons: false});
        navigate("/user");
        setTimeout(window.location.reload.bind(window.location), 1500);
      } else alert("Invalid Credentials");

      console.log("Access Token", data.data.access_token);

      const token = data.data.access_token;
      localStorage.setItem("key", token);
      setUser({
        email: "",
        password: "",
      });
      login_button.disabled = false

    }







    // console.log(token);
    // console.log("Authorized User", data.data.user);
    // const token = data.access_token
    // if(data.)
  };

  const responseGoogle = (response) => {
    // console.log("Google Login Datas are",response[0]);
    console.log("Profile Objects are", response);
  };

  const responseFacebook = (response) => {
    console.log("Facebook data are", response);
  };

  return (
    <div className="login clearfix">
      <div className="main_banner"></div>
      <div className="page-gap"></div>
      <section className="login-block">
        <div className="container ma_tb">
          <div className="login-section">
            <div className="row">
              <div className="col-md-4 login-sec">
                <h2 className="text-center">Login Now</h2>
                <form className="login-form">
                  <div className="form-group mb-4">
                    <label
                      for="exampleInputEmail1"
                      className="text-uppercase mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label
                      for="exampleInputPassword1"
                      className="text-uppercase mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      onChange={handleInputs}
                      value={user.password}
                      placeholder="Your Password"
                    />
                  </div>
                  <div className="row align-items-center">
                    <div className="form-group col-5">
                      <button id="login_button"
                        type="submit"
                        className="btn btn-outline-dark btn-login"
                        onClick={loginHandler}
                      >
                        Login
                      </button>
                      {/* <NavLink to="/user" className="btn btn-outline-dark btn-login">Login</NavLink> */}
                    </div>
                    <div className="form-group col-7">
                      <NavLink to="/forget" className="forget">
                        Forget password
                      </NavLink>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="mt-3">or sign in with</p>
                    <div className="social-login text-center">
                      <a href="#" className="facebook">
                        {/* <span className="fab fa-facebook-f mr-3"></span> */}
                        <FacebookLogin
                          appId="927876038100505"
                          autoLoad={false}
                          fields="name,email,picture"
                          cssClass="facebook"
                          icon={<i className="fa fa-facebook"></i>}
                          textButton="&nbsp;&nbsp;"
                          callback={responseFacebook}
                        />
                      </a>
                      {/* <a href="#" className="twitter">
                        <span className="fab fa-twitter mr-3"></span>
                      </a> */}
                      <a href="#" className="google">
                        <span className="google mr-3">
                          <GoogleLogin
                            clientId="593842749091-hgm65c0of9umam5pgioqiodkrkqu8c9p.apps.googleusercontent.com"
                            buttonText=""
                            icon={true}
                            style={{ marginLeft: "5px", backgroundColor: 'red' }}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            // {<button><i className="fa fa-google-plus"></i> </button>}
                            className="google"
                          />
                          {/* <i
                            className="fa fa-google-plus"
                            style={{ marginLeft: "5px" }}
                          /> */}
                        </span>
                      </a>
                    </div>
                    <p className="mt-4 text-center">
                      Already Registered ?
                      <NavLink to="/register" className="register-btn">
                        Register
                      </NavLink>
                    </p>
                  </div>
                </form>
              </div>
              <div className="col-md-8 banner-sec">
                <div className="login_banner_div">
                  <img
                    src="/images/guitar1.jpg"
                    alt="login_img"
                    className="login_banner_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
