import Card from "./Card"
import "./ExpenseDate"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"

function ExpenseItem(props) {
	let title = props.title

	const clickHandler = () => {
		console.log(title)
	}

	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</div>
	)
}

export default ExpenseItem
