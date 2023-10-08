import { useEffect, useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DummyData = [
  // { id: "e1", title: "school Fee", amount: 250, date: new Date(2021, 5, 21) },
  // { id: "e2", title: "loan Fee", amount: 300, date: new Date(2021, 5, 24) },
  // { id: "e3", title: "hostel Fee", amount: 400, date: new Date(2021, 5, 4) },
  // { id: "e4", title: "mess Fee", amount: 150, date: new Date(2021, 5, 23) },
];

function App() {
  const [expenses, setExpenses] = useState(DummyData);
  function fetchData() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const products = data.products; // Extract the "products" property
        const transformedExpenses = products.map((product) => ({
          id: product.id.toString(),
          title: product.title,
          amount: product.price,
          date: new Date(), // You can use the current date or a date from the API
        }));
        setExpenses(transformedExpenses);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const addExpenseHandler = (expense) => {
    //Adding new data via API
    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense),
    }).then((res) => fetchData());

    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
    console.log(expense);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
