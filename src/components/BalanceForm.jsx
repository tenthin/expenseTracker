import React, { useState } from "react";

function BalanceForm({ setTransactions, setShowBalanceForm }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount.trim() || !date.trim()) {
      alert("Please fill all the fields.");
      return;
    }

    const newIncome = {
      id: Date.now(),
      activity: "Balance added",
      amount: Number(amount),
      type: "income",
      date,
    };

    setTransactions((prev) => [...prev, newIncome]);
    setShowBalanceForm(false);
    setAmount("");
    setDate("");
  };

  return (
    <div className="bg-white w-[550px] m-auto rounded-lg mt-9 p-4">
      <h1 className="font-bold mb-5">Balance Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 justify-center">
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border p-2 rounded-lg w-[200px]"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border rounded-lg p-2 w-[200px]"
          />
        </div>
        <div className="flex gap-3 mt-5 justify-center">
          <button
            type="button"
            onClick={() => setShowBalanceForm(false)}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-lg"
        
          >
            Add Balance
          </button>
        </div>
      </form>
    </div>
  );
}

export default BalanceForm;
