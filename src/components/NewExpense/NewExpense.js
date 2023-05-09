import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    //console.log(expenseData)
    props.onGetExpenseData(expenseData);
    setIsEditing(false);
  }

  const startEditinghandler = () => {
    setIsEditing(true);
  }

  const stopEditinghandler = () => {
    setIsEditing(false);
  }

  return (
    <div className='new-expense'>
     {!isEditing && <button type="submit" onClick={startEditinghandler}>Add New Expense</button> }
     {isEditing &&  <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={stopEditinghandler}/>}
    </div>
  )
}

export default NewExpense
