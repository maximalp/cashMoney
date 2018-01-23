import React from 'react';

const ExpenseCardList = (props) => {
  let expenses = props.expense.map((expense) => {
    return (

            <li className="card col m8 z-depth-2 offset-m2" style={{marginBottom: 10, marginTop: 10}}>
                <div className="row">
                  <div className="col m12 left-align">
                    <h3>Date: {expense.date}</h3>
                  </div>
                  <div className="col m12 left-align">
                    <h3>Category:{expense.category}</h3>
                  </div>
                    <div className="col m12 left-align">
                      <h3>Vendor:{expense.vendor}</h3>
                    </div>
                    <div className="col m12 left-align">
                      <h3>Description:{expense.description}</h3>
                    </div>
                    <div className="col m12 right-align">
                    <h2>Total:${expense.total}</h2>
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
