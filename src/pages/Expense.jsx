import { Link } from "react-router-dom";
import TransactionTable from "../components/TransactionTable";

function Expense({ transactions }) {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Expenses</h1>
            <p className="text-sm text-gray-500">
              Track and manage your spending
            </p>
          </div>

          <Link to="/add-expense" className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-lg">
            + New Expense
          </Link>
        </div>

        {/* Reuse TransactionTable */}
        <TransactionTable transactions={transactions} filterType="expense" />
      </div>
    </div>
  );
}

export default Expense;
