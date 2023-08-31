import "./SingleReview.css";
import React from "react";

const SingleReview = (props) => {
  const { userName, photo, review, time } = props.review;
  return (
    <div className="h-100">
      <div className="testimonial shadow rounded">
        <img src={photo} alt="" />
        <div className="name">{userName}</div>
        <p>{review}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default SingleReview;
