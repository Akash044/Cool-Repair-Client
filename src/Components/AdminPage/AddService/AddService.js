import React, { useState } from 'react';
import axios from "axios";
import './AddService.css'

const AddService = () => {
  document.title = "Add Service"
    const [newServiceData, setNewServiceData] = useState({});
    const [spinner, setSpinner] = useState(false);

    const handleOnBlur = (e) => {
        const newData = { ...newServiceData, [e.target.name]: e.target.value };
        setNewServiceData(newData);
    }

  const handleImageData = (e) => {
    setSpinner(!spinner);
    const imgData = new FormData();
    imgData.set("key", "95d6b9a2bf0db320d49744c0dda3c521");
    imgData.append("image", e.target.files[0]);

    axios.post("https://api.imgbb.com/1/upload", imgData)
      .then((res) => {
        const newData = { ...newServiceData, image: res.data.data.display_url };
        setNewServiceData(newData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleAddNewService = (e) => {
    e.preventDefault();
    fetch("https://fierce-waters-48255.herokuapp.com/addService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newServiceData),
    })
      .then((res) => res.json())
      .then((data) => {
        setNewServiceData({});
        setSpinner(!spinner);
        alert("Successfully added");
      });
  };
    return (
        <div className="add-service-page">
            <h2>Add new Service</h2>
            <div className="input-group bg-add-service shadow rounded p-3">
              <div className="m-3">
                <h4>Service Name</h4>
                <input
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                  placeholder="Enter service Name"
                  className="mb-3"
                />
                <br />
                <h4>Service charge</h4>
                <input
                  type="text"
                  name="charge"
                  onBlur={handleOnBlur}
                  placeholder="Enter charge"
                />
              </div>
              <div className="m-3">
                <h4>Description</h4>
                <input
                  type="text"
                  name="description"
                  className="mb-3"
                  onBlur={handleOnBlur}
                  placeholder="Enter description"
                />
                <br />
                <h4>Upload an image</h4>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageData}
                />{!newServiceData.image && spinner && (<div>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  <strong> Uploading...</strong></div>
                )}
              </div>
            </div>
            <button
            // type="submit"
              className="btn btn-color text-white ms-3 mt-3"
              onClick={handleAddNewService}
              disabled={!newServiceData.image && true}
            >
              Add Book
            </button>
            
        </div>
    );
};

export default AddService;