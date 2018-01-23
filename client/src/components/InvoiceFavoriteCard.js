import React from 'react';

const InvoiceFavoriteCard = (props) => {
    let invoice = props.theChosenOne;
    console.log("invoice shown", invoice)
    console.log("favoritecardProps Key", invoice.key)
    return(
      <div className="row"> {(invoice.key === undefined) ?
        <div style={{height:'400px', 'background':'white', 'margin-top':'15px'}} className="card col m12 z-depth-3">
          <div className="row">
            <div className="left-align col m12">
              { (invoice._id && invoice.status === 'Sent') ? (<button onClick={props.onClick} id={invoice._id}>Mark as Paid</button>) :
              (<div></div>) }
              <h4>Invoice Number:{invoice.invoiceId}</h4>
              <h6>Company:{invoice.clientCompanyName}</h6>
              <h6>Date Issued:{invoice.dateOfIssue}</h6>
              <h6>Date Due:{invoice.dateOfIssue}</h6>
            </div>
            <div className="col m12 left-align">

              <h4>Amounts:</h4>
              <h6>Invoice Amount:{invoice.lineTotal}</h6>
              <h6>Invoice Description: {invoice.lineDescription}</h6>

            </div>
            <div className="left-align col m12">

              <h4>Status:</h4>
              <h5>{invoice.status}</h5>
            </div>
          </div>
        </div>
        :
          <div className="card col m12" style={{height:'500px', background:'#64b5f6'}}>
            <h1>No favorite invoices to preview</h1>
          </div>
        }
      </div>
    )
}

export default InvoiceFavoriteCard;
