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

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})
	return (
		<div className="expenses">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>

			{filteredExpenses.length === 0 ? (
				<p>
					Your expenses list for the curently selected year is empty.
				</p>
			) : (
				filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))
			)}
		</div>
	)
}

export default Expenses
