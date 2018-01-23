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
      options: [],
      id:[]
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
      let companyIdArray = res.data.clients.map(clientInformation => {
        return clientInformation._id
      })
      this.setState({clientsInfo:res.data.clients, options: companyNameArray, id: companyIdArray})
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
        <div className="col m12">
          <div className="row">
            <button style={{background:'#0288d1'}} className="col offset-m3 m6 waves-light btn" onClick={this.handleOpenModal}>Create Invoice</button>

          </div>

        </div>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={false} >
           <div className="col m12">
             <button className="btn" onClick={this.handleCloseModal}>Close Modal</button>
             <div className="row">
               <div className="col m8 offset-m2">
                 <InvoiceGenerator close={this.handleCloseModal} dropDownOptions={this.state.options} clientsInfo={this.state.clientsInfo} clientsId={this.state.id}/>
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
