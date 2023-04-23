import React from 'react'
import "./ExpenseItem.css"

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div>March 28th 2022</div>
      <div className='expense-item__description'>
        <h2>car insurence</h2>
        <div className='expense-item__price'>$258.33</div>
      </div>
    </div>
  )
}

export default ExpenseItem
