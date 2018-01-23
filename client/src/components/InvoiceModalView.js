import React from 'react';
import ReactModal from 'react-modal';
import InvoiceGeneratorView from './InvoiceGeneratorView';
import API from './utils/API';

class InvoiceModalView extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      clientsInfo: []
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    console.log(this.props.id)
    let id = this.props.id
    this.setState({ showModal: true });
    API.get('/api/invoice/'+id)
    .then(res => {
      console.log('clients info', res.data)
      this.setState({clientsInfo:res.data[0]})
      console.log(this.state)
    })
    .then(err => {
      console.log(err)
    })
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleOnClick = () => {
    let id = this.props.id
    API.putStatus('/api/invoice/'+id)
      .then(res => {
        console.log('FAVORITE', res.data)
        this.handleCloseModal();
        this.props.viewPull();

      })
      .then(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div className="row">
        <button style={{background:'#232d4b'}} className="col waves-light btn" onClick={this.handleOpenModal}>Details</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={false} >
           <div className="col m12">
             <button className="btn" onClick={this.handleCloseModal}>Close Modal</button>
             <div className="row">
               <div className="col m8 offset-m2">
                 {
                   (this.props.status === 'Sent') ?
                   <button className="btn" onClick={this.handleOnClick}>Mark as Paid</button>
                   :
                   null
                 }
                 <InvoiceGeneratorView status={this.props.status} clientsInfo={this.state.clientsInfo} />
               </div>

             </div>

           </div>
        </ReactModal>
      </div>
    );
  }
}

export default InvoiceModalView;

const props = {};
//
// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))
