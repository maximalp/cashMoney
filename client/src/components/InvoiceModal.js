import React from 'react';
import ReactModal from 'react-modal';
import InvoiceGenerator from './InvoiceGenerator';

class InvoiceModal extends React.Component {
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
        <button className="col m4" onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={false} >
           <div className="col m12">
             <button onClick={this.handleCloseModal}>Close Modal</button>
             <h1>Create Invoice:</h1>
             <div className="row">
               <div className="col m8 offset-m2">
                 <InvoiceGenerator/>
               </div>

             </div>

           </div>
        </ReactModal>
      </div>
    );
  }
}

export default InvoiceModal;

const props = {};
//
// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))
