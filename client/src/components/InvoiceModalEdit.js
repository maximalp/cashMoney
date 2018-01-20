import React from 'react';
import ReactModal from 'react-modal';
import InvoiceGeneratorEdit from './InvoiceGeneratorEdit';

class InvoiceModalEdit extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (event) {
    this.setState({ showModal: true });
    console.log(event.target.id)
    this.props.handleOnClickEdit(event.target.id);

  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div className="row">
        <h1>Edit</h1>
        <button id={this.props.id} className="chip col m12" onClick={this.handleOpenModal}>Edit</button>
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
                 <InvoiceGeneratorEdit inputChange={this.props.inputChange} edit={this.props.edit} />
               </div>

             </div>

           </div>
        </ReactModal>
      </div>
    );
  }
}

export default InvoiceModalEdit;

const props = {};
//
// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))
