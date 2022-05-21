import React, { useState } from "react";
import { useNavigate } from "react-router";
import baseUrl from "../../home/Constant";
import "./Login.css";

const ChangePassword = () => {
  const userEmail = localStorage.getItem("useremail");
  const [userData, setUserData] = useState({
    email: userEmail,
    newpassword: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();


  const handleInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const changePassword = async(event) => {
      event.preventDefault();
        const {email, newpassword , confirmpassword} = userData
      const response = await fetch(`${baseUrl}/user/forgotPassword` , {
          method: 'POST',
          body: JSON.stringify({
            email,
            newpassword,
            confirmpassword
          }),
          headers: {
              'Content-Type' : 'application/json'
          }
      })
      const resData = await response.json();
        if(resData.code === 200) {
            localStorage.removeItem('useremail');
            alert("Password Changed Successfully!!!!");
            navigate('/');   
        } else{
            navigate('/changePassword');
        }

      console.log("Change Data are", resData);

  } 

  return (
    <div className="change_password">
      <div className="main_banner"></div>
      <div className="page-gap"></div>

      <h1 className="change_heading">Change Password</h1>
      <div className="container">
        <div className="change_password_container">
          <div className="change_password_field_div">
            <div className="form-group input_div_field">
              <input
                type="email"
                name="email"
                disabled
                hidden
                className=" form-control"
                value={userData.email}
                onChange={handleInputs}
                required
              />
            </div>
            <div className="form-group input_div_field">
              <input
                type="password"
                name="newpassword"
                className=" form-control"
                placeholder="New Password"
                value={userData.newpassword}
                onChange={handleInputs}
                required
              />
            </div>
            <div className="form-group input_div_field">
              <input
                type="password"
                name="confirmpassword"
                className=" form-control"
                placeholder="Confirm Password"
                value={userData.confirmpassword}
                onChange={handleInputs}
                required
              />
            </div>

            <div className="btn">
                <button onClick={changePassword} className="btn btn-outline-success">
                    Change 
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
