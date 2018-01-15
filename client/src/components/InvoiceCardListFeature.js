import React from 'react';
import InvoiceCardList from './InvoiceCardList';

class InvoiceCardListFeature extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      invoices:[]
    }
  }

  componentDidMount() {
    let invoices = this.props.invoice;
    this.setState({
      invoices:invoices
    })
  }

  render () {
    return (
      <div className="row" style={{background:'pink'}}>
        <div className="col m12">
          <h1>InvoiceCardListFeature Component</h1>
          <InvoiceCardList invoices={this.state.invoices}/>
        </div>
      </div>
    )
  }
}

export default InvoiceCardList;
