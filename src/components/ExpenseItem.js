import React from 'react'
import "./ExpenseItem.css"

const ExpenseItem = () => {

  const expenseDate = new Date(2022, 2, 25)
  const expenseTitle = 'car insurence';
  const expenseAmount = 258.33;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
