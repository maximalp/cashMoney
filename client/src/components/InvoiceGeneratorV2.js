import React from 'react';
import Input from './Input';
import API from './utils/API';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//
// const options = InvoiceGeneratorV2.props.options;


class InvoiceGeneratorV2 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: '[Select an Option]',
      options: ['one', 'two', 'three'],
      date:"",
      startDate: moment(),
      description:"",
      rate:0,
      qty:0,
      lines:[],
      chosenId:""
    }
  }

  componentDidMount() {
    let date = moment().format('LLLL');
    this.setState({date})
  }

  // for calendar
  handleChangeCalendar = (date) => {
    this.setState({
      startDate:date
    });
  }

  _onSelect = (option) => {
    console.log('You selected ', option.label)
    let id = this.props.id2;
    let options = this.props.options2;
    let index = options.indexOf(option.label)
    console.log('INDEX', index)
    let chosenId = id[index]
    this.setState({selected:option, chosenId:chosenId})
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
      client: this.state.selected.value,
      date: moment().toDate(),
      dueDate: this.state.startDate._d,
      lines: this.state.lines,
      clientId: this.state.chosenId
    };

    console.log(data);

    API.post(data)
    .then(res => {
      let newEntry = res.data;
      console.log(newEntry);
      // this.setState({holder:newEntry})
      alert("success!")
      this.props.onClick();
    })
    .catch(err => console.log(err));
  }

  // Shows state
  showState = (event) => {
    console.log(this.state);
  }

  handleOnClickLine = (event) => {
    let data = {
      description: this.state.description,
      rate: this.state.rate,
      qty: this.state.qty
    }

    let lines = this.state.lines;
    lines.push(data);
    this.setState(lines);

  }



  render() {
    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label
    const options = ['one', 'two', 'three']
    const lineTotal = this.state.rate*this.state.qty;

    return (
      <div>
          {/* Header Address */}

          <section className="row card">
            {/* <h4>Flat Array Example </h4> */}
            <h3>Pick Client</h3>
            <Dropdown options={this.props.options2} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
            <div className='result'>
              You selected
              <strong> {placeHolderValue} </strong>
            </div>
          </section>

          <h3>Date Info</h3>
        {/* <Dropdown options={options} onChange={this._onSelect} value={options[0]} placeholder="Select an option" /> */}
        <div style={{background:'#dcedc8'}} className="row card">
          <div className="col m12">
            <div className="row">
              <h4 className='col m12'>Date: {this.state.date}</h4>
              <h4 className="col m2">Due Date:</h4>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChangeCalendar}
                className="col m10"
              />
            </div>

          </div>

        </div>

        <h3>Line Information</h3>
        <button onClick={this.handleOnClick}>Add Invoice</button>
        <button onClick={this.showState}>Show State</button>

        <div style={{background:'#e1f5fe'}} className="row card">
            <div className="col m12">
              <div className="row">
                <div className="col m9">
                  <h5>Description</h5>
                  <Input value={this.state.description} placeholder='Description' type="text" name="description" onChange={this.handleInputChange}/>
                </div>
                <div className="col m4">
                  <h5>Rate</h5>
                  <Input value={this.state.rate} placeholder='Rate' type='number' name="rate" onChange={this.handleInputChange}/>
                </div>
                <div className="col m4">
                  <h5>Quantity</h5>
                  <Input value={this.state.qty} placeholder='Quantity' type='number' name="qty" onChange={this.handleInputChange}/>
                </div>
                <div className="col m4">
                  <h5>Total</h5>
                  <Input value={lineTotal} />
                </div>
              </div>
            </div>


          {/*Client Billing Section */}

          <div className="col m12">

          </div>
          <div className="col m12">
            <button onClick={this.handleOnClickLine} >Add Line</button>
              <ol>
                {this.state.lines.map(line => {
                  return <li>{line.description+" "+line.qty+" "+line.rate+" "}</li>
                })}

              </ol>

          </div>
        </div>
      </div>
    )
  }

}

export default InvoiceGeneratorV2;
