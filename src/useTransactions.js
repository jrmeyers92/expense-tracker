// import { useContext } from "react";
// import { ExpenseTrackerContext } from "./context/context";
// import {
// 	incomeCategories,
// 	expenseCategories,
// 	resetCategories,
// } from "./constants/categories";

// const useTransactions = (title) => {
// 	resetCategories();
// 	const { transactions } = useContext(ExpenseTrackerContext);
// 	const transactionsPerType = transactions.filter((t) => t.type === title);

// 	const total = transactionsPerType.reduce(
// 		(acc, currVal) => (acc += currVal.amount),
// 		0
// 	);

// 	const catagories = title === "Income" ? incomeCategories : expenseCategories;

// 	transactionsPerType.forEach((t) => {
// 		const catagory = catagories.find((c) => c.type === t.catagory);

// 		if (catagory) {
// 			catagory.amount += t.amount;
// 		}
// 	});

// 	const filteredCatagories = catagories.filter((c) => c.amount > 0);

// 	const chartData = {
// 		datasets: [
// 			{
// 				data: filteredCatagories.map((c) => c.amount),
// 				backgroundColor: filteredCatagories.map((c) => c.color),
// 			},
// 		],
// 		labels: filteredCatagories.map((c) => c.type),
// 	};

// 	return [chartData, total, filteredCatagories];
// };

// export default useTransactions;

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

	const filteredCategories = categories.filter((sc) => sc.amount > 0);

	const chartData = {
		datasets: [
			{
				data: filteredCategories.map((c) => c.amount),
				backgroundColor: filteredCategories.map((c) => c.color),
			},
		],
		labels: filteredCategories.map((c) => c.type),
	};

	return { filteredCategories, total, chartData };
};

export default useTransactions;
