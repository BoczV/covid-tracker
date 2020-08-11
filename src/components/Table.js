import React from "react";
import "../Styles/Table.css";
import TableElement from "./TableElement";

function Table({ countries }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <td>
              <h3>Live Cases by Country</h3>
            </td>
          </tr>
        </thead>
        <tbody>
          {countries.map(({ country, cases, id }) => (
            <TableElement key={id} country={country} cases={cases} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
