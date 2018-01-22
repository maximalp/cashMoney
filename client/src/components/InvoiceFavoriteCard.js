import React from 'react';

const InvoiceFavoriteCard = (props) => {
    let invoice = props.theChosenOne;
    console.log("invoice shown", invoice)
    console.log("favoritecardProps Key", invoice.key)
    return(
      <div className="row"> {(invoice.key === undefined) ?
        <div style={{height:'500px', 'background':'#64b5f6'}} className="card col m12">
          <div className="row">
            <div className="col m12">
              <h4>Invoice Number:{invoice.invoiceId}</h4>
              <h5>Company:{invoice.clientCompanyName}</h5>
              <h5>Date Issued:{invoice.dateOfIssue}</h5>
              <h5>Date Due:{invoice.dateOfIssue}</h5>
            </div>
            <div className="col m12">

              <h4>Amounts:</h4>
              <h5>Invoice Amount:{invoice.lineTotal}</h5>
              <h5>Invoice Description: {invoice.lineDescription}</h5>

            </div>
            <div className="col m12">

              <h4>Status:</h4>
              <h5 style={[{'background':'red'}]}>{invoice.status}</h5>

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
