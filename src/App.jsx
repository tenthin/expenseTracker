import {useState } from "react";
import "./App.css";
import BalanceSection from "./components/BalanceSection";
import SearchBar from "./components/SearchBar";
import TransactionTable from "./components/TransactionTable";
import ExpenseForm from "./components/ExpenseForm";
import BalanceForm from "./components/BalanceForm";

function App() {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [showBalanceForm, setShowBalanceForm] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filteredTransactions = transactions.filter((t) =>
    t.activity.toLowerCase().includes(searchText.toLowerCase())
  );


  //dynamic transactions
  const totalIncome = transactions
  .filter((t) => t.type === "income")
  .reduce((sum, item) => sum + item.amount, 0);

  const totalExpense = transactions
  .filter((t) => t.type === "expense")
  .reduce((sum, item) => sum + item.amount, 0);

  const remainingBalance = totalIncome - totalExpense;


  return (
    <>
      <div className="w-[600px] m-auto bg-green-300 border border-black min-h-screen rounded-lg my-6 ">
        <BalanceSection setShowExpenseForm={setShowExpenseForm} setShowBalanceForm={setShowBalanceForm} totalIncome={totalIncome} totalExpense={totalExpense} remainingBalance = {remainingBalance}/>
        {showExpenseForm && (
          <ExpenseForm
            setTransactions={setTransactions}
            setShowExpenseForm={setShowExpenseForm}
          />
        )}
        {showBalanceForm && (
          <BalanceForm
            setTransactions={setTransactions}
            setShowBalanceForm={setShowBalanceForm}
          />
        )}
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <TransactionTable transactions={filteredTransactions} />
      </div>
    </>
  );
}

export default App;
