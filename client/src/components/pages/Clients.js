import React from "react";
import ClientList from '../ClientList';

class Clients extends React.Component {
  constructor (props) {
    super(props);


  this.state = {
    clients: [
      {
      name: "",
      phoneNumber: "",
      companyName: "Nursing Vendor"
    },
      {
      name: "",
      phoneNumber: "",
      companyName: "Food Delivery"
      },
      {
      name: "",
      phoneNumber: "",
      companyName: "Art Sales"
      }
    ]
  }

};





render () {
    return (
      <div>
        <h1>Clients</h1>
          <div>
          <a class="waves-effect waves-light btn-large">Add Client</a>
          </div>
          <div>
          <h2>Clients Invoice Overview </h2>
          </div>

        <p>
          Draft Invoices: $50
          Outstanding Invoices: $300
          Overdue Invoices: $500

        </p>

        <div>
        <ClientList clients = {this.state.clients}>

        </ClientList>
        </div>
      </div>
    )
  }

};



export default Clients;
