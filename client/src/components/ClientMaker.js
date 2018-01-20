import React from 'react';
import Input from './Input';
import clientAPI from './utils/clientAPI';

class ClientMaker extends React.Component {
  constructor (props) {
    super(props);

    // state for client input fields (entered)
    this.state = {
      firstName:"",
      lastName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      street: "",
      city: "",
      USstate: "",
      zip:"",
      country:"United States",
      holder:{}
    }
  }

  // static props for placeholder values in add client form
  static defaultProps = {
    clientFirstName:"First Name",
    clientLastName:"Last Name",
    clientCompanyName:"Company Name",
    clientEmail:"Email",
    clientPhoneNumber: "Phone Number",
    clientStreet: "Street",
    clientCity: "City",
    USstate: "State",
    clientZip:"Zip Code",
    country:"United States",
    holder:{}
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  // Adding a client from form
  handleOnClick = (event) => {
    let data = {
      firstName:this.state.firstName,
      lastName: this.state.lastName,
      companyName: this.state.companyName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      street: this.state.street,
      city: this.state.city,
      USstate: this.state.USstate,
      zip:this.state.zip,
      country:"United States"
    };

    console.log(data);

    clientAPI.post(data)
    .then(res => {
      let newEntry = res.data;
      this.setState({holder:newEntry})

      console.log(newEntry);
      this.props.handleAddClient(newEntry);
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

            {/* NAME ROW OF CLIENT INFO*/}
            <div className="row">
              <div className="col m3">
                <Input value={this.state.firstName} placeholder={this.props.clientFirstName} type={"text"} name={"firstName"} onChange={this.handleInputChange}/>
              </div>
              <div className="col m3">
                <Input value={this.state.lastName} placeholder={this.props.clientLastName} type={"text"} name={"lastName"} onChange={this.handleInputChange}/>
              </div>
            </div>

            {/* COMPANY NAME ROW OF CLIENT INFO*/}
            <div className="row">
              <div className="col m3">
                <Input value={this.state.companyName} placeholder={this.props.clientCompanyName} type={"text"} name={"companyName"} onChange={this.handleInputChange}/>
              </div>
            </div>

            {/* CONTACT ROW OF CLIENT INFO*/}
            <div className="row">
              <div className="col m3">
                <Input value={this.state.email} placeholder={this.props.clientEmail} type={"text"} name={"email"} onChange={this.handleInputChange}/>
              </div>
              <div className="col m3">
                <Input value={this.state.phoneNumber} placeholder={this.props.clientPhoneNumber} type={"text"} name={"phoneNumber"} onChange={this.handleInputChange}/>
              </div>
            </div>

            {/* ADDRESS ROW OF CLIENT INFO*/}
            <div className="row">
              <div className="col m3">
                <Input value={this.state.street} placeholder={this.props.clientStreet} type={"text"} name={"street"} onChange={this.handleInputChange}/>
              </div>
              <div className="col m3">
                <Input value={this.state.city} placeholder={this.props.clientCity} type={"text"} name={"city"} onChange={this.handleInputChange}/>
              </div>
              <div className="col m3">
                <Input value={this.state.USstate} placeholder={this.props.USstate} type={"text"} name={"USstate"} onChange={this.handleInputChange}/>
              </div>
              <div className="col m3">
                <Input value={this.state.zip} placeholder={this.props.clientZip} type={"text"} name={"zip"} onChange={this.handleInputChange}/>
              </div>
            </div>




            <div className="row">
              <div className="col m3">
                <label>Country</label> {/* Inject: Hard Coded: US */}
                <input readOnly={"United States"} type={"text"} value={"United States"} />
              </div>

            </div>
          </div>
        </div> {/* END MAIN CLIENT INFO DIV */}



        {/* ADD CLIENT / SHOW STATE BUTTON SECTION */}
        <div className="row">

            <div className="col m6">
              <a className="waves-light btn" onClick={this.handleOnClick}>Add Client</a>
            </div>

            <div className="col m6">
              <button className="waves-light btn" onClick={this.showState}>Show State</button>
            </div>

        </div>


      </div> // END MAIN DIV - RETURN() SECTION
    )
  }

}

export default ClientMaker;
