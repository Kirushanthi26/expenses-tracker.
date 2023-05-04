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
            <ExpenseItem
        titleProps={props.expensesDummyData[2].title}
        amountProps={props.expensesDummyData[2].amount}
        dateProps={props.expensesDummyData[2].date}
      />
      <ExpenseItem
        titleProps={props.expensesDummyData[3].title}
        amountProps={props.expensesDummyData[3].amount}
        dateProps={props.expensesDummyData[3].date}
      />
    </Card>
  )
}

export default Expense
