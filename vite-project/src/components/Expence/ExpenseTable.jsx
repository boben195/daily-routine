import React, { useState, useEffect } from "react";
import "./ExpenseTable.css";

const ExpenseTable = ({ date }) => {
  const storageKey = `expenses-${date}`;

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setExpenses(JSON.parse(saved));
    }
  }, [storageKey]);

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(expenses));
    }
  }, [expenses, storageKey]);

  const addRow = () => {
    setExpenses([...expenses, { description: "", amount: "" }]);
  };

  const updateExpense = (index, field, value) => {
    const updated = [...expenses];
    updated[index][field] =
      field === "amount" ? parseFloat(value) || "" : value;
    setExpenses(updated);
  };

  const totalAmount = expenses.reduce(
    (sum, item) => sum + (Number(item.amount) || 0),
    0
  );

  return (
    <div className="expense-table">
      <h2>💸 Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item / Purpose</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"
                  value={expense.description}
                  onChange={(e) =>
                    updateExpense(index, "description", e.target.value)
                  }
                  placeholder="What did you buy?"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={expense.amount}
                  onChange={(e) =>
                    updateExpense(index, "amount", e.target.value)
                  }
                  placeholder="0"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="expense-footer">
        <button onClick={addRow} className="add-row-btn">
          + Add Row
        </button>

        <div className="total">
          <b>Total: ${totalAmount.toFixed(2)}</b>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTable;
