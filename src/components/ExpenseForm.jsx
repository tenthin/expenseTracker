import React, { useState } from "react";

function ExpenseForm({ setTransactions, setShowExpenseForm }) {
  const [activity, setActivity] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

if(!activity.trim() || !amount.trim() || !date.trim()) {
  alert("Please fill all the fields before submitting.");
  return;
} 

    const newExpense = {
      id: Date.now(),
      activity,
      amount: Number(amount),
      type: "expense",
      date,
    };

    setTransactions((prev) => [...prev, newExpense]);
    setShowExpenseForm(false); //close the form

    setActivity("");
    setAmount("");
    setDate("");
  };
  return (
    <>
      <div className="bg-white w-[550px] m-auto mt-9 p-4 rounded-lg">
        <h1 className="font-bold mb-5">Add Expense</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 justify-center">
            <input
              type="text"
              placeholder="Activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="border rounded-lg p-2 w-[150px] "
            />
            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border rounded-lg p-2  w-[150px]"
            />
            <input
              type="date"
              placeholder="Enter Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-lg p-2  w-[150px]"
            />
          </div>
          <div className="flex gap-3 mt-5 justify-center">
            <button
              type="button"
              onClick={() => setShowExpenseForm(false)}
              className="bg-black text-white w-[80px] py-2 rounded-lg cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white w-[80px] py-2 rounded-lg cursor-pointer"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ExpenseForm;
