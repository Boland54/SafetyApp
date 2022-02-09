import React from "react";
import "./probCSS.css"

function Problems() {
  return (
    <div className="page-heading">
    <table className="table1">
        <tr>
          <th>Fixed?</th>
          <th>Problem</th>
          <th>Location</th>
        </tr>
        <tr>
          <td>Yes</td>
          <td>Broken light</td>
          <td>3rd flooor</td>
        </tr>
        <tr>
          <td>No
          </td>
          <td>Leak in a pipe</td>
          <td>Builing B block A</td>
        </tr>
        <tr>
          <td>No</td>
          <td>Door Handle loose</td>
          <td>Canteen</td>
        </tr>
      </table>
    </div>
  );
}

export default Problems;
