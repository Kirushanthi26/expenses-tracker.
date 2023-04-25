import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate expenseDateProps={props.dateProps} />
      <div className="expense-item__description">
        <h2>{props.titleProps}</h2>
        <div className="expense-item__price">${props.amountProps}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
