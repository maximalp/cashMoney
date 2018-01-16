import React from 'react';

const ExpenseCardList = (props) => {
  let expenses = props.expense.map((expense) => {
    return (
      <li className="col m12">
        <div className="card">
          <h2>{expense.field1}</h2>
        </div>
      </li>
    )
  })
  return(
    <ul className="row">
      {expenses}
    </ul>
  )
}

export default ExpenseCardList;
