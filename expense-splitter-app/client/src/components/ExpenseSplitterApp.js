import { useEffect } from "react";

import { getAllExpenseItems } from "../service/expense";
import { ExpenseItemsView } from "./ExpenseItemView";

import { Container } from "react-bootstrap";

import { useState } from "react";
import { NewExpenseItem } from "./NewExpenseitem";
import { ExpenseSummary } from "./ExpenseSummary";

const ExpenseSplitterApp = () => {
  const [expenseItems, setExpenseItems] = useState([]);

  useEffect(() => {
    const getAllExpenseItemsInvoker = async () => {
      const response = await getAllExpenseItems();
      console.log(`Expense Items -> ${JSON.stringify(response)}`);

      setExpenseItems(response);
    };

    getAllExpenseItemsInvoker();
  }, []);

  return (
    <Container>
      <h2>Expense Manager Application</h2>

      <NewExpenseItem expenseItems={expenseItems}></NewExpenseItem>

      <ExpenseItemsView expenseItems={expenseItems}></ExpenseItemsView>

      <ExpenseSummary expenseItems={expenseItems}></ExpenseSummary>
    </Container>
  );
};

export { ExpenseSplitterApp };
