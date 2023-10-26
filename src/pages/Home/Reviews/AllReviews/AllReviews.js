import "./AllReviews.css";
import React from "react";
import SingleReview from "../SingleReview/SingleReview";
import ReviewServices from "../../../../Services/ReviewServices";
import useAsync from "../../../../hooks/useAsync";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";

const AllReviews = () => {
  const { data, isLoading, isSuccess } = useAsync(ReviewServices.getReviews);

  return (
    <div className="p-4">
      {isLoading && <h3 className="mx-auto">Loading......</h3>}
      {isSuccess && (
        <Swiper modules={[Virtual]} spaceBetween={20} slidesPerView={3} virtual>
          {data.map((review, index) => (
            <SwiperSlide key={review._id} virtualIndex={index}>
              <SingleReview review={review}></SingleReview>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default AllReviews;
