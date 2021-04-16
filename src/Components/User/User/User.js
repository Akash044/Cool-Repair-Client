import "./User.css";
import React, { useContext, useEffect, useState } from "react";
import Book from "../Book/Book";
import BookingList from "../../User/BookingList/BookingList"
import SideBar from "../../SideBar/SideBar";
import { useParams } from "react-router";
import WriteReview from "../WriteReview/WriteReview";
import { UserContext } from "../../../App";


const User = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [displayOption, setDisplayOption] = useState(1);
  const userEmail = {email: sessionStorage.getItem("email")}

  useEffect(() => {
    fetch(`http://localhost:8080/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
          setService(data);
      });
  }, [id]);
  const handleDisplay = (value) =>{
      console.log(value);
      setDisplayOption(value);

  }
  console.log(displayOption);
  return (
    <div className="row user-page">
      <div className="col-md-2">
        <SideBar handleDisplay={handleDisplay}></SideBar>
      </div>
      <div className="col-md-10">
       
        {(() => {
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
        })()
      }
       
      </div>
    </div>
  );
};

export default User;
