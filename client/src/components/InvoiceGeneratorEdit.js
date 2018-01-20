import React from 'react';
import Input from './Input';
import API from './utils/API';

class InvoiceGeneratorEdit extends React.Component {
  constructor (props) {
    super(props);

    // this.state = {
    //   name:"Hi there",
    //   phoneNumber: "",
    //   street: "",
    //   city: "",
    //   USstate: "",
    //   zip:"",
    //   country:"United States",
    //   clientFirstName:"",
    //   clientLastName:"",
    //   clientCompanyName:"",
    //   clientStreetAddress:"",
    //   clientCity:"",
    //   clientState:"",
    //   clientZip:"",
    //   clientCountry:"United States",
    //   lineDescription:"",
    //   lineRate:"",
    //   lineQty:"",
    //   lineTotal:"",
    //   holder:{}
    // }
  }
  //
  // componentDidMount(){
  //   this.setState({
  //     name:this.props.edit.name,
  //     phoneNumber: this.props.edit.phoneNumber,
  //     street: this.props.edit.street,
  //     city: this.props.edit.city,
  //     USstate: this.props.edit.USstate,
  //     zip:this.props.edit.zip,
  //     country:"United States",
  //     clientFirstName:this.props.edit.clientFirstName,
  //     clientLastName:this.props.edit.clientLastName,
  //     clientCompanyName:this.props.edit.clientCompanyName,
  //     clientStreetAddress:this.props.edit.clientStreetAddress,
  //     clientCity:this.props.edit.clientCity,
  //     clientState:this.props.edit.clientState,
  //     clientZip:this.props.edit.clientZip,
  //     clientCountry:"United States",
  //     lineDescription:this.props.edit.lineDescription,
  //     lineRate:this.props.edit.lineRate,
  //     lineQty:this.props.edit.lineQty,
  //     lineTotal:this.props.edit.lineTotal,
  //   })
  //   console.log('EDIT', this.props.edit)
  // }

  // static defaultProps = {
  //   name:"Company Name",
  //   phoneNumber: "Number",
  //   street: "Street",
  //   city: "City",
  //   USstate: "State",
  //   zip:"zip-code",
  //   country:"United States",
  //   clientFirstName:"Client First Name",
  //   clientLastName:"Client Last Name",
  //   clientCompanyName:"Client Company Name",
  //   clientStreetAddress:"Client Street Address",
  //   clientCity:"Client City",
  //   clientState:"Client State",
  //   clientZip:"Client Zip",
  //   amountDue:"Amount Due",
  //   lineDescription:"Line Description",
  //   lineRate:"Rate",
  //   lineQty:"Quantity",
  //   lineTotal:"Total",
  //   holder:{}
  // }

  // handleInputChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // }

  // Adds Invoice
  handleOnClick = (event) => {
    let data = {
      name:this.state.name,
      phoneNumber: this.state.phoneNumber,
      street: this.state.street,
      city: this.state.city,
      USstate: this.state.USstate,
      zip:this.state.zip,
      country:"United States",
      clientFirstName:this.state.clientFirstName,
      clientLastName:this.state.clientLastName,
      clientCompanyName:this.state.clientCompanyName,
      clientStreetAddress:this.state.clientStreetAddress,
      clientCity:this.state.clientCity,
      clientState:this.state.clientState,
      clientZip:this.state.clientZip,
      lineDescription:this.state.lineDescription,
      lineRate:this.state.lineRate,
      lineQty:this.state.lineQty,
      lineTotal:this.state.lineTotal,
    };

    console.log(data);

    API.post(data)
    .then(res => {
      let newEntry = res.data;
      this.setState({holder:newEntry})
      console.log(newEntry);
    })
    .catch(err => console.log(err));
  }

  // Shows state
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
                <Input value={this.props.edit.name} type={"text"} name={"name"} onChange={this.props.inputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m3">
                <Input value={this.props.edit.street} type={"text"} name={"street"} onChange={this.props.inputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m3">
                <Input value={this.props.edit.city} type={"text"} name={"city"} onChange={this.props.inputChange}/>
              </div>
              <div className="col m3">
                <Input value={this.props.edit.USstate} type={"text"} name={"USstate"} onChange={this.props.inputChange}/>
              </div>
              <div className="col m3">
                <Input value={this.props.edit.zip} ptype={"text"} name={"zip"} onChange={this.props.inputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m3">
                <label>United States</label> {/* Inject: Hard Coded: US */}
                <input readOnly={"United States"} type={"text"} value={"United States"} />
              </div>
              <div className="col m3">
                <Input value={this.props.edit.phoneNumber} type={"text"} name={"phoneNumber"} onChange={this.props.inputChange}/>
              </div>
            </div>
          </div>
        </div>

        <div style={{background:'#e1f5fe'}} className="row card">
          {/* Billing Section */}
          <section className="col m8">
            <div className="row">
              <div className="col m12">
                <Input value={this.props.edit.clientFirstName} type={"text"} name={"clientFirstName"} onChange={this.props.inputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.props.edit.clientLastName} type={"text"} name={"clientLastName"} onChange={this.props.inputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.props.edit.clientCompanyName} type={"text"} name={"clientCompanyName"} onChange={this.props.inputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.props.edit.clientStreetAddress}  type={"text"} name={"clientStreetAddress"} onChange={this.props.inputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.props.edit.clientState} type={"text"} name={"clientState"} onChange={this.props.inputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.props.edit.clientCity} type={"text"} name={"clientCity"} onChange={this.props.inputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.props.edit.clientZip} type={"text"} name={"clientZip"} onChange={this.props.inputChange}/>
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
                <h2><Input value={this.props.lineTotal} type={"text"} name={"amountDue"}/></h2>
              </div>
            </div>
          </section>

            {/* Billed to section */}
            {/* Inject: Need date, due date, invoice number  */}



        </div>
          {/* <line item section */}

        <div style={{background:'#ffebee'}} className="row card">
          <section className="col m8">
            <Input value={this.props.lineDescription} type={"text"} name={"lineDescription"} onChange={this.props.inputChange}/>
            <Input value={this.props.lineRate} type={"text"} name={"lineRate"} onChange={this.props.inputChange}/>
            <Input value={this.props.lineQty}type={"text"} name={"lineQty"} onChange={this.props.inputChange}/>
            <Input value={this.props.lineTotal} type={"text"} name={"lineTotal"} onChange={this.props.inputChange}/>
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

export default InvoiceGeneratorEdit;
