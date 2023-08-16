import "./AllServices.css";
import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";

const AllServices = (props) => {
  const { name } = props;
  const [services, setServices] = useState([]);
  console.log(name);

  useEffect(() => {
    fetch("https://cool-repair.onrender.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="ms-5 service-section">
      {services.map((service) => (
        <SingleService key={service._id} serviceInfo={service}></SingleService>
      ))}
    </div>
  );
};

export default AllServices;
