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
      <div className="row z-depth-5">
          <div className="col m6">
            <h5><u>Date of Issue: </u></h5>
            <h6>{props.clientsInfo.dateOfIssue}</h6> {/* Inject: Need date, due date, invoice number  */}
          </div>
          <div className="col m6">
            <h5><u>Due Date: </u></h5>
            <h6>{props.clientsInfo.dueDate}</h6> {/* Inject: Need date, due date, invoice number  */}
          </div>
          <div className="col m12">
            <h5><u>Client Info:</u></h5>
          </div>

          <div className="col m6">

            <h6><u>First Name: </u></h6>
            <input readOnly="readOnly" value={props.clientsInfo.clientFirstName} type={"text"} />
            <h6><u>Last Name: </u></h6>
            <input readOnly="readOnly" value={props.clientsInfo.clientLastName} type={"text"} />
            <h6><u>Company Name: </u></h6>
            <input readOnly="readOnly" value={props.clientsInfo.clientCompanyName} type={"text"} />
          </div>
          <div className="col m6">
            <h6><u>Address: </u></h6>
            <input readOnly="readOnly" value={props.clientsInfo.clientStreetAddress} type={"text"}/>
            <h6><u>State: </u></h6>
            <input readOnly="readOnly" value={props.clientsInfo.clientState} type={"text"}/>
            <h6><u>City: </u></h6>
            <input readOnly="readOnly" value={props.clientsInfo.clientCity} type={"text"}/>
            <h6><u>Zip: </u></h6>
            <input readOnly="readOnly" value={props.clientsInfo.clientZip} type={"text"} />
          </div>
          <div className="col m12">
            <h5><u>Line Info:</u></h5>
          </div>

          <section className="col m6">
            <h6><u>Line Description: </u></h6>
            <input readOnly="readOnly" value={props.clientsInfo.lineDescription} type={"text"} />
            <h6><u>Line Rate: </u></h6>
            <input readOnly="readOnly" value={props.clientsInfo.lineRate} type={"text"} />
            <h6><u>Line Quantity: </u></h6>
            <input readOnly="readOnly" value={props.clientsInfo.lineQty} type={"text"}/>
          </section>
          <section className="col m6">
            <h6><u>Total: </u></h6>
            <input readOnly="readOnly" value={props.clientsInfo.lineRate*props.clientsInfo.lineQty}  />
            <h6><u>Status: </u></h6>
            <input readOnly="readOnly" value={props.status}  />
          </section>
      </div>
    )

}

export default InvoiceGeneratorView;
