import "./ManageServices.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const ManageServices = () => {
    document.title = "Manage Services";
  const [servicesData, setServicesData] = useState([]);
  

  useEffect(() => {
    fetch("https://fierce-waters-48255.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServicesData(data);
      });
  }, []);

  const handleDeleteService = (e, id) => {
    console.log(e.target.parentNode.parentNode, id);
    fetch(`https://fierce-waters-48255.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        e.target.parentNode.parentNode.style.display = "none";
      });
  };

  

  let i = 1;
    return (<div className="mt-5">
        <h2>Manage Services</h2>
            <table className="manage-table" border="1"
            >
              <thead>
                <tr>
                  <th>
                    <h4>SI</h4>
                  </th>
                  <th>
                    <h4>Service Name</h4>
                  </th>
                  <th>
                    <h4>Description</h4>
                  </th>
                  <th>
                    <h4>Charge</h4>
                  </th>
                  <th>
                    <h4>Action</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
              {servicesData.map((service) => (
                <tr
                  key={service._id}
                >
                  <td data-label="SI"> {i++} </td>
                  <td data-label="Service Name">{service.name}</td> 
                  <td data-label="Description">{service.description}</td>
                  <td data-label="Charge">${service.charge}</td>
                  <td data-label="Action">
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDeleteService(e, service._id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table></div>
    );
};

export default ManageServices;






