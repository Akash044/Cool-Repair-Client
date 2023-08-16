import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./OrderList.css";

const OrderList = () => {
  document.title = "Order List";
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://cool-repair.onrender.com/allAppointment")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const handleUpdateStatus = (status, id) => {
    const newData = { status: status };
    fetch(`https://cool-repair.onrender.com/updateStatus/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        data && alert("status updated successfully");
      });
  };

  let i = 1;
  return (
    <div className="mt-5">
      <h4>Clients Order list</h4>
      {
        <table className="order-table" border="1">
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
                <h4>User Email</h4>
              </th>
              <th>
                <h4>Status</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td data-label="SI"> {i++} </td>
                <td data-label="Service Name">{order.serName}</td>
                <td data-label="Description">{order.serDesc}</td>
                <td data-label="Charge">${order.serCharge}</td>
                <td data-label="User Email">{order.email}</td>
                <td data-label="Status">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {order.serStatus}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => handleUpdateStatus("Pending", order._id)}
                      >
                        Pending
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() =>
                          handleUpdateStatus("On going", order._id)
                        }
                      >
                        On going
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => handleUpdateStatus("Done", order._id)}
                      >
                        Done
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default OrderList;
