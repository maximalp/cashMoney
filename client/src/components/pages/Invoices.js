import React from "react";
import InvoiceGenerator from '../InvoiceGenerator';
import InvoiceCardListFeature from '../InvoiceCardListFeature';
import API from '../utils/API';
import InvoiceModal from '../InvoiceModal';
import InvoiceFavoriteFeature from '../InvoiceFavoriteFeature';

class Invoices extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: "",
      phoneNumber: "",
      street: "",
      city: "",
      USstate: "",
      zip:"",
      country:"United States",
      clientFirstName:"",
      clientLastName:"",
      clientCompanyName:"",
      clientStreetAddress:"",
      clientCity:"",
      clientState:"",
      clientZip:"",
      amountDue:"",
      lineDescription:"",
      lineRate:"",
      lineQty:"",
      lineTotal:"",
      holder:{},
      invoice:[
          {field1:"cat", field2:"catkins"},
          {field1:"dog", field2:"dogkins"},
          {field1:"bunny", field2:"fluffykins"},
          {field1:"lizard", field2:"scalekins"},
          {field1:"bird", field2:"featherkins"},
          {field1:"fish", field2:"swimkins"},
          {field1:"snake", field2:"snekskins"},
          {field1:"dragon", field2:"dragonkins"},
        ],
      searchSwitches:{
          clientCompanyNameOrinvoiceId:true,
          issuedDateDesc:true,
          dueDateDesc: true,
          AmountOrStatus: true
      }
    }
  }

  componentDidMount() {
    let query = '/api/pullInvoices';
    API.get(query)
      .then(res => {
        let invoices = res.data;
        console.log(invoices);
        this.setState({invoice:invoices})
      })
      .catch(err => console.log(err));
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  pullInvoices = () => {
    let query = '/api/pullInvoices';
    API.get(query)
      .then(res => {
        let invoices = res.data;
        console.log(invoices);
        this.setState({invoice:invoices})
      })
      .catch(err => console.log(err));
  }

  handleOnClickSearchSwitches = (event) => {
    let filterSwitch = event.target.name;
    let query = `/api/invoice/filter/${filterSwitch}`

    // switch(filterSwitch) {
    //   case "clientCompanyNameOrinvoiceId":
    //     this.state.
    //     break;
    //   case "issuedDateDesc":
    //     Coded
    //     break;
    //   case "dueDateDesc":
    //     Coded
    //     break;
    //   case "AmountOrStatus":
    //     Coded
    //     break;
    // }

    API.get(query)
      .then(res => {
        console.log(res.data);
        this.setState({invoice:res.data})
      })
      .catch(err => console.log(err));
  }

  handleOnClickCreate = (event) => {
    let query = '/make';
    API.get(query)
    .then(res => {
      let newEntry = res.data;
      this.setState({holder:newEntry})
    })
    .catch(err => console.log(err));
  }

  handleOnClickState = (event) => {
    console.log(this.state);
  }

  render () {
    return (
      <div className="row">
        <div className="col m12">
          <InvoiceModal>
          </InvoiceModal>
        </div>
        <div className="col m12">
          <div className="row">
            <div className="col m12">
              <h3>Favorite Invoices</h3>
              <InvoiceFavoriteFeature />
              <button onClick={this.handleOnClickState}>Show State</button>
              <button onClick={this.handleOnClickCreate}>Create dummy invoice</button>
            </div>
          </div>
          <div className="row">
            <div className="col m3">
              <h5>All Invoices</h5>
            </div>
          </div>
          <div className="row">
            <div className="col m12">
              <InvoiceCardListFeature onClick={this.pullInvoices} switches={this.handleOnClickSearchSwitches} invoice={this.state.invoice}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Invoices;
