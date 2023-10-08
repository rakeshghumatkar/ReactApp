import "./ExpenseDate.css";
const ExpenseDate = ({ date }) => {
  if (!(date instanceof Date)) {
    // Handle the case where 'date' is not a valid Date object
    return null; // You can return null or some other suitable placeholder
  }

  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
