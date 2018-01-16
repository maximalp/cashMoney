import React from 'react';

const ClientCardList = (props) => {
  let clients = props.client.map((client) => {
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
