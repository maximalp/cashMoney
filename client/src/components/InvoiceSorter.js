import React from 'react';

const InvoiceSorter = (props) => {
  return (
    <div className="row">
      <div className="col m3">
        <br/>
        <button name="clientSwitch" onClick={props.switches}>
          Client / Invoice Number
        </button>
      </div>
      <div className="col m3">
        <br/>
        <button name="issuedDateSwitch" onClick={props.switches}>
          Issued Date
        </button>
      </div>
      <div className="col m3">
        <br/>
        <button name="dueDateSwitch" onClick={props.switches}>
          Due Date
        </button>
      </div>
      <div className="col m3">
        <br/>
        <button name="amountSwitch" onClick={props.switches}>
          Amount / Status
        </button>
      </div>
    </div>
  )
}

export default InvoiceSorter;
