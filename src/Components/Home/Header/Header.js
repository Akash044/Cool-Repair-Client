import React from "react";
import "./Header.css";
import img from "../../../images/03.jpg";

const Header = () => {
  return (
    <div className="card text-dark ms-5 me-5 mt-2 header-card">
      <img src={img} className="card-img header-img" alt="..." />
      <div className="card-img-overlay">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
  );
};

export default Header;
