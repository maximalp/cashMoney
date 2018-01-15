import React from 'react';

const InvoiceCardList = (props) => {
  let invoices = props.invoice.map((invoice) => {
    return (
      <li className="col m3">
        <div className="card">
          <h2>{invoice.field1}</h2>
        </div>    
      </li>
    )
  })
  return(
    <uo className="row">
      {invoices}
    </uo>
  )
}

export default InvoiceCardList;
