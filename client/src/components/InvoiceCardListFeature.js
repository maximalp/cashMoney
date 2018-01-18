import React from 'react';
import InvoiceCardList from './InvoiceCardList';
import InvoiceSorter from './InvoiceSorter';
import API from './utils/API';

class InvoiceCardListFeature extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      invoices:[]
    }
  }

  componentDidMount() {
  }

  handleOnClickChip = (event) => {
    console.log(event.target.id);
    let query = {id:event.target.id}
    API.put(query)
      .then(res => {
        console.log(res)
        this.props.onClick();
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div className="row" style={{background:'pink'}}>
        <div className="col m12">
          <InvoiceSorter switches={this.props.switches}/>
          <InvoiceCardList onClick={this.handleOnClickChip} invoices={this.props.invoice}/>
        </div>
      </div>
    )
  }
}

export default InvoiceCardListFeature;
