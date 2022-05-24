import React, { useState } from "react"

import "./ExpenseForm.css"

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("")
	const [enteredAmount, setEnteredAmount] = useState("")
	const [enteredDate, setEnteredDate] = useState("")
	const [pressed, setPressed] = useState(0)

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value)
	}
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value)
	}
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value)
	}

	const submitHandler = (event) => {
		event.preventDefault()

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		}

		props.onSaveExpenseData(expenseData)

		setEnteredTitle("")
		setEnteredAmount("")
		setEnteredDate("")
	}
	const formDisplayHandler = (e) => {
		e.preventDefault()
		setPressed(1)
	}
	const cancelHandler = (e) => {
		e.preventDefault()
		setPressed(0)
	}

	if (pressed === 0) {
		return (
			<button onClick={formDisplayHandler} className="new-expense">
				AddExpense
			</button>
		)
	}
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={enteredAmount}
						onChange={amountChangeHandler}
						min="0.01"
						step="0.01"
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={enteredDate}
						onChange={dateChangeHandler}
						min="2019-01-01"
						max="2023-12-31"
					/>
				</div>
				<div className="new-expense__actions">
					<button onClick={cancelHandler}>Cancel</button>
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	)
}

export default ExpenseForm
