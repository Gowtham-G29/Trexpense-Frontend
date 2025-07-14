import React, { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import LocationPickerMap from "./LocationPicker"; // You must have this component
// import { getAddressFromCoordinates } from "../utils"; // Optional, if used separately
import imageCompression from "browser-image-compression";

function ExpenseUpdateForm({ setOpen }) {
  const [openLocationPicker, setOpenLocationPicker] = useState(false);
  const [pendingFormData, setPendingFormData] = useState(null);

  const [formData, setFormData] = useState({
    amount: "",
    purpose: "",
    note: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      handleImageCompression(files[0]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageCompression = async (file) => {
    if (!file) return;

    const options = {
      maxSizeMB: 0.2, 
      maxWidthOrHeight: 194, 
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);

      setFormData((prev) => ({ ...prev, image: compressedFile }));
    } catch (error) {
      console.error("Image compression error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenLocationPicker(true);

    const { amount, purpose, note, image } = formData;
    const data = new FormData();

    data.append("amount", Number(amount));
    data.append("purpose", purpose);
    data.append("note", note);

    if (image) {
      data.append("image", image);
    }
    setPendingFormData(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      {openLocationPicker ? (
        <LocationPickerMap
          setOpenLocationPicker={setOpenLocationPicker}
          pendingFormData={pendingFormData}
          setOpen={setOpen}
        />
      ) : (
        <>
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
                maxLength={10}
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
                required
              />
            </div>

            <div className="mb-4 flex flex-col items-center justify-between cursor-pointer">
              <label htmlFor="image" className="block text-gray-700 mb-1">
                <FileUploadIcon className="inline mr-2 text-blue-400 text-3xl" />
                Upload Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md transition"
            >
              Submit Expense
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default ExpenseUpdateForm;
