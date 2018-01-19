import React from 'react';

const InvoiceCard = (props) => {

  console.log(props.invoices._id)

  return (
    <li key={props.invoices._id}>
      <div className="col m12 card">
        <div className="row">
          <div className="col m1">
            <br />
            <div className="chip">Select</div>
            <div style={(props.invoices.favorite) ? {background:"yellow"} : {background:""}} onClick={props.onClick} className="chip" id={props.invoices._id}>Favorite</div>

          </div>

          <div className="col m3">
            <h6>{props.invoices.clientCompanyName}</h6>
          </div>
          <div className="col m3">
            <h6>{props.invoices.dateOfIssue}</h6>
          </div>
          <div className="col m3">
            <h6>{props.invoices.dueDate}</h6>
          </div>
          <div className="col m2">
            <h6>{props.invoices.lineTotal}</h6>
          </div>

        </div>
        <div className="row">
          <div className="col m3 offset-m1">
            <text>Invoice: {props.invoices.invoiceId}</text>
            <text>Invoice: {props.invoices._id}</text>
          </div>
          <div className="col m2 offset-m6">
            <text>Status: {props.invoices.status}
            </text>
          </div>
        </div>


      </div>
    </li>
  )
}

export default InvoiceCard;
