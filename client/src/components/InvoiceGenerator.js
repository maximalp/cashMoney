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
      lineTotal:this.state.lineRate*this.state.lineQty,
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
      <div className="row z-depth-5">
        <div className="col m6">
          <h5><u>Date of Issue:</u></h5>
          <h6>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h6> {/* Inject: Need date, due date, invoice number  */}
        </div>
        <div className="col m6">
          <h5><u>Due Date:</u></h5>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleCalendarChange}
          /> {/* Inject: Need date, due date, invoice number  */}
        </div>
        <div className="col m6">
          <h5><u>Client Info:</u></h5>
          <Input value={this.state.clientFirstName} placeholder={this.props.clientFirstName} type={"text"} name={"clientFirstName"} />
          <Input value={this.state.clientLastName} placeholder={this.props.clientLastName} type={"text"} name={"clientLastName"} />
          <Input value={this.state.clientCompanyName} placeholder={this.props.clientCompanyName} type={"text"} name={"clientCompanyName"} />
          <Input value={this.state.clientStreetAddress} placeholder={this.props.clientStreetAddress} type={"text"} name={"clientStreetAddress"} />
          <Input value={this.state.clientState} placeholder={this.props.clientState} type={"text"} name={"clientState"} />
          <Input value={this.state.clientCity} placeholder={this.props.clientCity} type={"text"} name={"clientCity"} />
          <Input value={this.state.clientZip} placeholder={this.props.clientZip} type={"text"} name={"clientZip"} />
          <input readOnly={"United States"} type={"text"} value={"United States"} />
        </div>
        <div className="col m6">
          <h5><u>Pick Client:</u></h5>
          <Dropdown options={this.props.dropDownOptions} onChange={this._onSelect} value={this.state.dropDownOptions[0]} placeholder="Select an option" />
        </div>
        <section className="col m8">
          <Input placeholder={this.props.lineDescription} value={this.state.lineDescription} type={"text"} name={"lineDescription"} onChange={this.handleInputChange}/>

        </section>
        <section className="col m5">
          <Input placeholder={this.props.lineRate} value={this.state.lineRate} type={"text"} name={"lineRate"} onChange={this.handleInputChange}/>

        </section>
        <section className="col m5">
          <Input placeholder={this.props.lineQty} value={this.state.lineQty} type={"text"} name={"lineQty"} onChange={this.handleInputChange}/>
        </section>
        <section className="col m5">
          <h5><u>Total:</u></h5>
          <Input placeholder={this.props.lineTotal} value={this.state.lineRate*this.state.lineQty} type={"text"} name={"lineTotal"} onChange={this.handleInputChange}/>
        </section>

        <div className="col m12">
          <button className="btn" onClick={this.handleOnClick}>Add Invoice</button>
          <br></br>
        </div>
      </div>
    )
  }

}

export default InvoiceGenerator;
