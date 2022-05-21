import React, { useState, useEffect } from "react";
import CommonBgUI from "../commonBg/CommonBgUI";
import allcommonBg from "../commonBg/allCommonBg";
import CommonHome from "../../common/CommonHome/CommonHome";
import Filter from "./Filter";
import axios from "axios";
import baseUrl from "../../home/Constant";

// import guitarList from "../../home/homeguitar/HomeGuitarList";
import "./Products.css";
import HomeBrandItemsUI from "../../common/CommonHome/HomeBrandItemsUI";
import { useLocation, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const Products = () => {
  const params = useParams();
  const matchedId = params.id;

  const [data, setData] = useState([]);

  const location = useLocation();
  console.log(
    "Product instrument ID is going to shown here please god make miracle to do this",
    params.id
  );
  const navigate = useNavigate();

  const queryParam = new URLSearchParams(location.search);
  console.log("New Query", queryParam.get("category"));

  const categoryQuery = queryParam.get("category");

  function idMatch() {
    axios
      .get(`${baseUrl}/instrument/getByCategory/${matchedId}`)
      .then((res) => {
        console.log("Matched id  api calling", res);
        setData(res.data.data.instruments);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function noid() {
    axios
      .get(`${baseUrl}/instrument/get`)
      .then((res) => {
        console.log("No id api calling", res);
        setData(res.data.data.instruments);
      })
      .catch((err) => {
        console.log(err);
      });
  }

useEffect(() => {
  if (matchedId === undefined) {
    noid();
  } else {
    idMatch();
  }
},[])

return (
  <div>
    <div className="product">
      <div className="main_banner"></div>
      {/* <div className="page-gap"></div> */}
      <CommonBgUI
        bgImg={allcommonBg[0].bgImg}
        bgTitle={allcommonBg[0].bg_title}
      />
    </div>
    <div className="custom_product_div">
      <CommonHome heading="Products" />
      <Filter idMatch={matchedId} />
    </div>
    <div className="product_items container">
      <div className="row">
        {data?.map((items) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-2 mb-5">
              <Link to={`/productdetails/${items.id}`}>

              <HomeBrandItemsUI
                key={items.id}
                name={items.name}
                pprice={items.price}
                brandImg={items.images}
              /></Link>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
};

export default Products;
