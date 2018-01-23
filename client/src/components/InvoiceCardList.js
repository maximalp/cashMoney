import React from 'react';
import InvoiceCard from './InvoiceCard';

const InvoiceCardList = (props) => {
  console.log(props)
  let invoices = props.invoices.map((invoice) => {
    return (
      <InvoiceCard viewPull={props.viewPull} inputChange={props.inputChange} edit={props.edit} key={invoice._id} handleOnClickEdit={props.handleOnClickEdit} onClick={props.onClick} invoices={invoice}/>
    )
  })
  return(
    <tbody className="row">
      {invoices}
      <h4>1-{invoices.length} of {invoices.length}</h4>
    </tbody>
  )
}

export default InvoiceCardList;
