import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const WriteReview = () => {
    const [review, setReview] = useState({});
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const handleReview = (e) => {
        console.log(e.target.value);
        const review = e.target.value;
        setReview({
            ...loggedUser,
            review: review
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
            console.log(data);
        })
    }
    console.log(review);
    return (
        <div className="mt-5">
            
            <h3>Write your Review</h3>
            <input onBlur={handleReview} type="text"/> <br/>
            <button className="btn btn-info mt-3" onClick={handleReviewBtn}>Submit</button>
        </div>
    );
};

export default WriteReview;