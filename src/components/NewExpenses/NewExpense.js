import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const savedDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString,
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm savedData={savedDataHandler} />
    </div>
  );
}

export default NewExpense;
