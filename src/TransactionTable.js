import React from 'react';

const TransactionTable = ({ transactions, sortByCategory, sortByDescription, deleteTransaction }) => {
  if (!transactions) {
    return <div>Loading...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th onClick={sortByCategory}>Category</th>
          <th onClick={sortByDescription}>Description</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.category}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>
              <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
