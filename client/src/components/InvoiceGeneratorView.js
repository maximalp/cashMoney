import React from 'react';
import Input from './Input';
import API from './utils/API';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


// const defaultOption = dropDownOptions[0];


const InvoiceGeneratorView = props => {
    return (
      <div>
          {/* Header Address */}
          {/* Inject: Hard Coded: US */}
        <div className="row card" style={{background:'green'}}>
          <div className="col m6">
            <h5>Date of Issue:</h5>
            <h5>{props.clientsInfo.dateOfIssue}</h5> {/* Inject: Need date, due date, invoice number  */}
          </div>
          <div className="col m6">
            <h5>Due Date:</h5>
            <h5>{props.clientsInfo.dueDate}</h5> {/* Inject: Need date, due date, invoice number  */}
          </div>
        </div>

        <div style={{background:'#e1f5fe'}} className="row card">
          {/* Billing Section */}
          <section className="col m8">
            <div className="row">
              <div className="col m6">
                <h5>First Name</h5>
                <input readOnly="readOnly" value={props.clientsInfo.clientFirstName} type={"text"} />
              </div>
            </div>
              <div className="col m6">
                <h5>Last Name</h5>
                <input readOnly="readOnly" value={props.clientsInfo.clientLastName} type={"text"} />
              </div>


              <div className="col m6">
                <h5>Company Name</h5>
                <input readOnly="readOnly" value={props.clientsInfo.clientCompanyName} type={"text"} />
              </div>


              <div className="col m6">
                <h5>Address</h5>
                <input readOnly="readOnly" value={props.clientsInfo.clientStreetAddress} type={"text"}/>
              </div>


              <div className="col m6">
                <h5>State</h5>
                <input readOnly="readOnly" value={props.clientsInfo.clientState} type={"text"}/>
              </div>


              <div className="col m6">
                <h5>City</h5>
                <input readOnly="readOnly" value={props.clientsInfo.clientCity} type={"text"}/>
              </div>


              <div className="col m6">
                <h5>Zip</h5>
                <input readOnly="readOnly" value={props.clientsInfo.clientZip} type={"text"} />
              </div>

          </section>


            {/* Billed to section */}
            {/* Inject: Need date, due date, invoice number  */}



        </div>
          {/* <line item section */}

        <div style={{background:'#ffebee'}} className="row card">
          <section className="col m8">
            <h5>Line Description</h5>
            <input readOnly="readOnly" value={props.clientsInfo.lineDescription} type={"text"} />
            <h5>Line Rate</h5>
            <input readOnly="readOnly" value={props.clientsInfo.lineRate} type={"text"} />
            <h5>Line Quantity</h5>
            <input readOnly="readOnly" value={props.clientsInfo.lineQty} type={"text"}/>
            <h5>Total</h5>
            <input readOnly="readOnly" value={props.clientsInfo.lineRate*props.clientsInfo.lineQty}  />
          </section>
          <div className="col m6">
            <button onClick={this.handleOnClick}>Add Invoice</button>
            <button onClick={this.showState}>Show State</button>
          </div>
        </div>
      </div>
    )

}

export default InvoiceGeneratorView;
