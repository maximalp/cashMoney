import React from 'react';
import ExpenseCardList from './ExpenseCardList';

class ExpenseCardListFeature extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expenses:[]
    }
  }

  componentDidMount() {
    let expenses = this.props.expense;
    this.setState({
      expenses:expenses
    })
  }

  render () {
    return (
      <div className="row" style={{background:'pink'}}>
        <div className="col m12">
          <h1>ExpenseCardListFeature Component</h1>
          <ExpenseCardList expenses={this.state.expenses}/>
        </div>
      </div>
    )
  }
}

export default ExpenseCardList;
