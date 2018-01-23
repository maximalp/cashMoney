import React from 'react';
import ExpenseCardList from './ExpenseCardList';

const ExpenseCardListFeature = (props) => {
    return (
      <div className="row">
        <div className="col m12">
        </div>
          <ExpenseCardList expense={props.expense}/>
        </div>
    )
}

export default ExpenseCardListFeature;
