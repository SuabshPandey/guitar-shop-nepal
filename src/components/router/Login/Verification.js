import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import baseUrl from "../../home/Constant";
import "./Verification.css";

const Verification = () => {
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("useremail");

  const [userData, setUserData] = useState({
    email: userEmail,
    verification_code: "",
  });

  const handleInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const verifyData = async (event) => {
    event.preventDefault();

    const { email, verification_code } = userData;

    const response = await fetch(`${baseUrl}/user/checkVerificationCode`, {
      method: "POST",
      body: JSON.stringify({
        email,
        verification_code,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await response.json();

    if (resData.success === "Verified") {
      alert("Verified");
      setUserData({
        email: "",
        verification_code: "",
      });
      navigate("/changePassword");
    } else {
      alert("Verification code did not match");
    }

    console.log("USer verification code status", resData);
  };

  return (
    <div className="verification">
      <div className="main_banner"></div>
      <div className="page-gap"></div>

      <div className="code_sent_container">
        <h1 className="check_title">Check your email!</h1>
        <p className="check_title">
          We’ve sent a four-digit confirmation code to<b> {userEmail} </b> .
          Enter it below to confirm your email address.
        </p>

        <div className="form_field_div">
          <div className="form-group form_field_text">
            <input
              type="text"
              name="email"
              hidden
              className="form_input_field form-control"
              value={userData.email}
              onChange={handleInputs}
            />
          </div>
          <div className="form-group form_field_text">
            <input
              type="text"
              name="verification_code"
              className="form_input_field form-control"
              maxLength={4}
              placeholder="Enter four digit code"
              value={userData.verification_code}
              onChange={handleInputs}
            />
          </div>
          <div className="verify_btn_div">
            <button
              className="btn btn-outline-dark verify_btn"
              onClick={verifyData}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
