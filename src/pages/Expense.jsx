import TransactionTable from "../components/TransactionTable";

function Expense({ transactions }) {

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Expenses</h1>

        <button className="bg-red-600 text-white px-4 py-2 rounded">
          New Expense
        </button>
      </div>

      {/* Reuse TransactionTable */}
      <TransactionTable
        transactions={transactions}
        filterType="expense"
      />
    </div>
    
  );
}

export default Expense;
