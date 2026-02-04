import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/Dashboard";
import Home from "./pages/Home";
import Expense from "./pages/Expense";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route
            path="/"
            element={
              <Home
                transactions={transactions}
                addTransaction={addTransaction}
              />
            }
          />
          <Route
            path="/expenses"
            element={<Expense transactions={transactions} />}
          />
          <Route path="/add-expense" element={<Home transactions={transactions} addTransaction={addTransaction}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
