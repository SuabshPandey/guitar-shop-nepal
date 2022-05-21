import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./ShopInstrument.css";
import instruments from "./InstrumentList";
import axios from "axios";
import baseUrl from "../Constant";
import ShopInstrumentUI from "./ShopInstrumentUI";

const ShopInstrument = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/category/get`)
      .then((res) => {
        console.log("Categories home list are", res.data.data.categories);
        setData(res.data.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {data?.map((item) => {
            return (
              <div className="col-md-3 mb-5" key={item.id}>
                <NavLink to={`products/${item.id}`}>
                  
                  <ShopInstrumentUI
                    
                    instrumentName={item.name}
                    instrumentImg={item.image}
                  />
                </NavLink>
              </div>
            );
          })}
        </div>
        {/* <hr className="horizontal_line_shop" /> */}
      </div>
    </div>
  );
};

export default ShopInstrument;
