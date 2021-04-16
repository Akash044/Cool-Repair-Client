import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/allAppointment")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  const handleUpdateStatus = (status, id) => {
    console.log(status, id);
    const newData = { status: status };
    console.log(newData);
    fetch(`http://localhost:8080/updateStatus/${id}`, {
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
      <h4>this is order list page</h4>
      {
        <table
          className=""
          border="1"
          style={{ width: "95%", textAlign: "center" }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid black", padding: "10px" }}>
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
              <tr
                key={order._id}
                style={{ borderBottom: "1px solid black", padding: "10px" }}
              >
                <th> {i++} </th>
                <th>{order.serName}</th> 
                <th>{order.serDesc}</th>
                <th>${order.serCharge}</th>
                <th>{order.email}</th>
                <th>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {order.serStatus}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleUpdateStatus("Pending", order._id)} >
                        Pending
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleUpdateStatus("On going", order._id)} >
                        On going
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => handleUpdateStatus("Done", order._id)} >
                        Done
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default OrderList;
