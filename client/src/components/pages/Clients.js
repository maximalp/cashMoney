import React from "react";
import ClientList from '../ClientList';
import ClientModal from '../ClientModal';
import clientAPI from '../utils/clientAPI';

class Clients extends React.Component {
  constructor (props) {
    super(props);


  this.state = {
    clients: [],
    draftAmount: 0,
    sentAmount: 0
  }

};

// calling client object from database when client component loads
componentDidMount() {
  let query = '/api/clients';
  clientAPI.get(query)
    .then(res => {
      let clients = res.data.invoices;
      console.log("DRAFT", res.data.draft)
      console.log("SENT", res.data.sent)

      let draft = res.data.draft;
      let draftAmount = draft.map((draft) => {
        return draft.lineTotal
      })
      let draftTotal = draftAmount.reduce((sum, amount) => {
        return sum + amount;
      }, 0)

      let sent = res.data.sent;
      let sentAmount = sent.map((sent) => {
        return sent.lineTotal
      })
      let sentTotal = sentAmount.reduce((sum, amount) => {
        return sum + amount;
      }, 0)

      // console.log("what I get back from DB", clients)
      // let invoices = clients.map((client) => {
      //   return client.invoices
      // })
      // console.log("after clients.map", invoices)

      // let idontknow = invoices.map((array) => {
      //   let sent = array.filter((client) => {
      //     return client.status === 'Sent'
      //   })
      //   let outstanding = array.filter((client) => {
      //     return client.status === 'Outstanding'
      //   })
      // })

      // // console.log("all clients response from database", clients);

      // let sent = invoices.filter((client) => {
      //   return client.status === 'Sent'
      // })

      // let sentAmount = sent.reduce((sum, amount) => {
      //   return sum + amount;
      // }, 0)


      // let outstanding = invoices.filter((client) => {
      //   return client.status === 'Outstanding'
      // })

      // let outstandingAmount = outstanding.reduce((sum, amount) => {
      //   return sum + amount;
      // }, 0)

      this.setState({
        clients,
        sentAmount:sentTotal,
        draftAmount: draftTotal
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

          <div className="col m12">
            <div className="row">
                 <div className="col m6">
                    <h1>Draft Amount: ${this.state.draftAmount}</h1>
                  </div>
                  <div className="col m6">
                    <h1>Sent Amount: ${this.state.sentAmount}</h1>
                    
                  </div>
              
            </div>
     



          </div>

        <div className="col m12">
          <h3>Clients</h3>
          <ClientList clients = {this.state.clients}>

          </ClientList>
        </div>

      </div>
    )
  }

};



export default Clients;
