import React from 'react';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import WriteReview from '../WriteReview/WriteReview';

const User = () => {
    return (
        <div>
            <Book></Book>
            <BookingList></BookingList>
            <WriteReview></WriteReview>
            
        </div>
    );
};

export default User;