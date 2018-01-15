import React from 'react';
import Input from './Input';
import API from './utils/API';

class InvoiceGenerator extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name: "",
      number: "",
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
      holder:{}
    }
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleOnClick = (event) => {
    let query = '/make';
    API.get(query)
    .then(res => {
      let newEntry = res.data;
      this.setState({holder:newEntry})
    })
    .catch(err => console.log(err));
  }

  showState = (event) => {
    console.log(this.state);
  }



  render() {
    return (
      <div className="row">
        <div className="col m12">
          <h1>Invoice Form</h1>
        </div>
        {/* Header Address */}
        {/* Inject: Hard Coded: US */}
        <header className="address col m6">
          <h5>Name</h5>
          <Input type={"text"} name={"name"} onChange={this.handleInputChange}/>
          <h5>Number</h5>
          <Input type={"text"} name={"number"} onChange={this.handleInputChange}/>
          <h5>Street</h5>
          <Input type={"text"} name={"street"} onChange={this.handleInputChange}/>
          <h5>City</h5>
          <Input type={"text"} name={"city"} onChange={this.handleInputChange}/>
          <h5>State</h5>
          <Input type={"text"} name={"USstate"} onChange={this.handleInputChange}/>
          <h5>Zip Code</h5>
          <Input type={"text"} name={"zip"} onChange={this.handleInputChange}/>
          <h5>United States</h5> {/* Inject: Hard Coded: US */}
          <input readOnly={"United States"}type={"text"} value={"United States"} />
        </header>

        {/* Billing Section */}
        <section className="col m6">
          {/* Billed to section */}
          {/* Inject: Need date, due date, invoice number  */}
          <h5>First name</h5>
          <Input type={"text"} name={"clientFirstName"} onChange={this.handleInputChange}/>
          <h5>Last Name</h5>
          <Input type={"text"} name={"clientLastName"} onChange={this.handleInputChange}/>
          <h5>Company name</h5>
          <Input type={"text"} name={"clientCompanyName"} onChange={this.handleInputChange}/>
          <h5>Street address</h5>
          <Input type={"text"} name={"clientStreetAddress"} onChange={this.handleInputChange}/>
          <h5>City</h5>
          <Input type={"text"} name={"clientCity"} onChange={this.handleInputChange}/>
          <h5>State</h5>
          <Input type={"text"} name={"clientState"} onChange={this.handleInputChange}/>
          <h5>Zip code</h5>
          <Input type={"text"} name={"clientZip"} onChange={this.handleInputChange}/>
          <h5>United States</h5>
          <input readOnly={"United States"}type={"text"} value={"United States"} />

          <h5>Date of Issue:</h5>
          <h5>Insert here today's date: 1/14/2018</h5> {/* Inject: Need date, due date, invoice number  */}

          <h5>Due Date:</h5>
          <h5>Insert here the due date: 1/28/2018</h5> {/* Inject: Need date, due date, invoice number  */}

          <h5></h5>
          <h5>Insert here the invoice number:001</h5> {/* Inject: Need date, due date, invoice number  */}

          <h5>Amount Due</h5>
          <h2><Input type={"text"} name={"amountDue"} onChange={this.handleInputChange}/></h2>
        </section>
        <hr />
        {/* <line item section */}
        <section className="col m8">
          <h5>Description</h5>
          <Input type={"text"} name={"lineDescription"} onChange={this.handleInputChange}/>
          <h5>Rate</h5>
          <Input type={"text"} name={"lineRate"} onChange={this.handleInputChange}/>
          <h5>Qty</h5>
          <Input type={"text"} name={"lineQty"} onChange={this.handleInputChange}/>
          <h5>Total</h5>
          <Input type={"text"} name={"lineTotal"} onChange={this.handleInputChange}/>
        </section>
        <button onClick={this.handleOnClick}>Add Invoice</button>
        <button onClick={this.showState}>Show State</button>
      </div>
    )
  }

}

export default InvoiceGenerator;
