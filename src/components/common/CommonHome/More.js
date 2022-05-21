import React from "react";
import { NavLink } from "react-router-dom";

const More = (props) => {
  return (
    <div>
        <NavLink className="explore" to={`/${props.link}`}>
          {props.title}
          <img className="icon_more" src="/images/icon_more.png" alt="Icon" />
          <img className="icon_more" src="/images/icon_more_black.png" alt="Icon" />
        </NavLink>
      <div className="hr_lines_home d-none d-lg-block">
      </div>
    </div>
  );
};

export default More;
