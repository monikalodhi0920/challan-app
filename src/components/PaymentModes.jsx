import React from 'react';

const PaymentModes = () => (
  <div className="payment-modes">
    <label className="payment-label">
      Payment Modes<span className="required">●</span>
    </label>

    <div className="payment-option">
      <span className="payment-icon">🖥</span>
      <span className="payment-text">E-Payment</span>
    </div>

    <div className="payment-option">
      <span className="payment-icon">💳</span>
      <span className="payment-text">Over The Counter</span>
    </div>

    <div className="payment-option">
      <span className="payment-icon">🌐</span>
      <span className="payment-text">NEFT/RTGS</span>
    </div>
  </div>
);

export default PaymentModes;
