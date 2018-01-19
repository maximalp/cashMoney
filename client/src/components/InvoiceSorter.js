import React from 'react';

const InvoiceSorter = (props) => {
  return (
    <div className="row">
      <div className="col m3">
        <button name="clientCompanyNameOrinvoiceId" onClick={props.switches}>
          Client / Invoice Number
        </button>
      </div>
      <div className="col m3">
        <button name="issuedDateDesc" onClick={props.switches}>
          Issued Date
        </button>
      </div>
      <div className="col m3">
        <button name="dueDateDesc" onClick={props.switches}>
          Due Date
        </button>
      </div>
      <div className="col m3">
        <button name="AmountOrStatus" onClick={props.switches}>
          Amount / Status
        </button>
      </div>
    </div>
  )
}

export default InvoiceSorter;
