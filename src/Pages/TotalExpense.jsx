import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router";


const TotalExpense = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const API_URL = import.meta.env.VITE_API_URL; // <-- .env থেকে URL

  const fetchExpenses = async () => {
    try {
      const res = await fetch(`${API_URL}/api/expenses`);
      const data = await res.json();
      setExpenses(data);
      setTotal(data.reduce((sum, e) => sum + Number(e.amount), 0));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetchExpenses(); }, []);

  const handleDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete this expense?")) return;
    try {
      const res = await fetch(`${API_URL}/api/expenses/${_id}`, { method: "DELETE" });
      if (res.ok) {
        const newExpenses = expenses.filter(exp => exp._id !== _id);
        setExpenses(newExpenses);
        setTotal(newExpenses.reduce((sum, e) => sum + Number(e.amount), 0));
      }
    } catch (err) { console.error(err); }
  };

  return (
    <div className="p-6">
      <div className="mb-6 p-4 bg-blue-100 rounded-md text-blue-800 font-bold text-lg text-center">
        Total Expense: ৳{total.toFixed(2)}
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-3 border-b">Title</th>
              <th className="py-2 px-3 border-b">Amount</th>
              <th className="py-2 px-3 border-b">Category</th>
              <th className="py-2 px-3 border-b">Date</th>
              <th className="py-2 px-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={expense._id} className="text-center">
                <td className="py-2 px-3 border-b">{expense.title}</td>
                <td className="py-2 px-3 border-b">৳{expense.amount}</td>
                <td className="py-2 px-3 border-b">{expense.category}</td>
                <td className="py-2 px-3 border-b">{new Date(expense.date).toLocaleDateString()}</td>
                <td className="py-2 px-4 border-b text-center">
                  <div className="flex justify-center gap-2">
                    <FiEdit
                      className="cursor-pointer text-blue-500"
                      onClick={() => navigate(`/edit-expense/${expense._id}`)}
                    />
                    <FiTrash2
                      className="cursor-pointer text-red-500"
                      onClick={() => handleDelete(expense._id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {expenses.length === 0 && (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No expenses found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalExpense;
