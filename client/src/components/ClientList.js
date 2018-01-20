import React from 'react';


const ClientList = (props) => {

    // const Total = props.clients.map((client) => {
    //   return client.invoices.map((invoice) => {
    //     return invoice.lineTotal
    //   })
    // })

    // const totalSum = Total.reduce((sum, invoiceAmount) => {
    //   return sum + invoiceAmount;
    //   // console.log("Total", Total)
    //   // console.log("Sum", sum)
    //   // console.log("invoiceAmount", invoiceAmount)
    // }, 0);


    const clients = props.clients.map((client) => {
      const total = client.invoices.reduce((sum, invoice) => {
        return sum + invoice.lineTotal;
      }, 0)


      return (

        <li className="col m12">
          <div className="card">
          <h5>Client Company: {client.companyName}</h5>
          <h5>Email: {client.email}</h5>
          <h5>Total: {total} </h5>

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
