import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { UserContext } from "../../../App";

const SimpleCardForm = (props) => {
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState(null);
  const [orderInfo, setOrderInfo] = useState({});
  const { name, charge, image, description } = props.service;
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      setErrorMessage(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setErrorMessage(null);
      const newData = {
        email: loggedUser.email,
        serName: name,
        serImg: image,
        serDesc: description,
        serCharge: charge,
        serStatus: "pending",
        paymentId: paymentMethod.id,
      };
      console.log(newData);
      setOrderInfo(newData);

      fetch("https://fierce-waters-48255.herokuapp.com/addAppointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      })
        .then((res) => res.json())
        .then((data) => {
          data && alert('Order confirmed successfully')
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5" style={{ width:""}}>
      <h5>Enter card number:</h5>
      <CardElement />
      {errorMessage && <p style={{color:"red"}}>{errorMessage}</p>}
      <button type="submit" className="btn btn-success mt-2" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
export default SimpleCardForm;
