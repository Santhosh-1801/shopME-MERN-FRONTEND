import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = ({shipping,confirmOrder,payment}) => {
  return (
    <div className="checkout-progress d-flex justify-content-center mt-5">
      <div className="d-flex align-items-center">
        {/* Shipping */}
        {shipping?(<Link to="/shipping" className="step-link text-center">
          <div className="triangle2-active"></div>
          <div className="step active-step">Shipping</div>
          <div className="triangle-active"></div>
        </Link>):<Link to="#!" className="step-link text-center ms-4" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Shipping</div>
          <div className="triangle-incomplete"></div>
        </Link>}

        {/* Confirm Order */}
        {confirmOrder?(<Link to="/confirm_order" className="step-link text-center ms-4">
          <div className="triangle2-active"></div>
          <div className="step active-step">Confirm Order</div>
          <div className="triangle-active"></div>
        </Link>):(<Link to="#!" className="step-link text-center ms-4" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Confirm Order</div>
          <div className="triangle-incomplete"></div>
        </Link>)}
        {/* Payment */}
        {payment?( <Link to="/payment_method" className="step-link text-center ms-4">
          <div className="triangle2-active"></div>
          <div className="step active-step">Payment</div>
          <div className="triangle-active"></div>
        </Link>):(<Link to="#!" className="step-link text-center ms-4" disabled>
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Payment</div>
          <div className="triangle-incomplete"></div>
        </Link>)}
      </div>
    </div>
  );
};

export default Checkout;
