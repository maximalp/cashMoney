import React from 'react';
import Input from './Input';
import API from './utils/API';

class InvoiceGenerator extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name:"",
      phoneNumber: "",
      street: "",
      city: "",
      USstate: "",
      zip:"",
      country:"",
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

  static defaultProps = {
    name:"Company Name",
    number: "Number",
    street: "Street",
    city: "City",
    USstate: "State",
    zip:"zip-code",
    country:"United States",
    clientFirstName:"Client First Name",
    clientLastName:"Client Last Name",
    clientCompanyName:"Client Company Name",
    clientStreetAddress:"Client Street Address",
    clientCity:"Client City",
    clientState:"Client State",
    clientZip:"Client Zip",
    amountDue:"Amount Due",
    lineDescription:"Line Description",
    lineRate:"Rate",
    lineQty:"Quantity",
    lineTotal:"Total",
    holder:{}
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
      <div>
          {/* Header Address */}
          {/* Inject: Hard Coded: US */}
        <div style={{background:'#dcedc8'}} className="row card">
          <div className="col m12">
            <div className="row">
              <div className="col m3">
                <Input value={this.state.name} placeholder={this.props.name} type={"text"} name={"name"} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m3">
                <Input value={this.state.street} placeholder={this.props.street} type={"text"} name={"street"} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m3">
                <Input value={this.state.city} placeholder={this.props.city} type={"text"} name={"city"} onChange={this.handleInputChange}/>
              </div>
              <div className="col m3">
                <Input value={this.state.USstate} placeholder={this.props.USstate} type={"text"} name={"USstate"} onChange={this.handleInputChange}/>
              </div>
              <div className="col m3">
                <Input value={this.state.zip} placeholder={this.props.zip} type={"text"} name={"zip"} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m3">
                <label>United States</label> {/* Inject: Hard Coded: US */}
                <input readOnly={"United States"} type={"text"} value={"United States"} />
              </div>
              <div className="col m3">
                <Input value={this.state.phoneNumber} placeholder={this.props.phoneNumber} type={"text"} name={"phoneNumber"} onChange={this.handleInputChange}/>
              </div>
            </div>
          </div>
        </div>

        <div style={{background:'#e1f5fe'}} className="row card">
          {/* Billing Section */}
          <section className="col m8">
            <div className="row">
              <div className="col m12">
                <Input value={this.state.clientFirstName} placeholder={this.props.clientFirstName} type={"text"} name={"clientFirstName"} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.state.clientLastName} placeholder={this.props.clientLastName} type={"text"} name={"clientLastName"} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.state.clientCompanyName} placeholder={this.props.clientCompanyName} type={"text"} name={"clientCompanyName"} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.state.clientStreetAddress} placeholder={this.props.clientStreetAddress} type={"text"} name={"clientStreetAddress"} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.state.clientState} placeholder={this.props.clientState} type={"text"} name={"clientState"} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.state.clientZip} placeholder={this.props.clientZip} type={"text"} name={"clientZip"} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <input readOnly={"United States"}type={"text"} value={"United States"} />
              </div>
            </div>
          </section>
          <section className="col m4">
            <div className="row">
              <div className="col m12">
                <h5>Date of Issue:</h5>
                <h5>Insert here today's date: 1/14/2018</h5> {/* Inject: Need date, due date, invoice number  */}
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <h5>Due Date:</h5>
                <h5>Insert here the due date: 1/28/2018</h5> {/* Inject: Need date, due date, invoice number  */}
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <h5></h5>
                <h5>Insert here the invoice number:001</h5> {/* Inject: Need date, due date, invoice number  */}
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <h5>Amount Due</h5>
                <h2><Input value={this.state.amountDue} placeholder={this.props.amountDue} type={"text"} name={"amountDue"} onChange={this.handleInputChange}/></h2>
              </div>
            </div>
          </section>

            {/* Billed to section */}
            {/* Inject: Need date, due date, invoice number  */}



        </div>
          {/* <line item section */}

        <div style={{background:'#ffebee'}} className="row card">
          <section className="col m8">
            <Input placeholder={this.props.lineDescription} value={this.state.lineDescription} type={"text"} name={"lineDescription"} onChange={this.handleInputChange}/>
            <Input placeholder={this.props.lineRate} value={this.state.lineRate} type={"text"} name={"lineRate"} onChange={this.handleInputChange}/>
            <Input placeholder={this.props.lineQty} value={this.state.lineQty}type={"text"} name={"lineQty"} onChange={this.handleInputChange}/>
            <Input placeholder={this.props.lineTotal} value={this.state.lineTotal} type={"text"} name={"lineTotal"} onChange={this.handleInputChange}/>
          </section>
          <div className="col m12">
            <button onClick={this.handleOnClick}>Add Invoice</button>
            <button onClick={this.showState}>Show State</button>
          </div>
        </div>
      </div>
    )
  }

}

export default InvoiceGenerator;
