import React from 'react';
import InvoiceCardList from './InvoiceCardList';
import InvoiceSorter from './InvoiceSorter';
import API from './utils/API';

const InvoiceCardListFeature = (props) => {
    return (
      <div className="row" style={{background:'pink'}}>
        <div className="col m12">
          <InvoiceSorter switches={props.switches}/>
          <InvoiceCardList inputChange={props.inputChange} edit={props.edit} handleOnClickEdit={props.handleOnClickEdit} onClick={props.handleOnClickChip} invoices={props.invoice}/>
        </div>
      </div>
    )
}

export default InvoiceCardListFeature;
