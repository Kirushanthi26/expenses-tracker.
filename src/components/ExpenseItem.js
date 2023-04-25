import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDateProps={props.dateProps} />
      <div className="expense-item__description">
        <h2>{props.titleProps}</h2>
        <div className="expense-item__price">${props.amountProps}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
