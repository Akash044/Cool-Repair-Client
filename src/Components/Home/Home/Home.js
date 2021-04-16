import './Home.css'
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AllReviews from "../Reviews/AllReviews/AllReviews";
import AllServices from "../Services/AllServices/AllServices";

const Home = () => {
  return (
    <div className="container">
      <div>

        <Header></Header>
      </div>
      <div className="mt-4">
          <div className="service-header">
              <h3>The Services we are provided</h3>
          </div>
        <AllServices></AllServices>
      </div>
      <div className="mt-4">
      <div className="review-header mb-2">
              <h3>Reviews</h3>
          </div>
        <AllReviews></AllReviews>
      </div>
      <div className="mt-4">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
