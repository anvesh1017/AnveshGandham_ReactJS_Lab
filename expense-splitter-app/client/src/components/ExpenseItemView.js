import Table from "react-bootstrap/Table";

const ExpenseItemsView = (props) => {
  const sampleExpenseItems = props.expenseItems;

  function expenseItemsTable() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Expense Description</th>
            <th>Payee Name</th>
            <th>Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sampleExpenseItems.map((expenseItem, index) => {
            return (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{expenseItem.expenseDescription}</td>
                <td>{expenseItem.payeeName}</td>
                <td>{expenseItem.date}</td>
                <td>{expenseItem.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

  return <div>{expenseItemsTable()}</div>;
};

export { ExpenseItemsView };
