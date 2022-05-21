import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../../home/Constant";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/action";
import "./ProductDetails.css";
import CommonBgUI from "../commonBg/CommonBgUI";
import allcommonBg from "../commonBg/allCommonBg";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  const params = useParams();
  console.log("Our New Params", params.id);

  const matchedId = params.id;

  useEffect(() => {
    axios
      .get(`${baseUrl}/instrument/get/${matchedId}`)
      .then((res) => {
        setProduct(res.data.data.instrument);
        console.log("Instrument Details are", res.data.data.instrument);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="product_details">
      <div className="main_banner"></div>
      {/* <CommonBgUI
        bgImg={allcommonBg[12].bgImg}
        bgTitle={allcommonBg[12].bg_title}
      /> */}
      {/* <p className="main-p">PRODUCT DETAIL PAGE </p> */}
      <div className="product-main-div container">
        <div className="container">
          <div className="row">
            <div className="col-md-5 product_detail_img">
              <div className="image-main-div">
                {product.images === undefined ? (
                  <div>No Image</div>
                ) : (
                  <img
                    src={`${product.images[0].image}`}
                    alt="end"
                    className="image"
                  />
                )}
              </div>
            </div>
            <div className="col-md-6 ">
              <h3 className="product-h3 product_detail_name ">
                Product Name : <span className="span-h3">{product.name}</span>
              </h3>
              {/* <p className="product-p tc">
                <div
                  dangerouslySetInnerHTML={{ __html: product.details }}
                ></div>
              </p> */}
              <p className="product-p product_detail_name">
                <div
                  dangerouslySetInnerHTML={{ __html: product.features }}
                ></div>
              </p>
              <p className="product-p product_detail_name">
                Price: {product.price}
              </p>

              <button
                onClick={() => {
                  dispatch(
                    addToCart(
                      {
                        id: product.id,
                        name: product.name,
                        total_price: product.price,
                        image: product.images,
                        discount: product.discount,
                        quantity: 1,
                      },
                      true,
                      1
                    )
                  );
                }}
                className="btn"
              >
                Add To cart
              </button>
            </div>
            <div className="description_div">
              <h1 className="product_description">Product Description</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sunt cupiditate aperiam vitae minima dolorem. Quae porro
                necessitatibus, quaerat autem cum ipsa laudantium pariatur
                voluptate ipsum tempora incidunt explicabo dolor veritatis
                minus, debitis reiciendis dicta possimus ducimus facere qui
                aspernatur culpa? Aliquam, mollitia commodi magnam aut rem
                assumenda labore quos rerum incidunt illum ipsa temporibus
                cupiditate, natus tempora, expedita repellendus nobis culpa ad
                officia sequi iure omnis sunt. Nihil iusto nesciunt recusandae
                animi expedita modi placeat sapiente delectus, possimus itaque
                sint nisi tempora voluptas provident consectetur, odio
                inventore. Dicta excepturi quam sunt officia dolorem facilis
                maxime sequi voluptates suscipit. Quas, qui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
