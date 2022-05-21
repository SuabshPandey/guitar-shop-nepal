import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CommonBgUI from "../commonBg/CommonBgUI";
import allcommonBg from "../commonBg/allCommonBg";
import blogProduct from "./BlogList";
import "./Blogs.css";
import BlogsUI from "./BlogsUI";
import baseUrl from "../../home/Constant";
import axios from "axios";

const Blogs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/blog/get`)
      .then((res) => {
        console.log(" Our blogs list are", res.data.data.blogs);
        setData(res.data.data.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="blogs">
      <div className="main_banner"></div>
      <CommonBgUI
        bgImg={allcommonBg[3].bgImg}
        bgTitle={allcommonBg[3].bg_title}
      />
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {data?.map((items) => {
                return (
                  <div className="col-lg-4">
                    <NavLink to={`/blogdetail/${items.id}`}>
                      <BlogsUI
                        key={items.id}
                        blogName={
                          <div
                            dangerouslySetInnerHTML={{
                              __html: items.description,
                            }}
                          ></div>
                        }
                        blogDate={items.created_at}
                        blogTitle={items.title}
                        blogImg={items.image}
                      />
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-4 blog_side_div">
            <div className="blog_side_header">
              <h2>Recent Post</h2>
            </div>
            <ul className="list-group">
              <li className="blog_side_list list-group-item ">
                Things you can do
              </li>
              <li className="blog_side_list list-group-item ">
                Things you can do
              </li>
              <li className="blog_side_list list-group-item ">
                Things you can do
              </li>
              <li className="blog_side_list list-group-item ">
                Things you can do
              </li>
              <li className="blog_side_list list-group-item ">
                Things you can do
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
