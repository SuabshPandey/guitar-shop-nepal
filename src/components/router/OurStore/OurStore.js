import React, { useState, useEffect } from "react";
import CommonBgUI from "../commonBg/CommonBgUI";
import allcommonBg from "../commonBg/allCommonBg";
import baseUrl from "../../home/Constant";
import storeDetails from "./StoreList";
import "./OurStore.css";
import CommonHome from "../../common/CommonHome/CommonHome";
import OurStoreUI from "./OurStoreUI";
import axios from "axios";
import Loader from 'react-js-loader';

const OurStore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/branch/get`)
      .then((res) => {
        console.log("Store Locations are", res.data.data.branches);
        setData(res.data.data.branches);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ourstore">
      <div className="main_banner"></div>
      <CommonBgUI
        bgImg={allcommonBg[5].bgImg}
        bgTitle={allcommonBg[5].bg_title}
      />

      <CommonHome heading="Our Store Location" />
      <div className="container">
        <div className="row">
          {data.map((items) => {
            return (
              <div className="col-lg-4 ">
                {items === "" ? (
                  <Loader type="spinner-circle" />
                ) : (
                  <OurStoreUI
                    key={items.id}
                    locationName={items.name}
                    phone={items.phone_no}
                    email={items.email}
                    location={items.location}
                  />
                )}
              </div>
            );
          })}
        </div>
        <hr className="horizontal_line " />
      </div>
    </div>
  );
};

export default OurStore;
