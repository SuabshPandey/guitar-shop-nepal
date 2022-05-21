import React, { useEffect, useState } from "react";
import HomeblogUI from "./HomeblogUI";
import blogContent from "./BlogContentList";
import baseUrl from "../Constant";
import "./Homeblog.css";
import CommonHome from "../../common/CommonHome/CommonHome";
import axios from "axios";

const Homeblog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/blog/get`).then((res) => {
      // console.log("Home Blog List are here", res.data.data.blogs);
      setData(res.data.data.blogs);
    });
  }, []);

  return (
    <div>
      <CommonHome heading="Blog" />
      <div className="row justify-content-between">
        {data?.map((blogItem) => {
          return (
            <div className="col-lg-5">
              <div className="home_bg_blog_page">
                <HomeblogUI
                  key={blogItem.id}
                  blogTitle={blogItem.title}
                  blogImg={blogItem.image}
                  blogContent={
                    <div
                      dangerouslySetInnerHTML={{ __html: blogItem.description }} 
                    >
                    </div>
                  }
                  blogDate={blogItem.blogDate}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Homeblog;
