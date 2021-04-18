import './SingleService.css'
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../../../../App';

const SingleService = (props) => {
  const {_id, name, description, charge, image } = props.serviceInfo;
  const [loggedUser, setLoggedUser] = useContext(UserContext);
 
  return (
    <div className="card flip-card" style={{width: "18rem"}}>
      <div className="flip-card-inner">
      
      <div className="card-body flip-card-front">
      <img src={image} className="card-img-top" alt="..." />
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {description}
        </p>
        
      </div>
      <div className="flip-card-back">
      <h4>Service charge: ${charge}</h4>
      {!loggedUser.isAdmin && <Link to={`/service/${_id}`}>
        <button className="btn btn-primary">
          Take service
        </button></Link>}
      </div>
      </div>
    </div>
  );
};

export default SingleService;
