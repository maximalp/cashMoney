import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Dashboard</Link>
    </li>
    <li className={window.location.pathname === "/about" ? "active" : ""}>
      <Link to="/invoices">Invoices</Link>
    </li>
    <li className={window.location.pathname === "/blog" ? "active" : ""}>
      <Link to="/clients">Clients</Link>
    </li>
    <li className={window.location.pathname === "/contact" ? "active" : ""}>
      <Link to="/expenses">Expenses</Link>
    </li>
    <li
      className={window.location.pathname === "/contact/learn" ? "active" : ""}
    >
      <Link to="/expenses/learn">Learn</Link>
    </li>
  </ul>;

export default Navpills;
