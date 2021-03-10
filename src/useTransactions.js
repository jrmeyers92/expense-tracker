import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import {
	incomeCategories,
	expenseCategories,
	resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
	resetCategories();
	const { transactions } = useContext(ExpenseTrackerContext);
	const rightTransactions = transactions.filter((t) => t.type === title);
	const total = rightTransactions.reduce(
		(acc, currVal) => (acc += currVal.amount),
		0
	);
	const categories = title === "Income" ? incomeCategories : expenseCategories;

	rightTransactions.forEach((t) => {
		const category = categories.find((c) => c.type === t.category);

		if (category) category.amount += t.amount;
	});

	const filteredCategories = rightTransactions.filter((c) => c.amount > 0);

	const chartData = {
		datasets: [
			{
				data: filteredCategories.map((c) => c.amount),
				backgroundColor: categories.map((c) => c.color),
			},
		],
		labels: filteredCategories.map((c) => c.catagory),
	};

	console.log(filteredCategories);

	// console.log(chartData);

	return { filteredCategories, total, chartData };
};

export default useTransactions;
