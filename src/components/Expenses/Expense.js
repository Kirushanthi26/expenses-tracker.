import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import Card from '../UI/Card'
import ExpensesFilter from '../Filter/ExpensesFilter'

const Expense = (props) => {
  const [filteredYear, setFilterYear] = useState("2020");

  const onChangeFilter = (selectedYear) => {
    setFilterYear(selectedYear)
  }


  const filteredExpenses = props.expensesDummyData.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className='expenses'>

    <ExpensesFilter onChangeFilter={onChangeFilter} selected={filteredYear}/>

      {filteredExpenses.length === 0 && <p>No expense found.</p>}

      {filteredExpenses.map((expense)=>
        <ExpenseItem
        key={expense.id}
        titleProps={expense.title}
        amountProps={expense.amount}
        dateProps={expense.date}
      />
      )}
      
    </Card>
  )
}

export default Expense
