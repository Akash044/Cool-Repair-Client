import "./AllReviews.css";
import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";
import ReviewServices from "../../../../Services/ReviewServices";
import useAsync from "../../../../hooks/useAsync";

const AllReviews = () => {
  const { data, isLoading, isSuccess, isError, error } = useAsync(
    ReviewServices.getReviews
  );

  return (
    <div className="reviews-section">
      {isLoading && <h3 className="mx-auto">Loading......</h3>}
      {isSuccess &&
        data.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
    </div>
  );
};

export default AllReviews;
