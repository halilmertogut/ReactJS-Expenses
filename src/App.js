import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const expenses = [
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

  return(
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  )
}

export default App;
