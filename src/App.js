import ExpenseItem from "./components/ExpenseItem";

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
  return (
    <div>
      
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
