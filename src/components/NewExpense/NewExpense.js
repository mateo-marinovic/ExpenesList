import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense=(props)=>{
    const [isEditing, setEditing]=useState(false)

const saveExpenseDataHandler=(enteredExpenseData)=>{
    const expenseData={
        ...enteredExpenseData,
        id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    
    setEditing(false)
    }

    const startEditingHandler = () => {
        setEditing(true)
    }

    const closeEditingHandler = () =>{
        setEditing(false)
        
    }
return(
    <div className="new-expense">
        {!isEditing && <button onClick ={startEditingHandler}>Add new expense</button>}
        {isEditing && <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler}
        onClose={closeEditingHandler}
        />}
    </div>
)
}

export default NewExpense;