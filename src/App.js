import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the local server running the JSON DB server
    axios.get('http://localhost:8001/transactions')
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter(
      (transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const sortByCategory = () => {
    const sorted = [...transactions].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    setTransactions(sorted);
  };

  const sortByDescription = () => {
    const sorted = [...transactions].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
    setTransactions(sorted);
  };

  return (
    <div>
      <h1>Bank Transactions</h1>
      <TransactionForm addTransaction={addTransaction} />
      <SearchBar handleSearch={handleSearch} />
      <TransactionTable
        transactions={filteredTransactions.length > 0 ? filteredTransactions : transactions}
        sortByCategory={sortByCategory}
        sortByDescription={sortByDescription}
      />
    </div>
  );
};

export default App;

