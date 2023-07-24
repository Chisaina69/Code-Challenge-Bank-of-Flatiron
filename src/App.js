import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import SearchBar from "./SearchBar";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://animeworld-lgf0.onrender.com/transactions"
        );
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (searchTerm) => {
    if (!transactions) {
      return;
    }

    const filtered = transactions.filter((transaction) =>
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
        transactions={
          filteredTransactions.length > 0 ? filteredTransactions : transactions
        }
        sortByCategory={sortByCategory}
        sortByDescription={sortByDescription}
      />
    </div>
  );
};

export default App;
