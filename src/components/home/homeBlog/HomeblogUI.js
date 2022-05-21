import React, { useState } from "react";
import moment from "moment";
import LoadingPlaceHolder from "../Loading/LoadingPlaceHolder";

const HomeblogUI = (props) => {
  let onlyDate = props.blogDate;
  let finalYear = moment(onlyDate).utc().format("DD-MM-YYYY");
  // let finalDay = moment(onlyDate).utc().format('DD');
  // console.log("New moment " , moment(onlyDate).utc().format('DD'));

  // let responseText = props.blogContent;

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="blog_page_div">
          <img className="blog_page_img" src={props.blogImg} alt="blog-img" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="blog_content_dtl">
          <h3 className="blog_title text-center wc">{props.blogTitle}</h3>
          <p className="blog_text wc"> {props.blogContent}</p>
          <small className="blog_date wc">
            <i className="far fa-calendar"></i>
            {finalYear}
          </small>
        </div>
      </div>
    </div>
  );
};

export default HomeblogUI;
