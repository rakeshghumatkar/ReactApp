import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = ({ onAddExpense }) => {
  //receving data from child
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const eneteredData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(eneteredData);
    onAddExpense(eneteredData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
