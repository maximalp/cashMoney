import React from 'react';

const ExpenseCardList = (props) => {
  let expenses = props.expense.map((expense) => {
    return (
<div className="row">
  <div className="col s6 offset-s6">
    <div className="collection">
      <li className="collection-item" style={{height:'80px'}}>
          <h2>{expense.field1}</h2>
      </li>
    </div>
  </div>
</div>
    )
  })
  return(
    <ul className="row">
      {expenses}
    </ul>
  )
}

export default ExpenseCardList;
