import React from "react";
import { useLocation } from "react-router-dom";
const Title = (props) => {
  const location = useLocation();
  console.log(location);
  let title = props.title;

  if (location.pathname === "/series") {
    title = "Series";
  }
  if (location.pathname === "/movies") {
    title = "Movies";
  }
  return (
    <>
      {/* <Search /> */}
      <div className="heading">Popular {title}</div>
    </>
  );
};

export default Title;
