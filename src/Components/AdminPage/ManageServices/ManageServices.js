import "./ManageServices.css";
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTh, faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const ManageServices = () => {
    document.title = "Admin";
  const [servicesData, setServicesData] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:8080/services")
      .then((res) => res.json())
      .then((data) => {
        setServicesData(data);
      });
  }, []);

  const handleDeleteService = (e, id) => {
    console.log(e.target.parentNode.parentNode, id);
    fetch(`http://localhost:8080/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        e.target.parentNode.parentNode.style.display = "none";
      });
  };

  

  let i = 1;
    return (<>
        <h2>Manage Books</h2>
            <table className=""
              border="1"
              style={{ width: "95%", textAlign: "center" }}
            >
              <thead>
                <tr
                  style={{ borderBottom: "1px solid black", padding: "10px" }}
                >
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
                  key={i++}
                  style={{ borderBottom: "1px solid black", padding: "10px" }}
                >
                  <th> {i} </th>
                  <th>{service.name}</th> <th>{service.description}</th>
                  <th>${service.charge}</th>
                  <th>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDeleteService(e, service._id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} /> Delete
                    </button>
                  </th>
                </tr>
              ))}
              </tbody>
            </table></>
    );
};

export default ManageServices;





