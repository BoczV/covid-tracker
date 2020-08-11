import React from "react";
import numeral from "numeral";

function TableElement({ country, cases }) {
  return (
    <tr>
      <td>{country}</td>
      <td>
        <strong>{numeral(cases).format("0,0")}</strong>
      </td>
    </tr>
  );
}

export default TableElement;
