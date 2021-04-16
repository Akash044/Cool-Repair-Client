import './SingleService.css'
import React from "react";
import { Link } from "react-router-dom";

const SingleService = (props) => {
  const {_id, name, description, charge, image } = props.serviceInfo;
 
  return (
    <div className="card col-md-4" style={{width: "18rem"}}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {description}
        </p>
        <h4>$ {charge}</h4>
        <Link to={`/service/${_id}`}>
        <button className="btn btn-primary">
          Take service
        </button></Link>
      </div>
    </div>
  );
};

export default SingleService;
