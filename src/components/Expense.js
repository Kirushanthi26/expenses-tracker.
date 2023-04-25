import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import Card from './Card'

const Expense = (props) => {
  return (
    <Card className='expenses'>
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
    </Card>
  )
}

export default Expense
