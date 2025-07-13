import React, { useState } from "react";
import FileUploadIcon from '@mui/icons-material/FileUpload';

function ExpenseUpdateForm() {
  const [formData, setFormData] = useState({
    amount: "",
    purpose: "",
    note: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Debug: Log form data
    console.log("Amount:", formData.amount);
    console.log("Purpose:", formData.purpose);
    console.log("Note:", formData.note);
    console.log("Image:", formData.image);

    // Example: send formData to backend using FormData API
    const data = new FormData();
    data.append("amount", formData.amount);
    data.append("purpose", formData.purpose);
    data.append("note", formData.note);
    if (formData.image) data.append("image", formData.image);

    // Example: fetch("/api/submit", { method: "POST", body: data });

    alert("Form submitted!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Add Expense
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-gray-700 mb-1">
            Amount (₹)
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="purpose" className="block text-gray-700 mb-1">
            Purpose
          </label>
          <input
            type="text"
            name="purpose"
            id="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="note" className="block text-gray-700 mb-1">
            Note
          </label>
          <textarea
            name="note"
            id="note"
            value={formData.note}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
            placeholder="Additional information"
          />
        </div>

        <div className="mb-4 flex flex-col items-center justify-between cursor-pointer">
          <label htmlFor="image" className="block text-gray-700 mb-1">
            <FileUploadIcon className="inline mr-2 text-blue-400 text-3xl" /> Upload Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition"
        >
          Submit Expense
        </button>
        
      </form>
    </div>
  );
}

export default ExpenseUpdateForm;
