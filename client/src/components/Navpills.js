import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs" style={{width:'100%', background:'#009688', 'list-style-type':'none', 'margin': '0', 'box-sizing':'border-box'}}>
    <div className="col m">
      <li className={window.location.pathname === "/" ? "active" : ""} style={{background:'#009688', 'list-style-type':'none', 'margin': '0', 'box-sizing':'border-box'}}>
        <Link to="/"><h4 style={{color:"white"}}>Dashboard</h4></Link>
      </li>
    </div>
    <div className="col m">
      <li className={window.location.pathname === "/about" ? "active" : ""} style={{background:'#009688', 'list-style-type':'none', 'margin': '0', 'box-sizing':'border-box'}}>
        <Link to="/invoices"><h4 style={{color:"white"}}>Invoices</h4></Link>
      </li>
    </div>
    <div className="col m">
      <li className={window.location.pathname === "/blog" ? "active" : ""} style={{background:'#009688', 'list-style-type':'none', 'margin': '0', 'box-sizing':'border-box'}}>
        <Link to="/clients"><h4 style={{color:"white"}}>Clients</h4></Link>
      </li>
    </div>
    <div className="col m">
      <li className={window.location.pathname === "/contact" ? "active" : ""} style={{background:'#009688', 'list-style-type':'none', 'margin': '0', 'box-sizing':'border-box'}}>
        <Link to="/expenses"><h4 style={{color:"white"}}>Expenses</h4></Link>
      </li>
    </div>
  </ul>;

export default Navpills;
