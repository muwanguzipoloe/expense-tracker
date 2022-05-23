import React, { useState } from "react"
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import Card from "./Card"
import ExpensesFilter from "./ExpensesFilter"

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2021")

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}
	return (
		<div className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			{props.item.map((expense) => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</div>
	)
}

export default Expenses
