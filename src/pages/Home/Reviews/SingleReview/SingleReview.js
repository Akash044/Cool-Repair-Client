import "./SingleReview.css";

const SingleReview = (props) => {
  const { userName, photo, review, time } = props.review;
  return (
    <div className="h-100 review-card">
      <div className="testimonial shadow rounded">
        <img src={photo} alt="" />
        <div className="name">{userName}</div>
        <p className="review-p">{review}</p>

        <p className="time-p">{time}</p>
      </div>
    </div>
  );
};

export default SingleReview;
