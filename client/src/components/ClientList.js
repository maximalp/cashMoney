import React from 'react';


const ClientList = (props) => {

    const clients = props.clients.map((client) => {
      return (

        <li className="col m12">
          <div className="card">
          <h2>{client.companyName}</h2>
          </div>
        </li>
      )
    })

    return (
      <ul className="row">
        {clients}
      </ul>
    )
  };






export default ClientList;
