import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import StripePayment from '../StripePayment/StripePayment';

const Book = (props) => {
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [isNext, setIsNext] = useState(false);
    const {name, description, charge} = props.service;

   const handleNextBtn = () =>{
    setIsNext(!isNext);

   }
    const handleBookBtn = () => {
        fetch('http://localhost:8080/addAppointment')
    }


    return (
        <div>{!isNext ? <>
            <h4>Service: {name}</h4>
            <h5>Charge: ${charge}</h5>
            <input type="text" value={loggedUser.userName}/> <br/>
            <input type="text" className="mt-2" value={loggedUser.email}/> <br/>
            <button className="btn btn-primary mt-2"onClick={handleNextBtn}> Next </button></>
            :
            <StripePayment></StripePayment>}
        </div>
    );
};

export default Book;