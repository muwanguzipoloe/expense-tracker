import React, { useState } from "react"
import "./Expenses.css"
import Card from "./Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2021")

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<div className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesList items={filteredExpenses} />
		</div>
	)
}

export default Expenses
