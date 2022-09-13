import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import Button from "../button/Button";
import "./PaymentForm.scss";

const PaymentForm = ({ cartTotal }) => {
  return (
    <>
      {cartTotal > 0 && (
        <div className="container">
          <div className="row">
            <div className="bg-light px-4 py-3 my-3 text-uppercase font-weight-bold">
              enter your payment details
            </div>
            <div className="col-lg-6 col-xs-12 my-3">
              <CardElement />
            </div>
            <div className="col-lg-6 col-xs-12 my-3">
              <Button disabled={cartTotal === 0}>Pay Now</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
