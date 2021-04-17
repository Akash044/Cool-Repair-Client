import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import './WriteReview.css'

const WriteReview = () => {
    document.title = "Write Review"
    const [review, setReview] = useState({});
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    
    const handleReview = (e) => {
        const review = e.target.value;
        setReview({
            ...loggedUser,
            review: review,
            time : new Date().toDateString()
        });
    }

   
    const handleReviewBtn = () => {
        fetch('http://localhost:8080/addReview',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{
            data && alert('review added successfully');
        })
    };
    return (
        <div className="mt-5 review-page shadow">
            
            <h3>Write your Review</h3>
            <input onBlur={handleReview} type="text" className="mt-3" placeholder="here"/> <br/>
            <button className="btn btn-info mt-3" onClick={handleReviewBtn}>Submit</button>
        </div>
    );
};

export default WriteReview;