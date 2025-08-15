import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

const EditExpense = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
  });
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL; // <-- .env থেকে URL

  const fetchExpense = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/expenses/${id}`);
      const expense = res.data;
      if (expense) {
        setFormData({
          title: expense.title,
          amount: expense.amount,
          category: expense.category,
        });
      } else {
        alert("Expense not found!");
        navigate("/total-expense");
      }
    } catch (err) {
      console.error(err);
      alert("Error fetching expense");
      navigate("/total-expense");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpense();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { title, amount, category } = formData;
    if (!title || !amount || !category) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.put(`${API_URL}/api/expenses/${id}`, {
        title,
        amount: Number(amount),
        category,
      });

      if (res.status === 200) {
        alert("Expense updated successfully!");
        navigate("/total-expense");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating expense");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Expense</h2>
      <form onSubmit={handleUpdate} className="grid gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Others">Others</option>
        </select>
        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={() => navigate("/total-expense")}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditExpense;
