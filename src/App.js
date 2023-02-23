import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import React from "react";
import { useState } from "react";

const initial_expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 250.4,
    date: new Date(2023, 5, 25),
  },
  { id: "e2", title: "Food", amount: 125.2, date: new Date(2023, 5, 25) },
  {
    id: "e3",
    title: "Household Insurance",
    amount: 259.2,
    date: new Date(2023, 5, 25),
  },
];

function App() {
  const [expenses, setExpenses] = useState(initial_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
