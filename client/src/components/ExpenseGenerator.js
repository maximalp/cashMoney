import React from 'react';
import Input from './Input';
import API from './utils/API';

class ExpenseGenerator extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      category: "",
      date: "",
      vendor: "",
      description:"",
      total:""
    }
  }

  static defaultProps = {
    category: "Pick From Below",
    date: "MMDDYYY",
    vendor: "Enter Company Name Here",
    description:"Itemized List",
    total:"0.00",
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleOnClick = (event) => {
    let query = '/make';
    API.get(query)
    .then(res => {
      let newEntry = res.data;
      this.setState({holder:newEntry})
    })
    .catch(err => console.log(err));
  }

  showState = (event) => {
    console.log(this.state);
  }



  render() {
    return (
      <div>
          {/* Header Address */}
          {/* Inject: Hard Coded: US */}

        <div style={{background:'#e1f5fe'}} className="row card">
          {/* Billing Section */}
          <section className="col m8">
            <div className="row">
              <div className="col m12">
                <h5>Category</h5>
                <Input placeholder={this.props.category} value={this.state.category} type={"text"} name={"category"} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <h5>Vendor</h5>
                <Input placeholder={this.props.vendor} value={this.state.vendor} type={"text"} name={"vendor"} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <h5>Itemized List</h5>
                <Input placeholder={this.props.description} value={this.state.description} type={"text"} name={"description"} onChange={this.handleInputChange}/>
              </div>
            </div>
          </section>
          <section className="col m4">
            <div className="row">
              <div className="col m12">
                <h5>Date of Issue:</h5>
                <Input placeholder={this.props.date} value={this.state.date} type={"text"} name={"date"} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <h5>Due Date:</h5>
                <Input placeholder={this.props.date} value={this.state.date} type={"text"} name={"date"} onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <h5></h5>
                <h5>Expense Number: 001</h5>
              </div>
            </div>
            <div className="row">
              <div className="col m12">
                <h5>Amount Due</h5>
                <h2><Input value={this.state.amountDue} placeholder={this.props.amountDue} type={"text"} name={"amountDue"} onChange={this.handleInputChange}/></h2>
              </div>
              <button className="btn btn-small" onClick={this.handleSuModal}>Submit</button>
            </div>
          </section>

            {/* Billed to section */}



        </div>
          {/* <line item section */}

      </div>
    )
  }

}

export default ExpenseGenerator;
