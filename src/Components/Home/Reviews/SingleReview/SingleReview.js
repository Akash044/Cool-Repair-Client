import './SingleReview.css'
import React from "react";

const SingleReview = (props) => {
  const { userName, email, photo, review } = props.review;
  return (
    <div class="col">
            <div class="testimonial">
              <img src={photo} alt=""/>
              <div class="name">{userName}</div>

              <p>
               {review}
              </p>
            </div>
          </div>

  );
};

export default SingleReview;
