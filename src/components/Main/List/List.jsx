import React from "react";
import {
	List as MUIList,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	ListItemSecondaryAction,
	IconButton,
	Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";

const List = () => {
	const transactions = [
		{
			id: 1,
			type: "Income",
			catagory: "Salary",
			amount: 50,
			date: "Wed, Dec 16th",
		},
		{
			id: 2,
			type: "Expense",
			catagory: "Pets",
			amount: 50,
			date: "Thur, Dec 17th",
		},
		{
			id: 3,
			type: "Income",
			catagory: "Business",
			amount: 150,
			date: "Fri, Dec, 18th",
		},
	];
	const classes = useStyles();
	return (
		<MUIList dense={false} className={classes.list}>
			{transactions.map((transaction) => (
				<Slide
					direction='down'
					in
					mountOnEnter
					unmountOnExit
					key={transaction.id}>
					<ListItem>
						<ListItemAvatar>
							<Avatar
								className={
									transaction.type === "Income"
										? classes.avatarIncome
										: classes.avatarExpense
								}>
								<MoneyOff />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={transaction.catagory}
							secondary={`$${transaction.amount} - ${transaction.date}`}
						/>
						<ListItemSecondaryAction>
							<IconButton edge='end' aria-label='delete' onClick=''>
								<Delete />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				</Slide>
			))}
		</MUIList>
	);
};

export default List;
