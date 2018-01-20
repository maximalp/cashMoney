import React from 'react';


const ClientList = (props) => {

    const clients = props.clients.map((client) => {
      return (

        <li className="col m12">
          <div className="card">
          <h5>Client Company: {client.companyName}</h5>
          <h5>Email: {client.email}</h5>
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
