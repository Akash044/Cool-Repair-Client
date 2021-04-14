import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import AllReviews from '../Reviews/AllReviews/AllReviews';
import AllServices from '../Services/AllServices/AllServices';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <AllServices></AllServices>
            <AllReviews></AllReviews>
            
        </div>
    );
};

export default Home;