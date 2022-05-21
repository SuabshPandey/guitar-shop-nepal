import React from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";

const BlogsUI = (props) => {
  let onlyDate = props.blogDate;
  let finalYear = moment(onlyDate).utc().format("MM-YYYY");
  let finalDay = moment(onlyDate).utc().format("DD");
  console.log("New moment ", moment(onlyDate).utc().format("DD"));

  // let blogDesp = props.blogName.props.dangerouslySetInnerHTML.__html;
  let blogDesp = props.blogName.props.dangerouslySetInnerHTML.__html;

  // let finalDesp = blogDesp.replace(/<[^>]+>/, "");
  // let newFinalDesp = decode(finalDesp)
  // console.log(newFinalDesp);
  const subBlog = blogDesp.substring(0,15);
  console.log("New Blog Description is n   ",subBlog);

  console.log("Blog Date is ", onlyDate);

  return (
    
      <div className="card">
        <div className="blog_overflow">
          <img className="blog_img" src={props.blogImg} alt="sdfs" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title custom_blog_title">{props.blogTitle}</h4>
          <p className=" text-secondary custom_blog_text ">{subBlog}</p>
          <p className="read">
            Read More
            <img
              className="icon_more"
              src="/images/iconsblack.png"
              alt="Icon"
            />
          </p>
        </div>
        <div className="blog_post_date">
          <span>
            {finalDay} &nbsp; <small>{finalYear}</small>
          </span>
        </div>
      </div>
  );
};

export default BlogsUI;
