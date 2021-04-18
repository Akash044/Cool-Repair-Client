import './AllReviews.css'
import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const AllReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
            fetch('https://fierce-waters-48255.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data =>{
                setReviews(data);
            })
    },[])
    return (
        <div className="reviews-section">
            
            {
                reviews.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
            }
            
        </div>
    );
};

export default AllReviews;