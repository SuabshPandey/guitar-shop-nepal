import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../Constant";
import { NavLink } from "react-router-dom";
import drumsList from "./HomeDrumList";
import Slider from "react-slick";
import HomeBrandItemsUI from "../../common/CommonHome/HomeBrandItemsUI";
// import guitarList from "../homeguitar/HomeGuitarList";
import "./Homedrums.css";

const HomeDrums = () => {
  const [categoryData, setCategoryData] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/category/get`)
      .then((res) => {
        setCategoryData(res.data.data.categories[1]);
        const responseId = res.data.data.categories[1].id;

        axios
          .get(`${baseUrl}/instrument/getByCategory/${responseId}`)
          .then((res) => {
            console.log(
              "Drums Instrument data names are",
              res.data.data.instruments
            );
            setData(res.data.data.instruments);
            console.log("Response Data" , data);
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
    <div className="container-fluid brand_bg_drums">
      <div className="container ">
        {data.length !== 0 ? (
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
                      brandImg={items.images}
                    />
                  </NavLink>
                );
              })}
            </Slider>
          </div>
        ) : (
          <>
            
          </>
        )}
      </div>
    </div>
  );
};

export default HomeDrums;
