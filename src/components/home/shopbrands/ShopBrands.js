import React, { useEffect, useState } from "react";
// import brandItems from "./ShopBrandsList";
// import { NavLink } from "react-router-dom";
import axios from "axios";
import baseUrl from "../Constant";
import ShopBrandsUI from "./ShopBrandsUI";
import "./ShopBrands.css";

const ShopBrands = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/brand/get`)
      .then((res) => {
        let response = res.data.data.brands;
        setData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <div>
      <div className="container-fluid shop_brands brand_bg p-0">
        <div className="row">
          {data?.map((items) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12 ">
                <ShopBrandsUI
                  key={items.id}
                  name={items.name}
                  brandImage={items.image}
                />
                
              </div>
            );
          })}
        </div>
      </div>
      {/* <button onClick={clickMe}>Show Data</button> */}
    </div>
  );
};

export default ShopBrands;
