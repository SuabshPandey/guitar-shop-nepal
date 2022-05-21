 import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import './HeaderTop.css';

const HeaderTop = (props) => {
  const [isLogin , setIsLogin] = useState(true)

  return (
    <div className="top_header_bg d-none d-lg-block">
      <div className="container ">
        <div className="row">
          <div className="col-md-4 col-4">
            <div className="top_header">
              <i className="fas fa-phone-alt"></i>
              <a href="tel:9808039867">9808039867</a>
            </div>
          </div>
          <div className="col-md-4 col-8 top_header_middle">
            <div className="top_header">
              <NavLink to="/">Start Playing Music Today</NavLink>
              <sup>
                <i className="fas fa-music"></i>
              </sup>
            </div>
          </div>
          <div className="col-md-4 col-12 top_header_bottom">
            <div className="top_header">
              <i className="fab fa-facebook-square"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
              {/* {!isLogin? <h6>User</h6> : <NavLink to="/login">Login</NavLink>  }  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
