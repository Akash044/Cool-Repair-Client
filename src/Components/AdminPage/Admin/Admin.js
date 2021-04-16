import React, { useState } from "react";
import SideBar from "../../SideBar/SideBar";
import AddService from "../AddService/AddService";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageServices from "../ManageServices/ManageServices";
import OrderList from "../OrderList/OrderList";

const Admin = () => {
  const [displayOption, setDisplayOption] = useState(1);

  const handleDisplay = (value) => {
    console.log(value);
    setDisplayOption(value);
  };
  return (
    <div className="row">
        <div className="col-md-4">
        <SideBar handleDisplay={handleDisplay}></SideBar>

        </div>
      <div className="col-md-8">
      {(() => {
        if (displayOption === 1) {
          return <OrderList></OrderList>;
        } else if (displayOption === 2) {
          return <AddService></AddService>;
        } else if (displayOption === 3) {
          return <MakeAdmin></MakeAdmin>;
        } else {
          return <ManageServices></ManageServices>;
        }
      })()}
      </div>
      
    </div>
  );
};

export default Admin;
