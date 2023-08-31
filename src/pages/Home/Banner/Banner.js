import React from "react";
import "./Banner.css";
import img from "../../../assets/images/03.jpg";

const Banner = () => {
  return (
    <div className="card text-dark ms-5 me-5 mt-2 header-card">
      <img src={img} className="card-img header-img" alt="..." />
      <div className="card-img-overlay">
        <h4 className="card-title">WE CARE YOUR MONEY</h4>
        <p className="card-text"></p>
      </div>
    </div>
  );
};

export default Banner;
