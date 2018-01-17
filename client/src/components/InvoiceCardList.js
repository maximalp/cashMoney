import React from 'react';
import InvoiceCard from './InvoiceCard';

const InvoiceCardList = (props) => {
  let invoices = props.invoices.map((invoice) => {
    return (
      <InvoiceCard invoices={invoice}/>
    )
  })
  return(
    <ul className="row">
      {invoices}
      <h4>1-{invoices.length} of {invoices.length}</h4>
    </ul>
  )
}

export default InvoiceCardList;
