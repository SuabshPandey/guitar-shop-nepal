import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../Constant";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import HomeBrandItemsUI from "../../common/CommonHome/HomeBrandItemsUI";
import "./HomeUkelele.css";
// import ukuleleList from './HomeUkeleleList';

const HomeUkelele = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/category/get`)
      .then((res) => {
        setCategoryData(res.data.data.categories[2]);
        const responseId = res.data.data.categories[2].id;

        axios
          .get(`${baseUrl}/instrument/getByCategory/${responseId}`)
          .then((res) => {
            console.log(
              "Guitar Instrument data names are",
              res.data.data.instruments
            );
            setData(res.data.data.instruments);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 600,
    margin: 20,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container-fluid brand_bg_ukulele">
      <div className="container ">
        <div className="row ">
          <div className="col-md-12 mb-5">
            <div className="heading_top">
              <h2 className="wc">{categoryData.name}</h2>
            </div>
          </div>
          <Slider {...settings}>
            {data?.map((items) => {
              return (
                <NavLink to={`/productdetails/${items.id}`}>
                  <HomeBrandItemsUI
                    items = {items}
                    key={items.id}
                    pId={items.id}
                    name={items.name}
                    pprice={items.price}
                    dprice = {items.discount}
                    brandImg={items.images}
                  />
                </NavLink>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeUkelele;
