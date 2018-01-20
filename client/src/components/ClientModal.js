import React from 'react';
import ReactModal from 'react-modal';
import ClientMaker from './ClientMaker';

class ClientModal extends React.Component {
  constructor () {
    super();
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

  render () {
    return (
      <div className="row">
        <div className="colm4">
          <button className="waves-light btn-large" onClick={this.handleOpenModal}>Add Client</button>
        </div>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={false}>
           <div className="col m12">
             <button onClick={this.handleCloseModal}>Close</button>
             <h4>New Client Entry:</h4>
             <div className="row">
               <div className="col m8 offset-m2">
                 <ClientMaker closeModal={this.handleCloseModal}
                 handleAddClient={this.props.handleAddClient}/>
               </div>
             </div>
           </div>
        </ReactModal>
      </div>
    );
  }
}

export default ClientModal;

const props = {};
