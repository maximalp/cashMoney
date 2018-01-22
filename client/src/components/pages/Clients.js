import React from "react";
import ClientList from '../ClientList';
import ClientModal from '../ClientModal';
import clientAPI from '../utils/clientAPI';

class Clients extends React.Component {
  constructor (props) {
    super(props);


  this.state = {
    clients: [],
    sentAmount: 0,
    paidAmount: 0
  }

};

sortClientList = (clients) =>
{
clients.sort((client1, client2) =>

client1.companyName.localeCompare(client2.companyName))

};



// calling client object from database when client component loads
componentDidMount() {
  let query = '/api/clients';
  clientAPI.get(query)
    .then(res => {
      let clients = res.data.invoices;
      console.log("CLIENTS", clients);
      console.log("SENT", res.data.sent)
      console.log("paid", res.data.paid)

      let sent = res.data.sent;
      let sentAmount = sent.map((sent) => {
        return sent.lineTotal
      })
      let sentTotal = sentAmount.reduce((sum, amount) => {
        return sum + amount;
      }, 0)

      let paid = res.data.paid;
      let paidAmount = paid.map((paid) => {
        return paid.lineTotal
      })
      let paidTotal = paidAmount.reduce((sum, amount) => {
        return sum + amount;
      }, 0)

      // console.log("what I get back from DB", clients)
      // let invoices = clients.map((client) => {
      //   return client.invoices
      // })
      // console.log("after clients.map", invoices)

      // let idontknow = invoices.map((array) => {
      //   let paid = array.filter((client) => {
      //     return client.status === 'Sent'
      //   })
      //   let outstanding = array.filter((client) => {
      //     return client.status === 'Outstanding'
      //   })
      // })

      // // console.log("all clients response from database", clients);

      // let paid = invoices.filter((client) => {
      //   return client.status === 'Sent'
      // })

      // let paidAmount = paid.reduce((sum, amount) => {
      //   return sum + amount;
      // }, 0)


      // let outstanding = invoices.filter((client) => {
      //   return client.status === 'Outstanding'
      // })

      // let outstandingAmount = outstanding.reduce((sum, amount) => {
      //   return sum + amount;
      // }, 0)
      this.sortClientList(clients);
      this.setState({
        clients,
        paidAmount: paidTotal,
        sentAmount: sentTotal
      })
      // console.log("state",this.state)
    })
    .catch(err => console.log(err));


}

// refreshing client list through state when adding client
handleAddClient = (client) =>
{
  let clients = this.state.clients;
  clients.push(client);
  console.log("new clients from handle click" + clients);

  this.sortClientList(clients);

  this.setState({

  clients:clients

  })
};




render () {
    return (
      <div className="row">
        <div className="col m12 card" style={{background:'#006064'}}>

          <h1>Clients</h1>
          <ClientModal
            handleAddClient={this.handleAddClient}>

          </ClientModal>
          <div className="row">
               <div className="col m6">
                  <h1>Sent Amount: ${this.state.sentAmount}</h1>
                </div>
                <div className="col m6">
                  <h1>Paid Amount: ${this.state.paidAmount}</h1>

                </div>

          </div>
        </div>

        <div className="col m12">
          <h3>Clients</h3>
          <ClientList
            clients = {this.state.clients}>

          </ClientList>
        </div>

      </div>
    )
  }

};



export default Clients;
