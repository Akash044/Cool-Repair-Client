import React from 'react';
import StripePayment from '../StripePayment/StripePayment';

const Book = (props) => {
    const {name, charge} = props.service;

    return (
        <div className="mt-5">
            {
                name ?
                <> 
                <h4>{name}</h4>
                <h5>Charge: ${charge}</h5>
                <StripePayment service={props.service}></StripePayment>
                </>
                :
                <h3>Oops you didn't select any service, please select from home page</h3>

            }
           
        </div>
    );
};

export default Book;