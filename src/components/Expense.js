import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'

const Expense = (props) => {
  return (
    <div className='expenses'>
      <ExpenseItem
        titleProps={props.expensesDummyData[0].title}
        amountProps={props.expensesDummyData[0].amount}
        dateProps={props.expensesDummyData[0].date}
      />
      <ExpenseItem
        titleProps={props.expensesDummyData[1].title}
        amountProps={props.expensesDummyData[1].amount}
        dateProps={props.expensesDummyData[1].date}
      />
    </div>
  )
}

export default Expense
