import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./HeaderNav.css";

const HeaderNav = () => {
  return (
    <div className="container nav_container_fluid">
      <div className="container-fluid nav_container d-none d-lg-block">
        <Navbar className="custom_navbar" bg="" expand="lg">
          <Navbar.Brand>
          <NavLink to="/">
            <img className="nav_logo" src="/images/logo.png" alt="" />
          </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="nav_items custom_nav_items">
              <Nav
                className="my-2 my-lg-0 custom_nav"
                style={{ maxHeight: "100px" }}
              >
                <ul className="navbar-nav mr-auto">
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
                </ul>
                <ul className="navbar-nav menu-icon">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link menu_link menu_divider"
                      to="/login"
                    >
                      <i className="fas fa-user"></i>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link menu_link" to="/wishlist">
                      <i className="fas fa-heart"></i>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link menu_link" to="/cart">
                      <i className="fas fa-shopping-cart"></i><sup>1</sup>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link menu_link" to="/products">
                      <i className="fas fa-search"></i>
                    </NavLink>
                  </li>
                </ul>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default HeaderNav;
