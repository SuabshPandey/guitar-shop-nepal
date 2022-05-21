import React from "react";
import { NavLink } from "react-bootstrap";
import './CategoryList.css';


const CategroyList = () => {
  return (
    <div className="home_categorylist d-none d-lg-block">
        <ul className="list-group">
          <li className="list-group-item custom_list_items">
            <NavLink className="custom_list_product_items" to="/products">
              Acoustic
            </NavLink>
            {/* <div className="menu_bucket">
              <ul>
                <li>ghn</li>
                <li>jg</li>
                <li>gfjh</li>
                <li>hfbj</li>
              </ul>
            </div> */}
          </li>
          <li className="list-group-item custom_list_items">
            <NavLink className="custom_list_product_items" to="/products">
              Electric Guitar
            </NavLink>
          </li>
          <li className="list-group-item custom_list_items">
            <NavLink className="custom_list_product_items" to="/products">
              Piano
            </NavLink>
          </li>
          <li className="list-group-item custom_list_items">
            <NavLink className="custom_list_product_items" to="/products">
              Drum
            </NavLink>
          </li>
          <li className="list-group-item custom_list_items">
            <NavLink className="custom_list_product_items" to="/products">
              Cello
            </NavLink>
          </li>
          <li className="list-group-item custom_list_items">
            <NavLink className="custom_list_product_items" to="/products">
              Vilon
            </NavLink>
          </li>
        </ul>
      </div>
  );
};

export default CategroyList;
