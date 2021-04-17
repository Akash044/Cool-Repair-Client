import "./User.css";
import React, { useContext, useEffect, useState } from "react";
import Book from "../Book/Book";
import BookingList from "../../User/BookingList/BookingList"
import SideBar from "../../SideBar/SideBar";
import { useParams } from "react-router";
import WriteReview from "../WriteReview/WriteReview";
import { UserContext } from "../../../App";
import OrderList from "../../AdminPage/OrderList/OrderList";
import AddService from "../../AdminPage/AddService/AddService";
import MakeAdmin from "../../AdminPage/MakeAdmin/MakeAdmin";
import ManageServices from "../../AdminPage/ManageServices/ManageServices";


const User = () => {
  document.title = "Dashboard";
  const { id } = useParams();
  const [service, setService] = useState({});
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [displayOption, setDisplayOption] = useState(1);
  const userEmail = {email: sessionStorage.getItem("email")}

  useEffect(() => {
    fetch(`http://localhost:8080/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
          setService(data);
      });
  }, [id]);
  const handleDisplay = (value) =>{
      console.log(value);
      setDisplayOption(value);

  }
  return (
    <div className="row user-page">
      <div className="col-md-2">
        <SideBar handleDisplay={handleDisplay}></SideBar>
      </div>
      <div className="col-md-10">
       
        {!loggedUser.isAdmin ? (() => {
          if (displayOption === 1) {
            return (
              <Book service={service}></Book>
            )
          } else if (displayOption === 2) {
            return (
              <BookingList></BookingList>
            )
          } else {
            return (
              <WriteReview></WriteReview>
            )
          }
        })():
        (() => {
          if (displayOption === 1) {
            return <OrderList></OrderList>;
          } else if (displayOption === 2) {
            return <AddService></AddService>;
          } else if (displayOption === 3) {
            return <MakeAdmin></MakeAdmin>;
          } else {
            return <ManageServices></ManageServices>;
          }
        })()
      }
       
      </div>
    </div>
  );
};

export default User;
