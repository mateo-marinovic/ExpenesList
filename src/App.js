import { useState } from "react";
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Paper',
    amount: 95.12,
    date: new Date(2020, 13, 12),
  },
  { id: 'e2', 
    title: 'TV', 
    amount: 799.49, 
    date: new Date(2020, 13, 12) },
  {
    id: 'e3',
    title: 'Car Service',
    amount: 294.67,
    date: new Date(2020, 13, 12),
  },
  {
    id: 'e4',
    title: 'Computer',
    amount: 450,
    date: new Date(2020, 12, 13),
  },
];

function App() {
  const [expenses, setExpenses]=useState(DUMMY_DATA)

  const addExpenseHandler=(expense)=>{
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense expenses={expenses}/>
    </div>
    
  );
}

export default App;
