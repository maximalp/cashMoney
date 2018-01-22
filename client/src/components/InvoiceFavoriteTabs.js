import React from 'react';

const InvoiceFavoriteTabs = (props) => {
  console.log("props",props);
  let tabs = props.invoice.map(invoice => {
    if (invoice.status === 'Sent') {
      return <li id={invoice._id} key={invoice._id} onClick={props.onClick} style={{background:'#ffa726'}} className="collection-item">{invoice.invoiceId}</li>
    }
    else {
      return <li id={invoice._id} key={invoice._id} onClick={props.onClick} style={{background:'#64b5f6'}} className="collection-item">{invoice.invoiceId}</li>
    }

  })
  console.log("TABS", tabs)

  return (
    <div className="row">
      <ul className="collection col m12" style={{height:'500px', overflow:'hidden', ['overflow-y']:'scroll'}}>
      {/* <ul className="collection col m12" style={{height:'500px',overflow:'hidden', ['overflow-y']:'scroll'}}>   */}
        {tabs}
      </ul>
    </div>
  )
}

export default InvoiceFavoriteTabs;
