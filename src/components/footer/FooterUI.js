import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import baseUrl from "../home/Constant";
import "./Footer.css";
import axios from "axios";
import DynamicPage from "../router/dynamicPages/DynamicPage";
import { NavLink } from "react-router-dom";
import dynamicPageList from "./DynamicPageList";

const FooterUI = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/branch/get`)
      .then((res) => {
        console.log("Branched store", res.data.data.branches);
        setData(res.data.data.branches);
      })

      .catch((err) => console.error(err));
  }, []);
  // console.log("data of data", data[0].name);

  return (
    <div>
      <div className="container-fuild footer_container_fluid p-0">
        <div className="container footer_container">
          <div className="row">
            <div className="col-lg-4 ma_tb">
              <h3 className="wc">Our Outlets</h3>

              <div className="row">
                <div className="col-md-6 col-6">
                  {data[0] !== undefined ? (
                    <Footer
                      className="wc"
                      name={data[0].name}
                      ship={data[0].phone_no}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className="col-md-6 col-6">
                  {data[1] !== undefined ? (
                    <Footer
                      className="wc"
                      name={data[1].name}
                      ship={data[1].phone_no}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className="col-md-6 col-6">
                  {data[2] !== undefined ? (
                    <Footer
                      className="wc"
                      name={data[2].name}
                      ship={data[2].phone_no}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className="col-md-6 col-6">
                  {data[3] !== undefined ? (
                    <Footer
                      className="wc"
                      name={data[3].name}
                      ship={data[3].phone_no}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className="col-md-6 col-6">
                  {data[4] !== undefined ? (
                    <Footer
                      className="wc"
                      name={data[4].name}
                      ship={data[4].phone_no}
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className="col-md-6 col-6">
                  {data[5] !== undefined ? (
                    <Footer
                      className="wc"
                      name={data[5].name}
                      ship={data[5].phone_no}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6 ma_tb">
              <h3 className="wc">Cutomer Services</h3>
              {dynamicPageList.map((item) => {
                return (
                  <NavLink to={`dynamic/${item.name}`}>
                    <Footer
                      className="wc"
                      name= {item.title}
                    />
                  </NavLink>
                );
              })}
            </div>
            <div className="col-lg-2 col-6 ma_tb">
              <h3 className="wc">Contact Us</h3>
              <Footer
                className="wc"
                name="Address Goes Here"
                ship="Phone Number"
                order="Email"
              />
            </div>
            <div className="col-lg-3 ma_tb">
              <iframe
                className="map  pa_l"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56523.74041101871!2d85.31836626525912!3d27.694622019483354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18ffad883b7b%3A0xee110efad3b33cbe!2sGuitar%20Shop!5e0!3m2!1sen!2snp!4v1631674759494!5m2!1sen!2snp"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 tc ">
              <h4 className="wc icon_header text-center">Follow Us on:</h4>
              <span>
                <a
                  href="https://www.facebook.com/guitarshopkathmandu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="social_icon wc p-3 fab fa-facebook"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/guitarshop.nepal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="social_icon wc p-3 fab fa-instagram"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/GuitarShopNepal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="social_icon wc p-3 fab fa-twitter"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterUI;
