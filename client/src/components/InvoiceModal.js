import React from 'react';
import ReactModal from 'react-modal';
import InvoiceGenerator from './InvoiceGenerator';
import API from './utils/API';

class InvoiceModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      clientsInfo: [],
      options: []
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
    API.get('/api/invoices/dropdown')
    .then(res => {
      console.log('clients info', res.data.clients)
      let companyNameArray = res.data.clients.map(clientInformation => {
        return clientInformation.companyName
      })
      this.setState({clientsInfo:res.data.clients, options: companyNameArray})
    })
    .then(err => {
      console.log(err)
    })
  }

  handleCloseModal () {
    this.setState({ showModal: false });
    this.props.pullInvoices();
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
                 <InvoiceGenerator close={this.handleCloseModal} dropDownOptions={this.state.options} clientsInfo={this.state.clientsInfo}/>
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
