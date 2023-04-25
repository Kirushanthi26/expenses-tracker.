import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  return (
    <div className="expense-item">
      <div>{props.dateProps.toString()}</div>
      <div className="expense-item__description">
        <h2>{props.titleProps}</h2>
        <div className="expense-item__price">${props.amountProps}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
