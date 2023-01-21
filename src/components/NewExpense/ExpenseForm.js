import "./ExpenseForm.css"
import { useState } from "react"

const ExpenseForm = (props)=>{
    const [enterTitle,setEnterTitle] =useState(" ");
    const [enterAmount,setEnterAmount] =useState(" ");
    const [enterDate,setEnterDate] =useState(" ");
    /*const[userInput, setEnterInput]= useState({
        enteredTitle:" ",
        enteredAmount:" ",
        enteredData:" "
    })*/
    const titleChangeHandler= (event)=>{
        setEnterTitle(event.target.value)
        /*setEnterInput({
            ...userInput,
            enteredTitle:event.target.value,
        })*/
    }
    const amountChangeHandler=(event)=>{
        setEnterAmount(event.target.value)
        /*setEnterInput({
            ...userInput,
            enteredAmount:event.target.value,
        })*/
    }
    const dateChangeHandler=(event)=>{
        setEnterDate(event.target.value)
        /*setEnterInput({
            ...userInput,
            enteredDate:event.target.value,
        })*/
    }
    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title:enterTitle,
            amount:enterAmount,
            date:new Date(enterDate),
        }

        props.onSaveExpenseData(expenseData)

        setEnterTitle(" ");
        setEnterAmount(" ");
        setEnterDate(" ");
    }

    return(
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input 
                type="text" 
                onChange={titleChangeHandler} 
                value={enterTitle}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input 
                type="number" 
                min="0.01" 
                step="0.01" 
                onChange={amountChangeHandler} 
                value={enterAmount}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input 
                type="date" 
                min="2019-01-01" 
                max="2021-12-31" 
                onChange={dateChangeHandler} 
                value={enterDate}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onClose}>Close window</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    ) 
}

export default ExpenseForm;