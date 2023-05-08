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

  return (
    <Card className='expenses'>

    <ExpensesFilter onChangeFilter={onChangeFilter} selected={filteredYear}/>
      {props.expensesDummyData.map((expense)=>
        <ExpenseItem
        key={expense.id}
        titleProps={expense.title}
        amountProps={expense.amount}
        dateProps={expense.date}
      />
      )
      }
    </Card>
  )
}

export default Expense
