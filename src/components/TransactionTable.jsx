function TransactionTable({ transactions }) {
  return (
    <div className="w-[450px] m-auto">
      <h1 className="font-bold text-xl mb-3">Transactions</h1>

      <table className="table-fixed border w-full">
        <thead>
          <tr>
            <th className="w-1/2 border p-2">Activity</th>
            <th className="w-1/4 border p-2">Amount</th>
            <th className="w-1/4 border p-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.activity}</td>

              <td
                className={`border p-2 ${
                  item.type === "income" ? "text-green-700" : "text-red-700"
                }`}
              >
                ${item.amount}
              </td>

              <td className="border p-2">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
