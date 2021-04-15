import React from "react";
import { Link } from "react-router-dom";

const SingleService = (props) => {
  const {_id, name, description, charge } = props.serviceInfo;
 

  const handleServiceBtn = (e) => {

  }
  

  return (
    <div className="card col-md-4" style={{width: "18rem"}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {description}
        </p>
        <Link to={`/service/${_id}`}>
        <button className="btn btn-primary">
          Take service
        </button></Link>
      </div>
    </div>
  );
};

export default SingleService;
