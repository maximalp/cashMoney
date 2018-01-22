import React from 'react';
import ReactModal from 'react-modal';
import ClientList from './ClientList';

class ClientProfile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }


// OPTIONAL PENDING FOR MORE ONCLICK FUNCTION
  handleOnClickClinentView = (client) =>
  {


  };

  // pale blue background color option: #e1f5fe

  render () {
    return (
      <div>
          <button className="waves-light btn" onClick={this.handleOpenModal}>View Client</button>



            <ReactModal
               isOpen={this.state.showModal}
               contentLabel="onRequestClose Example"
               onRequestClose={this.handleCloseModal}
               shouldCloseOnOverlayClick={false}>
               <div style={{background:'whitesmoke'}} className="row card">
                 <div className="col m12">
                   <button onClick={this.handleCloseModal}>Close</button>
                    <h1>{this.props.client.companyName} - Client Profile</h1>
                        <div className="col m12">
                          <h3>
                            Company Name: {this.props.client.companyName}
                          </h3>
                          <h4>Contact Info:</h4>

                          <h5>First Name: {this.props.client.firstName} </h5>
                          <h5>Last Name: {this.props.client.lastName} </h5>
                          <h5>Email: {this.props.client.email} </h5>
                          <h5>Phone Number: {this.props.client.phoneNumber} </h5>
                          <h5>
                          <span>Address:</span><br></br>
                          {this.props.client.street}<br></br>
                          {this.props.client.city}, {this.props.client.USstate}   {this.props.client.zip}<br></br>
                          </h5>



                      </div>
               </div>
             </div>

             <div style={{background:'#e1f5fe'}} className="row card">
               <div className="col m12">
               <h3>Invoices</h3>
             </div>




             </div>
            </ReactModal>

    </div> // END DIV CONTAINER FOR EVERYTHING

    ); // END RETURN
  }; // END RENDER






}; // END MAIN CLIENT PROFILE div

export default ClientProfile;
