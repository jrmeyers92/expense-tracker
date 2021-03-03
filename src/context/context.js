import React, { useReducer, createContext } from "react";

const initalState = [];

export const ExpenseTrackerContext = createContext(initalState);

export const Provider = ({ children }) => {
	return (
		<ExpenseTrackerContext.Provider value={{ name: "expense tracker" }}>
			{children}
		</ExpenseTrackerContext.Provider>
	);
};
