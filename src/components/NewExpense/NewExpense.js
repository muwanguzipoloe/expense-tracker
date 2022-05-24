import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {
	const [pressed, setPressed] = useState(false)

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		}
		// console.log(expenseData)
		props.onAddExpense(expenseData)
	}

	const formDisplayHandler = (e) => {
		e.preventDefault()
		setPressed(true)
	}
	const cancelHandler = (e) => {
		e.preventDefault()
		setPressed(false)
	}

	return (
		<div className="new-expense">
			{!pressed && (
				<button onClick={formDisplayHandler} className="new-expense">
					AddExpense
				</button>
			)}
			{pressed && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					cancelForm={cancelHandler}
				/>
			)}
		</div>
	)
}

export default NewExpense
