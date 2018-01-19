import React from 'react';
import ReactModal from 'react-modal';
import ExpenseGenerator from './ExpenseGenerator';

class ExpenseModal extends React.Component {
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
        <button className="btn btn-large" onClick={this.handleOpenModal}>Add and Expense Report</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={false} >
           <div className="col m12">
             <button className="btn btn-small" onClick={this.handleCloseModal}>Close</button>
             <h1>Create Expense Report:</h1>
             <div className="row">
               <div className="col m10 offset-m1">
                 <ExpenseGenerator/>
               </div>

             </div>

           </div>
        </ReactModal>
      </div>
    );
  }
}

export default ExpenseModal;

const props = {};
//
// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))
