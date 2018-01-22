import React from 'react';

const ExpenseCardList = (props) => {
  let expenses = props.expense.map((expense) => {
    return (
            <li className="card col m12">
                <div className="row">
                  <div className="col m12">
                    <h2>Date: {expense.date}</h2>
                  </div>
                  <div className="col m6">
                    <h2>Category:{expense.category}</h2>
                    <h3>Vendor:{expense.vendor}</h3>
                  </div>
                  <div className="col m6">
                    <h2>Total:${expense.total}</h2>
                    <h3>Description:{expense.description}</h3>

                  </div>


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
