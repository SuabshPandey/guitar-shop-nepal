import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/action";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router";
import "./ResponsiveNav.css";


const ResponsiveNav = () => {


  const countProduct = useSelector((state) => state.productReducer.totalProductsCount);


  return (
    <div className="container wrapper p-0">
      <nav>
        <input type="checkbox" id="show-menu" />
        <label className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>
        <div className="content">
          <div className="logo">
            <NavLink to="/">
              <img src="/images/logo.png" alt="logo" />
            </NavLink>
          </div>
          <ul className="links">
            <li className="nav-item">
              <NavLink className="nav-link menu_link" to="/">
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link menu_link" to="/products">
                PRODUCTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link menu_link" to="/brands">
                BRANDS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link menu_link" to="events">
                EVENTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link menu_link" to="blogs">
                BLOGS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link menu_link" to="contactus">
                CONTACT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link menu_link" to="ourstore">
                OUR STORE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link menu_link" to="/servicing">
                SERVICING
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link menu_link menu_divider" to={"/login" }>
                <i className="fas fa-user"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link menu_link" to="/wishlist">
                <i className="fas fa-heart"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link menu_link"  to="/cart">
                <i className="fas fa-shopping-cart"></i>
                {(countProduct <= 0)? <sup></sup>:<sup>{countProduct}</sup>}
                
                {/* <sup>{countProduct}</sup> */}
                
              </NavLink>
            </li>
            <li className="nav-item">
                    <NavLink className="nav-link menu_link" to="/products">
                      <i className="fas fa-search"></i>
                    </NavLink>
                  </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ResponsiveNav;
