import "./ExpenseItem.css";
import { useState } from "react";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  const [status, setStatus] = useState(false);
  const [buttonTitle, setButtonTitle] = useState("Mark it as out of stock");
  const clickHandler = () => {
    setStatus(true);
    setButtonTitle("Out of stock!");
    console.log(buttonTitle);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className={`${status ? "done" : ""}`}>{props.title}</h2>
        <div className={`expense-item__price${status ? " hide" : ""}`}>
          ${props.amount}
        </div>
      </div>
      <div>
        <button className={`${status ? " hide" : ""}`} onClick={clickHandler}> {buttonTitle} </button>
      </div>
      
    </Card>
  );
}
export default ExpenseItem;
