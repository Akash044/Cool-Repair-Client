import "./AllReviews.css";
import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";
import requestServices, { getReviews } from "../../../../Services/httpServices";
import reviewServices from "../../../../Services/reviewService";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    requestServices.get("/reviews").then((data) => {
      setReviews(data);
    });
  }, []);
  console.log(reviews);
  return (
    <div className="reviews-section">
      {reviews.map((review) => (
        <SingleReview key={review._id} review={review}></SingleReview>
      ))}
    </div>
  );
};

export default AllReviews;
