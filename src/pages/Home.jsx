import { useState } from "react";
import "../App.css";
import BalanceSection from "../components/BalanceSection";
import SearchBar from "../components/SearchBar";
import TransactionTable from "../components/TransactionTable";
import ExpenseForm from "../components/ExpenseForm";
import BalanceForm from "../components/BalanceForm";

function Home() {
  const [activeForm, setActiveForm] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [searchText, setSearchText] = useState("");

  const filteredTransactions = transactions.filter((t) =>
    t.activity.toLowerCase().includes(searchText.toLowerCase()),
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
    <div className="">
      <div className=" w-[380px] md:w-[600px] lg:w-full p-6">
        <BalanceSection
          setActiveForm={setActiveForm}
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          remainingBalance={remainingBalance}
        />
        {activeForm === "expense" && (
          <ExpenseForm
            setTransactions={setTransactions}
            closeForm={() => setActiveForm(null)}
          />
        )}
        {activeForm === "balance" && (
          <BalanceForm
            setTransactions={setTransactions}
            closeForm={() => setActiveForm(null)}
          />
        )}
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <TransactionTable transactions={filteredTransactions} />
      </div>
    </div>
  );
}

export default Home;
