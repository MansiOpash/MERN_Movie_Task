import React from "react";
import { Link } from "react-router-dom";
import image from "../images/images.png";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="box-12">
          <Link to="/series" className="box">
            <img src={image} alt="..." />
            <div className="center">SERIES</div>
          </Link>
          <Link to="/movies" className="h">
            Populer Series
          </Link>
        </div>
        <div className="box-12">
          <Link to="/movies" className="box">
            <img src={image} alt="..." />
            <div className="center">MOVIES</div>
          </Link>
          <Link to="/movies" className="h">
            Populer Movies
          </Link>
        </div>
        
      </div>
    </>
  );
};

export default Home;
