import "./HomeLayout.css";
import React from "react";
import Footer from "../Footer/Footer";
import AllReviews from "../Reviews/AllReviews/AllReviews";
import AllServices from "../Services/AllServices/AllServices";
import AskQuestion from "../AskQuestion/AskQuestion";
import Blog from "../Blog/Blog";
import Banner from "../Banner/Banner";

const Home = () => {
  document.title = "Home";
  return (
    <div>
      <div className="container">
        <Banner></Banner>
      </div>
      <div className=" contents">
        <div className="review-header mb-4 mx-auto d-flex justify-content-center align-items-center">
          <hr className="border border-danger border-2 line-width" />
          <div className="fs-3 fw-bold text-uppercase">
            The Services we are provided
          </div>
          <hr className="border border-danger border-2 line-width" />
        </div>
        <div className="container">
          <AllServices></AllServices>
        </div>
      </div>
      <div className="contents">
        <div className="review-header mb-4 d-flex justify-content-center align-items-center">
          <hr className="border border-danger border-2 line-width" />
          <div className="fs-3 fw-bold text-uppercase">Reviews</div>
          <hr className="border border-danger border-2 line-width" />
        </div>
        <div className="container">
          <AllReviews></AllReviews>
        </div>
      </div>
      <div className="contents">
        <div className="review-header mb-4 mx-auto d-flex justify-content-center align-items-center">
          <hr className="border border-danger border-2 line-width" />
          <div className="fs-3 fw-bold text-uppercase">Blogs</div>
          <hr className="border border-danger border-2 line-width" />
        </div>
        <div className="container">
          <Blog></Blog>
        </div>
      </div>
      <div className="contents">
        <div className="review-header mb-4 mx-auto d-flex justify-content-center align-items-center">
          <hr className="border border-danger border-2 line-width" />
          <div className="fs-3 fw-bold text-uppercase">Ask us Anything</div>
          <hr className="border border-danger border-2 line-width" />
        </div>
        <div className="container">
          <AskQuestion></AskQuestion>
        </div>
      </div>
      <div className="mt-4">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
