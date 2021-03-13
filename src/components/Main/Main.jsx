import React, { useContext } from "react";
import {
	Card,
	CardHeader,
	CardContent,
	Grid,
	Typography,
	Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import { ExpenseTrackerContext } from "../../context/context";

const Main = () => {
	const classes = useStyles();
	const { balance } = useContext(ExpenseTrackerContext);
	return (
		<Card className={classes.root}>
			<CardHeader title='Expense Tracker' />
			<CardContent>
				<Typography align='center' variant='h5'>
					Total balance ${balance}
				</Typography>
				<Divider />
				<Form />
			</CardContent>
			<CardContent className={classes.cardContent}>
				<Grid spacing={2} container>
					<Grid item xs={12}>
						<List />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Main;
