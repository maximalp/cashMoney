import React from "react";
import ClientList from '../ClientList';
import ClientModal from '../ClientModal';
import clientAPI from '../utils/clientAPI';

class Clients extends React.Component {
  constructor (props) {
    super(props);


  this.state = {
    clients: []
  }

};

// calling client object from database when client component loads
componentDidMount() {
  let query = '/api/clients';
  clientAPI.get(query)
    .then(res => {
      let clients = res.data;

      console.log("all clients response from database", clients);
      this.setState({
        clients:clients
      })
      console.log("state",this.state)
    })
    .catch(err => console.log(err));
}

// refreshing client list through state when adding client
handleAddClient = (client) =>
{
  let clients = this.state.clients;
  clients.push(client);
  console.log("new clients from handle click" + clients);
  this.setState({

  clients:clients

  })
};




render () {
    return (
      <div className="row">
        <h1>Clients</h1>
          <div className="col m12">
            <ClientModal
              handleAddClient={this.handleAddClient}>

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
