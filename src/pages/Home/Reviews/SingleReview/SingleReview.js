import "./SingleReview.css";
import React, { useState } from "react";

const SingleReview = (props) => {
  const { userName, photo, review, time } = props.review;
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className="h-100 review-card">
      <div className="testimonial shadow rounded">
        <img src={photo} alt="" />
        <div className="name">{userName}</div>
        <p className="review-p">{review}</p>
        <p className="see-more-btn" onClick={() => setSeeMore(!seeMore)}>
          {!seeMore && "see more..."}
          {seeMore && "see less..."}
        </p>

        <p className="time-p">{time}</p>
      </div>
      {seeMore && (
        <div className="see-more-div shadow p-4 rounded">
          <p>{review}</p>
        </div>
      )}
    </div>
  );
};

export default SingleReview;
