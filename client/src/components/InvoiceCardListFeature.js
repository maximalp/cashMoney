import React from 'react';
import InvoiceCardList from './InvoiceCardList';
import InvoiceSorter from './InvoiceSorter';

class InvoiceCardListFeature extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      invoices:[]
    }
  }

  componentDidMount() {
  }

  render () {
    return (
      <div className="row" style={{background:'pink'}}>
        <div className="col m12">
          <InvoiceSorter switches={this.props.switches}/>
          <InvoiceCardList invoices={this.props.invoice}/>
        </div>
      </div>
    )
  }
}

export default InvoiceCardListFeature;
