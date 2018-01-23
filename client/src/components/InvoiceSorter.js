import React from 'react';

const InvoiceSorter = (props) => {
  return (
    <thead className="row card">
      <tr className="col m1">
        <button style={{background:'#232d4b', border:'black'}} name="clientCompanyNameOrinvoiceId" className="z-depth-2 waves-light btn" onClick={props.switches}>
          Number
        </button>
      </tr>
      <tr className="col m1 offset-m3">
        <button style={{background:'#232d4b', border:'black'}} name="issuedDateDesc" className="z-depth-2 waves-light btn" onClick={props.switches}>
          Issued
        </button>
      </tr>
      <tr className="col m1 offset-m1">
        <button style={{background:'#232d4b', border:'black'}} name="dueDateDesc" className="z-depth-2 waves-light btn" onClick={props.switches}>
          Due
        </button>
      </tr>
      <tr className="col m1 offset-m1">
        <button style={{background:'#232d4b', border:'black'}} name="AmountOrStatus" className="z-depth-2 waves-light btn" onClick={props.switches}>
          Amount
        </button>
      </tr>
    </thead>
  )
}

export default InvoiceSorter;
