import React from 'react';

const ExpenseCardList = (props) => {
  let expenses = props.expense.map((expense) => {
    return (

            <li className="card col m3 z-depth-4" style={{margin:'10px'}}>
                <div className="row">
                  <div style={{background:'#f44336', height:'10px'}} class=""></div>
                  <div className="col m12 left-align">
                    <h6>Date: {expense.date}</h6>
                  </div>
                  <div className="col m12 left-align">
                    <h6>Category: {expense.category}</h6>
                  </div>
                    <div className="col m12 left-align">
                      <h6>Vendor: {expense.vendor}</h6>
                    </div>
                    <div className="col m12 left-align">
                      <h6>Description: {expense.description}</h6>
                    </div>
                    <div className="col m12 left-align card-action">
                    <h4>Total: ${expense.total}</h4>
                  </div>
                </div>




            </li>
          )
  })
  return(
    <ul className="row">
      <div className="col m12 left-align">
        <h4>Current Expenses:</h4>

      </div>
      {expenses}
    </ul>
  )
}

export default ExpenseCardList;
