import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cartSelector";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import Button from "../../components/button/Button";
import { Accordion } from "react-bootstrap";
import "./Checkout.scss";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="pb-5">
      <div className="container">
        <div className="bg-light px-4 py-3 my-3 text-uppercase font-weight-bold">
          {cartTotal === 0 ? "Your cart is empty" : "Your cart"}
        </div>
        {cartTotal > 0 && (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Review your cart</Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col">
                    <div className="p-4">
                      <ul className="list-unstyled mb-4">
                        <li className="d-flex flex-column justify-content-center py-3 border-bottom">
                          <div className="checkout__card-container">
                            {cartItems.map((cartItem) => (
                              <CheckoutItem
                                key={cartItem.id}
                                cartItem={cartItem}
                                id={cartItem.id}
                              />
                            ))}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}

        <div className="row py-5 p-4 bg-white d-flex align-items-center shadow-sm">
          <div className="col-lg-6">
            <div className="bg-light px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
            <div className="p-4">
              <p className="font-italic mb-4">
                If you have a coupon code, please enter it in the box below
              </p>
              <div className="input-group mb-4 border p-2">
                <input
                  type="text"
                  placeholder="Apply coupon"
                  aria-describedby="button-addon3"
                  className="form-control border-0"
                />
                <div className="input-group-append border-0">
                  <Button buttonType="inverted" to="/" disabled={cartTotal === 0}>
                    Enter coupon code
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-light px-4 py-3 text-uppercase font-weight-bold">Order summary</div>
            <div className="p-4">
              <p className="font-italic mb-4">
                Shipping and additional costs are calculated based on values you have entered.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Order Subtotal </strong>
                  <strong>${cartTotal}</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Shipping and handling</strong>
                  <strong>$0</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Tax</strong>
                  <strong>$0</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Total</strong>
                  <h5 className="font-weight-bold">${cartTotal}</h5>
                </li>
              </ul>
              <Button to="/" disabled={cartTotal === 0}>
                Proceed to checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
