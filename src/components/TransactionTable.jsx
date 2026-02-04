function TransactionTable({ transactions, filterType }) {
  const filteredTransactions = filterType
    ? transactions.filter((item) => item.type === filterType)
    : transactions;

  return (
    <div className="mt-4 overflow-x-auto">
      <h1 className="font-bold text-xl mb-3">
        {filterType ? "Expenses" : "Transactions"}
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left text-sm text-gray-500 border-b p-3">
              Activity
            </th>
            <th className="text-right text-sm text-gray-500 border-b p-3">
              Amount
            </th>
            <th className="text-right text-sm text-gray-500 border-b p-3">
              Date
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.length === 0 && (
            <tr>
              <td colSpan="3" className="p-6 text-center text-gray-400">
                No expenses yet. Add your first one.
              </td>
            </tr>
          )}

          {filteredTransactions.map((item) => (
            <tr key={item.id}>
              <td className="p-3">{item.activity}</td>

              <td
                className={`p-3 text-right font-medium ${
                  item.type === "income" ? "text-green-600" : "text-red-600"
                }`}
              >
                ${item.amount}
              </td>

              <td className="p-3 text-right text-sm text-gray-500">
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
