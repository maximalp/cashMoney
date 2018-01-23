import React from 'react';
import InvoiceCardList from './InvoiceCardList';
import InvoiceSorter from './InvoiceSorter';
import API from './utils/API';

const InvoiceCardListFeature = (props) => {
    return (
      <div className="row">
        <table className="col m12">
          <InvoiceSorter switches={props.switches}/>
          <InvoiceCardList viewPull={props.pullInvoices} inputChange={props.inputChange} edit={props.edit} handleOnClickEdit={props.handleOnClickEdit} onClick={props.handleOnClickChip} invoices={props.invoice}/>
        </table>
      </div>
    )
}

export default InvoiceCardListFeature;
