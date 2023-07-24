import React, { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import SearchBar from "./SearchBar";

// Sample data
const initialTransactions = [
  {
    transactions: [
      {
        id: 1,
        date: "2019-12-01",
        description: "Paycheck from Bob's Burgers",
        category: "Income",
        amount: 1000,
      },
      {
        id: 2,
        date: "2019-12-01",
        description: "South by Southwest Quinoa Bowl at Fresh & Co",
        category: "Food",
        amount: -10.55,
      },
      {
        id: 3,
        date: "2019-12-02",
        description: "South by Southwest Quinoa Bowl at Fresh & Co",
        category: "Food",
        amount: -10.55,
      },
      {
        id: 4,
        date: "2019-12-04",
        description: "Sunglasses, Urban Outfitters",
        category: "Fashion",
        amount: -24.99,
      },
      {
        id: 5,
        date: "2019-12-06",
        description: "Venmo, Alice Pays you for Burrito",
        category: "Food",
        amount: 8.75,
      },
      {
        id: 6,
        date: "2019-12-06",
        description: "Chipotle",
        category: "Food",
        amount: -17.59,
      },
      {
        id: 7,
        date: "2019-12-07",
        description: "Birthday Check from Grandma",
        category: "Gift",
        amount: 50,
      },
      {
        id: 8,
        date: "2019-12-09",
        description: "Lyft Ride",
        category: "Transportation",
        amount: -13.25,
      },
      {
        id: 9,
        date: "2019-12-11",
        description: "Paycheck from Bob's Burgers",
        category: "Income",
        amount: 1000,
      },
      {
        id: 10,
        date: "2019-12-16",
        description: "Tickets, Flatiron Multiplex Cinemas",
        category: "Entertainment",
        amount: -24,
      },
      {
        id: 11,
        date: "2019-12-16",
        description: "MTA Vending Machine: MetroCard",
        category: "Transportation",
        amount: -116.39,
      },
      {
        id: 12,
        date: "2019-12-17",
        description: "Venmo, Pay Roommate for Rent",
        category: "Housing",
        amount: -975,
      },
      {
        date: "2022-07-09",
        description: "Office lunch",
        category: "Food",
        amount: "2000",
        id: 13,
      },
      {
        date: "2022-07-09",
        description: "Office lunch Wednesday",
        category: "Food",
        amount: "3000",
        id: 14,
      },
    ],
  },
];

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      setTransactions(initialTransactions);
    }, 1000);
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const handleSearch = (searchTerm) => {
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
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
};

export default App;
