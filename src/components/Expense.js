import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expense.css"

function Expense(props){
    const [filteredYear, setFilteredYear]=useState("2021")

    const filterChangeHandler = (selectedYear)=>{
        setFilteredYear(selectedYear)
    }
    const filteredExpense = props.expenses.filter(expenses =>{
      return expenses.date.getFullYear().toString() === filteredYear
    })

    let expenseContent = <p>no expense found!</p>
    
    if (filteredExpense.length > 0){
      expenseContent= filteredExpense.map((expenses)=>(
        <ExpenseItem
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date}
        />
      ))
    }

return(
  <div>
    <div className="expenses">
     <ExpensesFilter selected={filteredYear}  onChangeFilter={filterChangeHandler}/>
      {expenseContent}
    </div> 
  </div>
 )
}

export default Expense;