import React from "react";
import InvoiceGenerator from '../InvoiceGenerator';
import InvoiceCardListFeature from '../InvoiceCardListFeature';
import API from '../utils/API';
import InvoiceModal from '../InvoiceModal';

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
        ]
    }
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
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

  handleOnClick = (event) => {
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
              <h1>Invoices</h1>
              <button onClick={this.handleOnClickCreate}>Create dummy invoice</button>
            </div>
          </div>
          <h1>Favorited Invoice</h1>
          <InvoiceCardListFeature invoice={this.state.invoice}/>
          <p>
            Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
            Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu dictum.
            Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus sodales
            volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc, sed
            pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum,
            nisi justo laoreet risus, luctus luctus mi lacus sit amet libero. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Mauris pretium condimentum tellus eget lobortis. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Donec placerat accumsan
            mi, ut congue neque placerat eu. Donec nec ipsum in velit pellentesque
            vehicula sit amet at augue. Maecenas aliquam bibendum congue. Pellentesque
            semper, lectus non ullamcorper iaculis, est ligula suscipit velit, sed
            bibendum turpis dui in sapien.
          </p>
        </div>
      </div>
    )
  }
}

export default Invoices;
