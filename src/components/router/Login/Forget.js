import React, { useState } from "react";
import baseUrl from "../../home/Constant";
import { useNavigate } from "react-router";
import "./Login.css";

const Forget = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState({
    email: "",
  });

  const handleInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserEmail({ ...userEmail, [name]: value });
  };

  const forgotHandle = async (event) => {
    event.preventDefault();

    const { email } = userEmail;

    const response = await fetch(`${baseUrl}/user/sendVerificationCode`, {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //Api fetching from axios

    // const response = axios.post(`${baseUrl}/user/sendVerificationCode`,{
    //   body: JSON.stringify({
    //     email,
    //   })
    // }).then((res) => {
    //   console.log('Forgot APi from axiso',res);
    // })

    const resData = await response.json();
    console.log("Forgeot api data", resData);

    if (resData.code === 200) {
      alert(resData.data.success);
      console.log('user eamil is ', email);
      localStorage.setItem('useremail' , email);
      setUserEmail({
        email: "",
      });
      navigate('/verification');
    } else {
      alert(resData.message);
    }
  };

  return (
    <div className="login clearfix">
      <div className="main_banner"></div>
      <div className="page-gap"></div>
      <div class="container">
        <div class="row">
          <div class="offset-md-4 col-md-4 ">
            <div class="panel panel-default">
              <div class="panel-body">
                <div class="text-center">
                  <h3>
                    <i class="fa fa-lock fa-4x"></i>
                  </h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class="panel-body">
                    <form
                      id="register-form"
                      role="form"
                      autocomplete="on"
                      class="form"
                    >
                      <div class="form-group">
                        <div class="input-group">
                          <input
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="form-control"
                            type="email"
                            value={userEmail.email}
                            onChange={handleInputs}
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <button
                          className="btn forget-btn"
                          onClick={forgotHandle}
                        >
                          Reset Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forget;
