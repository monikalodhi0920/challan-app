import React from 'react';
import TableRow from './TableRow';
import PaymentModes from './PaymentModes';

const ChallanForm = () => {
  const total = 1159;

  return (
    <div className="form-box">
      <h3 className="section-title">Reason For Challan</h3>
      <div className="reason-box">
        <div className="reason-label">Reason</div>
        <div className="reason-value">Any other payment</div>
      </div>

      <h3 className="section-title">Details of Deposit</h3>
      <div className="table-wrapper">
      <table className="deposit-table">
        <thead>
          <tr>
            <th></th>
            <th>Tax (₹)</th>
            <th>Interest (₹)</th>
            <th>Penalty (₹)</th>
            <th>Fees (₹)</th>
            <th>Other (₹)</th>
            <th>Total (₹)</th>
          </tr>
        </thead>
        <tbody>
          <TableRow label="CGST(0005)" />
          <TableRow label="IGST(0008)" tax={159} total={1159} />
          <TableRow label="CESS(0009)" />
          <TableRow label="Madhya Pradesh SGST(0006)" />
        </tbody>
      </table>
    </div>
      <table className="total-amount-table">
  <tbody>
    <tr>
      <td className="label-cell"colSpan="6">Total Challan Amount:</td>
      <td>₹ 1,159 /-</td>
    </tr>
    <tr>
      <td className="label-cell"colSpan="6">Total Challan Amount (In Words):</td>
      <td>Rupees One Thousand One hundred Fifty-Nine Only</td>
    </tr>
  </tbody>
</table>

      <PaymentModes />

      <div className="button-container">
  <button className="generate-button" disabled>GENERATE CHALLAN</button>
</div>

    </div>
  );
};

export default ChallanForm;
