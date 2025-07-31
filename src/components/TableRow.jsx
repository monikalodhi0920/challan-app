import React from 'react';

const TableRow = ({ label, tax = 0, interest = 0, penalty = 0, fees = 0, other = 0, total = 0 }) => (
  <tr>
    <td>{label}</td>
    <td><input type="text" value={tax} readOnly /></td>
    <td><input type="text" value={interest} readOnly /></td>
    <td><input type="text" value={penalty} readOnly /></td>
    <td><input type="text" value={fees} readOnly /></td>
    <td><input type="text" value={other} readOnly /></td>
    <td><input type="text" value={total} readOnly /></td>
  </tr>
);

export default TableRow;
