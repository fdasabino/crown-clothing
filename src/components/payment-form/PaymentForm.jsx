import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelector";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../button/Button";
import "./PaymentForm.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [processingPayment, setProcessingPayment] = useState(false);
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
          email: currentUser.email ? currentUser.email : "No email provided",
        },
      },
    });

    setProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Success");
      }
    }
  };

  return (
    <>
      {amount > 0 && (
        <div className="container">
          <div className="row">
            <div className="bg-light px-4 py-3 my-3 text-uppercase font-weight-bold">
              enter your payment details
            </div>
            <form onSubmit={paymentHandler}>
              <div className="col-lg-6 col-xs-12 my-3">
                <CardElement />
              </div>
              <div className="col-lg-6 col-xs-12 my-3">
                <Button disabled={amount === 0 || processingPayment}>Pay Now</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
