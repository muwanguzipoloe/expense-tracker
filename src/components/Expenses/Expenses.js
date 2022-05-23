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

			{/* <ExpenseItem
				title={props.item[0].title}
				amount={props.item[0].amount}
				date={props.item[0].date}
			/>
			<ExpenseItem
				title={props.item[1].title}
				amount={props.item[1].amount}
				date={props.item[1].date}
			/>
			<ExpenseItem
				title={props.item[2].title}
				amount={props.item[2].amount}
				date={props.item[2].date}
			/>
			<ExpenseItem
				title={props.item[3].title}
				amount={props.item[3].amount}
				date={props.item[3].date}
			/> */}
		</div>
	)
}

export default Expenses
