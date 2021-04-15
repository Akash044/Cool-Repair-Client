import "./User.css";
import React, { useEffect, useState } from "react";
import Book from "../Book/Book";
import BookingList from "../../User/BookingList/BookingList"
import SideBar from "../../SideBar/SideBar";
import { useParams } from "react-router";
import WriteReview from "../WriteReview/WriteReview";
import AddService from "../../AdminPage/AddService/AddService";
import ManageServices from "../../AdminPage/ManageServices/ManageServices";
import OrderList from "../../AdminPage/OrderList/OrderList";
import MakeAdmin from "../../AdminPage/MakeAdmin/MakeAdmin";
import Navbar from "../../Home/Navbar/Navbar";

const User = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [displayOption, setDisplayOption] = useState({
    content:1,
    status:""
  });
  const userEmail = {email: sessionStorage.getItem("email")}

  useEffect(() => {
    fetch(`http://localhost:8080/service/${id}`,{
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify(userEmail)

  })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data._id === "admin"){
          setDisplayOption({...displayOption,
            status:"admin"
          });
        }
        else {
          setService(data);
        }
      });
  }, [id]);
  const handleDisplay = (value) =>{
      console.log(value);
      setDisplayOption({
        ...displayOption,
        content:value,
      });

  }
  console.log(displayOption);
  return (
    <div className="row user-page">
      <div className="col-md-3">
        <SideBar displayOption={displayOption} handleDisplay={handleDisplay}></SideBar>
      </div>
      <div className="col-md-8">
       
        {displayOption.status!="admin"? (() => {
          if (displayOption.content === 1) {
            return (
              <Book service={service}></Book>
            )
          } else if (displayOption.content === 2) {
            return (
              <BookingList></BookingList>
            )
          } else {
            return (
              <WriteReview></WriteReview>
            )
          }
        })()
      :
      (() => {
        if (displayOption.content === 1) {
          return (
            <OrderList></OrderList>
          )
        } else if (displayOption.content === 2) {
          return (
            <AddService></AddService>
          )
        } else if (displayOption.content === 3) {
          return (
            <MakeAdmin></MakeAdmin>
          )
        }else{
          return (
            <ManageServices></ManageServices>
          )
        }

      })()
      }
       
      </div>
    </div>
  );
};

export default User;
