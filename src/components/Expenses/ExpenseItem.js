import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
//date is commented
const ExpenseItem = ({ title, amount }) => {
  return (
    <Card className="expense-item">
      {/* <div>
        <ExpenseDate date={date} />
      </div> */}

      <div className="expense-item__description">
        <h1>{title}</h1>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
