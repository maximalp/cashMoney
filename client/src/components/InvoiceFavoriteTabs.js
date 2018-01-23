import React from 'react';

const InvoiceFavoriteTabs = (props) => {
  console.log("props",props);
  let tabs = props.invoice.map(invoice => {
    if (invoice.status === 'Sent') {
      return <li id={invoice._id} key={invoice._id} onClick={props.onClick} style={{background:'#0288d1'}} className="col m12 btn">Number: {invoice.invoiceId}</li>
    }
    else {
      return <li id={invoice._id} key={invoice._id} onClick={props.onClick} style={{background:'#4caf50'}} className="col m12 btn">Number: {invoice.invoiceId} ✔</li>
    }

  })
  console.log("TABS", tabs)

  return (
      <ul className='z-depth-3' style={{height:'400px', overflow:'hidden', ['overflow-y']:'scroll'}}>
      {/* <ul className="collection col m12" style={{height:'500px',overflow:'hidden', ['overflow-y']:'scroll'}}>   */}
        {tabs}
      </ul>
  )
}

export default InvoiceFavoriteTabs;
