import React from 'react';
import ClientProfile from './ClientProfile';

const ClientList = (props) => {

    // const Total = props.clients.map((client) => {
    //   return client.invoices.map((invoice) => {
    //     return invoice.lineTotal
    //   })
    // })

    // const totalSum = Total.reduce((sum, invoiceAmount) => {
    //   return sum + invoiceAmount;
  // console.log("Total", Total)
    //   // console.log("Sum", sum)
    //   // console.log("invoiceAmount", invoiceAmount)
    // }, 0);




    const clients = props.clients.map((client) => {
      const total = client.invoices.reduce((sum, invoice) => {
        return sum + invoice.lineTotal;

      }, 0)

//className="col m12"
      return (

        <li className="col m12" style={{margin:'10px'}}>
          <div className="card">
            <div className="row" style={{margin:'10px'}}>
              <h6 className="center-align" style={{margintop:'10px'}}>Client Company: {client.companyName}</h6>
              <h6 className="center-align"> Outstanding Invoice Total: ${total} </h6>
          </div>
          <ClientProfile
            client = {client}/>
          </div>
        </li>
      )
    })

    return (
      <ul className="row">
        <div className="col m12">
        {clients}
      </div>
      </ul>
    )
  };






export default ClientList;
