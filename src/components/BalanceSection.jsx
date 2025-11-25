function BalanceSection({
  setShowExpenseForm,
  setShowBalanceForm,
  totalIncome,
  totalExpense,
  remainingBalance,
}) {
  return (
    <div className="mt-9 w-[450px] m-auto flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <label className="text-2xl">Balance</label>
          <span className="text-2xl text-green-700 font-bold">
            ${remainingBalance}
          </span>
        </div>
        <button
          className="bg-black text-white w-[200px] py-2 text-2xl rounded-lg cursor-pointer"
          onClick={() => setShowBalanceForm(true)}
        >
          Add Balance
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <label className="text-2xl">Spend</label>
          <span className="text-2xl text-red-700">${totalExpense}</span>
        </div>
        <button
          className="bg-black text-white w-[200px] py-2 text-2xl rounded-lg cursor-pointer"
          onClick={() => setShowExpenseForm(true)}
        >
          Add Expenses
        </button>
      </div>
    </div>
  );
}

export default BalanceSection;
