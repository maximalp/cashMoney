import React from 'react';

const InvoiceCardList = (props) => {
  let invoices = props.invoice.map((invoice) => {
    return (
      <li className="col m12">
        <div className="card">
          <h2>{invoice.field1}</h2>
        </div>
      </li>
    )
  })
  return(
    <ul className="row">
      {invoices}
    </ul>
  )
}

export default InvoiceCardList;
