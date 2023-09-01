import "./AllServices.css";
import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";
import RepairServices from "../../../../Services/RepairServices";
import useAsync from "../../../../hooks/useAsync";

const AllServices = (props) => {
  const { data, isLoading, isSuccess, isError, error } = useAsync(
    RepairServices.getServices
  );

  return (
    <div className="ms-5 service-section">
      {isLoading && <h3 className="">Loading...</h3>}
      {isSuccess &&
        data.map((service) => (
          <SingleService
            key={service._id}
            serviceInfo={service}
          ></SingleService>
        ))}
    </div>
  );
};

export default AllServices;
