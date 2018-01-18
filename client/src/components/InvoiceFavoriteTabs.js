import React from 'react';

const InvoiceFavoriteTabs = (props) => {
  console.log("props",props);
  let tabs = props.invoice.map(invoice => {
    return <li onClick={props.onClick} style={{background:'#009688'}} className="collection-item">{invoice.invoiceId}</li>
  })
  return (
    <div className="col m12">
      <ul className="collection" style={{height:'500px', width:'300px', overflow:'hidden', ['overflow-y']:'scroll'}}>
        {tabs}
      </ul>
    </div>
  )
}

export default InvoiceFavoriteTabs;
