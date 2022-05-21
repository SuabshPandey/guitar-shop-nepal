import React, { useState } from "react";
import baseUrl from "../../home/Constant";
import {useNavigate} from 'react-router'
import { NavLink } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';
import "./Register.css";

const register_button = document.getElementById('reg_button')


const RegisterUI = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone_no: "",
    password: "",
    confirm_password: "",
  });


  const handleInputs = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (event) => {
    event.preventDefault();

    const { fullName, email, phone_no, password, confirm_password } = user;
    if (fullName === "" || email === "" || phone_no === "" || password === "" || confirm_password === "") {
      alert("Please enter all the details")
    }
    else if (password !== confirm_password) {
      alert("Password and Confirm Password Doesn't match")
    }
    else if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) {
      alert("Enter a valid email address")
    }

    else {

      const response = await fetch(`${baseUrl}/user/register`, {
        method: "POST",
        body: JSON.stringify({
          fullName,
          email,
          phone_no,
          password,
          confirm_password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setUser({
        fullName: "",
        email: "",
        phone_no: "",
        password: "",
        confirm_password: "",
      });
      if (data.code === 200) {
        alert("Registered Successfully");
        navigate("/login");
      } else {
        alert(data.message);
      }

    };
  }

  const responseGoogle = async (response) => {
    // console.log("Google Login Datas are",response[0]);
    console.log("Profile Google Objects are", response);

    const gUserData = response.profileObj;

    // const { fullName, email, phone_no, password, confirm_password } = user;



    // fullName = gUserData.name;
    // email = gUserData.email;
    // phone_no = "9848484848";
    // password = gUserData.googleId;
    // confirm_password = gUserData.googleId;

    // console.log(fullName);



    const googleResponse = await fetch(`${baseUrl}/user/register`, {
      method: "POST",
      body: JSON.stringify({
        fullName: gUserData.name,
        email: gUserData.email,
        phone_no: "989892349",
        password: gUserData.googleId,
        confirm_password: gUserData.googleId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const googleData = await googleResponse.json();
    console.log("Registered Google Data", googleData);

    // setUser({
    //   fullName: "",
    //   email: "",
    //   phone_no: "",
    //   password: "",
    //   confirm_password: "",
    // });

    if (googleResponse.ok) {
      alert("Your account has been created successfully!!!")
    } else {
      alert("Invalid Credential. Please try again!!!")
    }

  };

  const responseFacebook = async (response) => {
    console.log("Facebook data are", response);

    const fUserData = response;





    const facebookResponse = await fetch(`${baseUrl}/user/register`, {
      method: "POST",
      body: JSON.stringify({
        fullName: fUserData.name,
        email: fUserData.email,
        phone_no: "923292234",
        password: fUserData.id,
        confirm_password: fUserData.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const facebookData = await facebookResponse.json();
    console.log("Registered Facebook Data", facebookData);

    // setUser({
    //   fullName: "",
    //   email: "",
    //   phone_no: "",
    //   password: "",
    //   confirm_password: "",
    // });

    if (facebookResponse.ok) {
      alert("Your account has been created successfully!!!")
    } else {
      alert("Invalid Credential. Please try again!!!")
    }

  };


  return (
    <div className="register">
      <div className="main_banner"></div>

      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h2>User Registration Form</h2>
          </div>
          <div className="row clearfix">
            <div className="">
              <form>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={user.fullName}
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-phone"></i>
                  </span>
                  <input
                    type="number"
                    name="phone_no"
                    placeholder="Phone Number"
                    value={user.phone_no}
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div className="input_field">
                  <span>
                    <i aria-hidden="true" className="fa fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleInputs}
                    required
                  />
                </div>
                <div className="row clearfix">
                  <div className="">
                    <div className="input_field">
                      <span>
                        <i aria-hidden="true" className="fa fa-lock"></i>
                      </span>
                      <input
                        type="password"
                        name="confirm_password"
                        placeholder="Confirm Password"
                        value={user.confirm_password}
                        onChange={handleInputs}
                        required
                      />
                    </div>
                  </div>
                  <div className="col_half"></div>
                </div>
                <input id="reg_button"
                  className="button"
                  onClick={postData}
                  type="submit"
                  value="Register"
                />

                <div className="text-center mb-4">
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
                          style={{ marginLeft: "5px", backgroundColor: "red" }}
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

                </div>

                <p className="login_section text-right">
                  Already registered
                  <NavLink to="/login" className="btn btn-outline-dark">
                    Login?
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUI;
