import React from 'react';
import InvoiceModalView from './InvoiceModalView';

const InvoiceCard = (props) => {

  console.log(props.invoices._id)

  return (
    <tr key={props.invoices._id} >
      <div className="col m12 card z-depth-3">
        <div className="row">
          <div className="col m2">
            <td>Invoice: {props.invoices.invoiceId}</td>
          </div>
          <div className="col m2">
            <td>Company:{props.invoices.clientCompanyName}</td>
          </div>
          <div className="col m2">
            <td>Date:{props.invoices.dateOfIssue}</td>
          </div>
          <div className="col m2">
            <td>Date:{props.invoices.dueDate}</td>
          </div>
          <div className="col m2">
            <td>Total: ${props.invoices.lineTotal}</td>
          </div>
          <div className="col m2">
            <td>Status: {props.invoices.status}
            </td>
          </div>
        </div>
        <div className="row card-action">
          <div className="col m2">
            {(props.invoices.favorite) ?
            <a style={{background:"#0288d1"}} onClick={props.onClick} className="btn" id={props.invoices._id}>+</a>
            :
            <a style={{background:"#232d4b"}} onClick={props.onClick} className="btn" id={props.invoices._id}>+</a>
            }
          </div>
          <div className="col m2">
            <InvoiceModalView viewPull={props.viewPull} id={props.invoices._id} />
          </div>
        </div>
      </div>
    </tr>
  )
}

export default InvoiceCard;
