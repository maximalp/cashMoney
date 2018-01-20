import React from "react";
import ClientList from '../ClientList';
import ClientModal from '../ClientModal';


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
      <div className="row">
        <h1>Clients</h1>
          <div className="col m12">
            <ClientModal>
            </ClientModal>
          </div>

          <div className="row">
          <h3>Clients Invoice Overview </h3>
          </div>

                <p>
                  Draft Invoices: $50
                  Outstanding Invoices: $300
                  Overdue Invoices: $500

                </p>

        <div className="row">
        <h3>Clients</h3>
        <ClientList clients = {this.state.clients}>

        </ClientList>
        </div>

      </div>
    )
  }

};



export default Clients;
