import React from 'react';
import ExpenseCardList from './ExpenseCardList';

const ExpenseCardListFeature = (props) => {
    return (
      <div className="row">
        <div className="col m10 z-depth-2 offset-m1">
              <h1>Recent Expenses</h1>
        </div>
          <ExpenseCardList expense={props.expense}/>
        </div>
    )
}

export default ExpenseCardListFeature;
