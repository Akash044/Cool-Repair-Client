import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IgNo4C0BTnScUVgQdLfcLfCOzneHZl9aeYUkRQbxe1gPQIzPKw2aOapp0zgbHAdu1KqORG6nUDUeqiJBGLPxrCh00QQ2o8Gyy');

const StripePayment = (props) => {
  console.log(props.service)
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm service={props.service}></SimpleCardForm>
    </Elements>
  );
};

export default StripePayment;