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

  // sets state to match database change, avoids database pull for favorite.. not sure if this is worth? ***
  handleOnClickChip = (event) => {
    // console.log(event.target.id);
    let query = {id:event.target.id}
    API.put(query)
      .then(res => {
        // console.log(res.)
        console.log("id", res.data._id);
        let newInvoice = res.data
        let id = res.data._id;
        console.log("state", this.props.invoice);
        let currentState = this.props.invoice;
        let arrayOfStateId = currentState.map(invoice => {
          return invoice._id
        })
        console.log("arrayOfStateId", arrayOfStateId);

        let indexOfFavorited = arrayOfStateId.indexOf(id);
        if (indexOfFavorited !== -1) {
          currentState[indexOfFavorited] = newInvoice;
          console.log("new current state", currentState)
          this.props.faveState(currentState);
        }

        // is this better? /////////////***
        // this.props.pullInvoices();


        // console.log("indexOfFavorited", indexOfFavorited);
        // this.props.onClick();
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
