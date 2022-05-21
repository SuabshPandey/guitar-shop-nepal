import React, { useEffect } from "react";
import baseUrl from "../../home/Constant";
import axios from "axios";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import "./UserSuccess.css";

const UserSuccess = () => {


  const navigate = useNavigate();
  // const logout_btn = document.getElementById('logout_btn')
  
  
  const Logout = () => {
    document.getElementById("logout_btn").disabled = true;
        const token = localStorage.getItem("key");
    // alert("Are you sure you want to logout?")
    axios
      .get(`${baseUrl}/user/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Is user logout??", res.data);
        localStorage.removeItem("key");
        navigate("/login");
        setTimeout(window.location.reload.bind(window.location), 1500);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="user_success">
      <div className="main_banner"></div>
      {/* <div className="page-gap"></div> */}
      <h1 className="tc mt-5">User Profile </h1>
      <div className="container main_container_div">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="profile_details">
              <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12">
                  <div className="profile_image_div">
                    <img
                      src="/images/User/user_unknown.png"
                      alt="User Profile"
                      className="profile_image ma_b"
                    />
                    <span className="change_profile">
                      <i className="far fa-edit"></i>
                    </span>
                  </div>
                </div>
                <h1 className="personal_div ma_tb">Personal Details</h1>
                <p className="user_name user_detail ">
                  Name: <b>Subash Pandey </b>
                </p>
                <p className="user_name user_detail ">
                  Email: <b>itsmesubashpandey867@gmail.com </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="other_details">
              <div className="kyc_update_div oders_div">
                <p>Update your KYC</p>
                <button className="btn btn-outline-dark profile_btn">
                  Update
                </button>
              </div>
              <div className="order_history_detail oders_div">
                <p className="order_para">View Your Order History</p>
                <NavLink
                  to="/getOrder"
                  className="btn btn-outline-dark profile_btn"
                >
                  View
                </NavLink>
              </div>
              <div className="change_profile_div oders_div">
                <p className="change_para">Change Profile</p>
                <button className="btn btn-outline-dark profile_btn">
                  Change Profile
                </button>
              </div>
              <div className="change_profile_div oders_div">
                <button id="logout_btn"
                  onClick={Logout}
                  className="btn btn-outline-dark profile_btn"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSuccess;
