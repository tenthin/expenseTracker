function BalanceSection({
  setShowExpenseForm,
  setShowBalanceForm,
  totalIncome,
  totalExpense,
  remainingBalance,
}) {
  return (
    <div className="mt-9 md:w-[450px] m-auto flex flex-col gap-5">
      <div className="flex items-center gap-3 justify-between">
        <div className="flex gap-2 md:gap-3">
          <label className="text-[20px] md:text-2xl">Balance</label>
          <span className="text-[20px] md:text-2xl text-green-700 ">
            ${remainingBalance}
          </span>
        </div>
        <button
          className="bg-black text-white w-[150px] md:w-[200px] px-3 py-2 text-lg md:text-2xl rounded-lg cursor-pointer"
          onClick={() => setShowBalanceForm(true)}
        >
          Add Balance
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <label className="text-[20px] md:text-2xl">Spend</label>
          <span className="text-[20px] md:text-2xl text-red-700">${totalExpense}</span>
        </div>
        <button
          className="bg-black text-white w-[150px] md:w-[200px] px-3 py-2 text-lg md:text-2xl rounded-lg cursor-pointer"
          onClick={() => setShowExpenseForm(true)}
        >
          Add Expenses
        </button>
      </div>
    </div>
  );
}

export default BalanceSection;
