import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new transaction object with the form data
    const newTransaction = {
      id: Date.now(), // You can use any unique identifier method
      date: new Date().toISOString().split('T')[0], // Set the current date
      category,
      description,
      amount: parseFloat(amount),
    };

    // Call the addTransaction function passed as a prop to update the transactions state
    addTransaction(newTransaction);

    // Reset the form fields after submission
    setCategory('');
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;

