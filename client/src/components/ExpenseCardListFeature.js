import React from 'react';
import ExpenseCardList from './ExpenseCardList';

const ExpenseCardListFeature = (props) => {
    return (
      <div className="row" >
        <div className="col m12">
          <h1>Expenses</h1>
          <ExpenseCardList expense={props.expense}/>
        </div>
      </div>
    )
}

export default ExpenseCardListFeature;
