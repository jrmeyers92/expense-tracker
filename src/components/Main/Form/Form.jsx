import React, { useState, useContext } from "react";
import {
	TextField,
	Typography,
	Grid,
	Button,
	FormControl,
	Select,
	MenuItem,
	InputLabel,
} from "@material-ui/core";
import useStyles from "./styles";
import { ExpenseTrackerContext } from "../../../context/context";
import { v4 as uuidv4 } from "uuid";
import {
	incomeCategories,
	expenseCategories,
} from "../../../constants/categories";
import formatDate from "../../../utils/formatDate";

const initialState = {
	amout: "",
	catagory: "",
	type: "Income",
	date: formatDate(new Date()),
};

const Form = () => {
	const classes = useStyles();
	const [formData, setFormData] = useState(initialState);
	const { addTransaction } = useContext(ExpenseTrackerContext);

	const createTransaction = () => {
		const transaction = {
			...formData,
			amount: Number(formData.amout),
			id: uuidv4(),
		};
		addTransaction(transaction);
		setFormData(initialState);
	};

	const selectedCatagories =
		formData.type === "Income" ? incomeCategories : expenseCategories;

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography align='center' variant='subtitle2' gutterBottom>
					...
				</Typography>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Type</InputLabel>
					<Select
						value={formData.type}
						onChange={(e) =>
							setFormData({ ...formData, type: e.target.value })
						}>
						<MenuItem value='Income'>Income</MenuItem>
						<MenuItem value='Expense'>Expense</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<FormControl fullWidth>
					<InputLabel>Catagory</InputLabel>
					<Select
						value={formData.catagory}
						onChange={(e) =>
							setFormData({ ...formData, catagory: e.target.value })
						}>
						{selectedCatagories.map((c) => {
							return (
								<MenuItem key={c.type} value={c.type}>
									{c.type}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type='number'
					label='Amount'
					fullWidth
					onChange={(e) => setFormData({ ...formData, amout: e.target.value })}
					value={formData.amout}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					type='date'
					label='Date'
					fullWidth
					value={formData.date}
					onChange={(e) =>
						setFormData({ ...formData, date: formatDate(e.target.value) })
					}
				/>
			</Grid>
			<Button
				className={classes.button}
				variant='outlined'
				fullWidth
				color='primary'
				onClick={createTransaction}>
				Create
			</Button>
		</Grid>
	);
};

export default Form;
