import React from "react";
import ExpenseGenerator from '../ExpenseGenerator';
import ExpenseCardListFeature from '../ExpenseCardListFeature';
import API from '../utils/API';
import ExpenseModal from '../ExpenseModal';

class Expenses extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      expense:[],
      category: "",
      date: "",
      vendor: "",
      description:"",
      total:"",
      expenseTotal:0
    }
  }

componentDidMount() {
  this.loadExpenses();
}

loadExpenses = () => {
    API.getExpenses()
      .then(res => {
        let expense = res.data
        let expenseTotal = expense.reduce((sum, expense) => {
          return sum + expense.total;
        }, 0)
        this.setState({ expense, expenseTotal })
        console.log('NEW STATE')
        }
      )
      .catch(err => console.log(err));
  };

handleInputChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({
    [name]: value
  });
}

deleteExpense = id => {
    API.deleteExpense(id)
      .then(res => this.loadExpenses())
      .catch(err => console.log(err));
  };

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(
      {[name]: value}
    )
  };

handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.category && this.state.total) {
      API.saveExpense({
        category: this.state.category,
        vendor: this.state.vendor,
        description: this.state.description,
        total: this.state.total
      })
        .then(res => {
          // this.loadExpenses()}
          console.log(res)
        })
        .catch(err => console.log(err));
    }
  };

  // handleOnClickCreate = (event) => {
  //   let query = '/make';
  //   API.get(query)
  //   .then(res => {
  //     let newEntry = res.data;
  //     this.setState({holder:newEntry})
  //   })
  //   .catch(err => console.log(err));
  // }
  //
  // handleOnClick = (event) => {
  //   console.log(this.state);
  // }

  render () {
    return (
      <div className="row">
        <div className="col m12 z-depth-3">
          <div className="col offset-m3 m3" style={{'height':'200px'}}>
            <h1>${this.state.expenseTotal}</h1>
            <h5>Total Expenses</h5>

          </div>
          <div className="col m3" style={{'height':'200px'}}>
            <br></br>
            <br></br>
            <br></br>

            <ExpenseModal reload={this.loadExpenses}>
            </ExpenseModal>
          </div>

        </div>
        <div className="col m12">
          <ExpenseCardListFeature expense={this.state.expense}/>

        </div>




        {/* <p>
          Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
          Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu dictum.
          Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus sodales
          volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc, sed
          pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum,
          nisi justo laoreet risus, luctus luctus mi lacus sit amet libero. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Mauris pretium condimentum tellus eget lobortis. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Donec placerat accumsan
          mi, ut congue neque placerat eu. Donec nec ipsum in velit pellentesque
          vehicula sit amet at augue. Maecenas aliquam bibendum congue. Pellentesque
          semper, lectus non ullamcorper iaculis, est ligula suscipit velit, sed
          bibendum turpis dui in sapien.
        </p> */}
      </div>
    )
  }
}

export default Expenses;
