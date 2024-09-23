import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddExpense() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-xl"
      data-v0-t="card"
    >
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          New Expense
        </h3>
        <p className="text-sm text-muted-foreground">
          Add a new expense to your records.
        </p>
      </div>
      <div className="p-6 grid gap-4">
        <div className="grid gap-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select category</option>
              <option value="food">Food</option>
              <option value="transport">Transport</option>
              <option value="entertainment">Entertainment</option>
              <option value="utilities">Utilities</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              id="amount"
              placeholder="0.0"
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="items-center p-6 flex justify-end">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-gray-950 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-ring h-10 px-4 py-2"
          type="submit"
        >
          Save Expense
        </button>
      </div>
    </div>
  );
}

export default AddExpense;
