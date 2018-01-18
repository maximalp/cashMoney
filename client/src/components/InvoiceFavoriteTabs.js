import React from 'react';

const InvoiceFavoriteTabs = (props) => {
  return (
    <li onClick={props.onClick} style={{background:'blue'}}className="tab col m2 card">Invoice Favorite Tabs</li>
  )
}

export default InvoiceFavoriteTabs;
