import "./AllReviews.css";
import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";
import ReviewServices from "../../../../Services/ReviewServices";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ReviewServices.getReviews("/reviews").then((data) => {
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
