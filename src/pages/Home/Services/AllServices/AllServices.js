import "./AllServices.css";
import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";
import requestServices from "../../../../Services/httpServices";

const AllServices = (props) => {
  const { name } = props;
  const [services, setServices] = useState([]);
  console.log(name);

  useEffect(() => {
    requestServices.get("/services").then((data) => {
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
