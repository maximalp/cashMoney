import React from 'react';
import Input from './Input';
import API from './utils/API';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


// const defaultOption = dropDownOptions[0];


class InvoiceGenerator extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      clientFirstName:"",
      clientLastName:"",
      clientCompanyName:"",
      clientStreetAddress:"",
      clientCity:"",
      clientState:"",
      clientZip:"",
      clientCountry:"United States",
      lineDescription:"",
      lineRate:"",
      lineQty:"",
      lineTotal:"",
      holder:{},
      dropDownOptions: ['Select an option'],
      selected: "",
      startDate: moment(),
      id: ""
    }
  }

  // componentDidMount() {
  //   let clientArray = this.props.clientsInfo
  //   console.log('clientArray', clientArray)
  //
  //   // console.log(companyNameArray)
  //   //
  //   // this.setState({dropDownOptions:companyNameArray})
  // }

  static defaultProps = {
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

  handleCalendarChange = (date) => {
    this.setState({
      startDate:date
    });
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  // Adds Invoice
  handleOnClick = (event) => {
    let data = {
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
      dateOfIssue: moment().toDate(),
      dueDate: this.state.startDate,
    };

    console.log(data);
    let param = this.state.id;

    API.post(param, data)
    .then(res => {
      let newEntry = res.data;
      this.setState({holder:newEntry})
      console.log(newEntry);
      this.props.close();
    })
    .catch(err => alert(err));



  }

  // Shows state
  showState = (event) => {
    console.log(this.state);
  }

  _onSelect = (option) => {
  console.log('You selected ', option.label)
  this.setState({selected: option})
  console.log(this.props.dropDownOptions.indexOf(option.label))
  let index = this.props.dropDownOptions.indexOf(option.label);
  let fillInfo = this.props.clientsInfo[index];
  let id = this.props.clientsId[index];
  this.fillInfo(fillInfo, id);
}

  fillInfo = (info, id) => {
    console.log(info, id)
    this.setState({
      clientFirstName:info.firstName,
      clientLastName:info.lastName,
      clientCompanyName:info.companyName,
      clientStreetAddress:info.street,
      clientCity:info.city,
      clientState:info.USstate,
      clientZip:info.zip,
      id:id,
    })
  }




  render() {
    // const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

    return (
      <div>
          {/* Header Address */}
          {/* Inject: Hard Coded: US */}
        <div className="row card" style={{background:'green'}}>
          <div className="col m12">
            <h5>Date of Issue:</h5>
            <h5>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h5> {/* Inject: Need date, due date, invoice number  */}
          </div>
          <div className="col m12">
            <h5>Due Date:</h5>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleCalendarChange}
            />; {/* Inject: Need date, due date, invoice number  */}
          </div>
        </div>


        <Dropdown options={this.props.dropDownOptions} onChange={this._onSelect} value={this.state.dropDownOptions[0]} placeholder="Select an option" />
        <div style={{background:'#e1f5fe'}} className="row card">
          {/* Billing Section */}
          <section className="col m8">
            <div className="row">
              <div className="col m12">
                <Input value={this.state.clientFirstName} placeholder={this.props.clientFirstName} type={"text"} name={"clientFirstName"} />
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.state.clientLastName} placeholder={this.props.clientLastName} type={"text"} name={"clientLastName"} />
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.state.clientCompanyName} placeholder={this.props.clientCompanyName} type={"text"} name={"clientCompanyName"} />
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.state.clientStreetAddress} placeholder={this.props.clientStreetAddress} type={"text"} name={"clientStreetAddress"} />
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.state.clientState} placeholder={this.props.clientState} type={"text"} name={"clientState"} />
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.state.clientCity} placeholder={this.props.clientCity} type={"text"} name={"clientCity"} />
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <Input value={this.state.clientZip} placeholder={this.props.clientZip} type={"text"} name={"clientZip"} />
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
                <h5>Amount Due</h5>
                <h2><Input value={this.state.lineTotal} type={"text"} name={"amountDue"}/></h2>
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
