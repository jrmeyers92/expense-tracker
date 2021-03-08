import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";
import {
	incomeCatagories,
	expenseCatagories,
	resetCatagories,
} from "./constants/categories";

const useTransactions = (title) => {
	resetCatagories();
	const { transactions } = useContext(ExpenseTrackerContext);
	const transactionsPerType = transactions.filter((t) => {
		t.type === title;
	});

	const total = transactionsPerType.reduce((acc, currVal) => {
		(acc += currVal.amount), 0;
	});

	const catagories = title === "Income" ? incomeCatagories : expenseCatagories;

	transactionsPerType.forEach((t) => {
		const catagory = catagories.find((c) => {
			c.type === t.catagory;
		});

		if (catagory) {
			catagory.amount += t.amount;
		}
	});

	const filteredCatagories = catagories.filter((c) => {
		c.amount > 0;
	});

	const chartData = {
		datasets: [
			{
				data: filteredCatagories.map((c) => c.amount),
				backgroundColor: filteredCatagories.map((c) => c.color),
			},
		],
		labels: filteredCatagories.map((c) => c.type),
	};

	return [filteredCatagories, chartData, total];
};

export default useTransactions;
