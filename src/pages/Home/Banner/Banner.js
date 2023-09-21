import React from "react";
import "./Banner.css";
import img from "../../../assets/images/03.jpg";

const Banner = () => {
  return (
    <div className="w-100 justify-center">
      <div className="d-flex justify-content-around align-self-stretch banner-section border-none">
        <div className="col banner-img-div">
          <img
            src={img}
            height={350}
            width={600}
            className="card-img banner-img"
            alt="..."
          />
        </div>

        <div className="col">
          <h4 className="mt-4">Experience Cool Confidence with Our Repairs!</h4>
          <p className="">
            Welcome to COOL REPAIR - Your Premier Destination for Top-notch
            Repair Services! When it comes to restoring comfort and peace of
            mind, we've got you covered. Our expert technicians are committed to
            delivering swift, efficient, and reliable repairs for all your home
            and office needs. From AC units to appliances, we bring life back to
            your essentials. Experience hassle-free service, unmatched
            expertise, and a commitment to your satisfaction. Trust us for the
            repairs you need, because at COOL REPAIR, fixing things isn't just a
            job; it's our passion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
