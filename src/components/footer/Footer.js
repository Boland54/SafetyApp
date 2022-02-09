import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
     <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        <tr>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr>
      </table>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Safety App | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
        </div>

  );
}

export default Footer;
