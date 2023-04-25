import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.expenseDateProps.toLocaleString("en-US", {month: "long",});
  const date = props.expenseDateProps.toLocaleString("en-US", {day: "2-digit",});
  const year = props.expenseDateProps.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{date}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
