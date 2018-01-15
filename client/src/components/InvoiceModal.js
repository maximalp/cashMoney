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
      <div>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={false}
        >
          <p>Modal text!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <InvoiceGenerator/>
        </ReactModal>
      </div>
    );
  }
}

export default InvoiceModal;

const props = {};
//
// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))
