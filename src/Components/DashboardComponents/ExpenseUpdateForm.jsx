import React, { useState } from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import LocationPickerMap from "./LocationPicker"; // You must have this component
// import { getAddressFromCoordinates } from "../utils"; // Optional, if used separately
import imageCompression from "browser-image-compression";
import { Button } from "@mui/material";

function ExpenseUpdateForm({ setOpen, setOpenSuccessSnackBar }) {
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
        <>
          <p className="font-serif text-md flex justify-center items-center pb-2 ">Mark expensed Location !</p>
          <LocationPickerMap
            setOpenLocationPicker={setOpenLocationPicker}
            pendingFormData={pendingFormData}
            setOpen={setOpen}
            setOpenSuccessSnackBar={setOpenSuccessSnackBar}
          />
        </>
      ) : (
        <>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 font-serif">
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
                className="w-full px-4 py-1 border rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
                placeholder="Additional information"
                required
              />
            </div>

            <div className="mb-4 flex flex-col items-center justify-center cursor-pointer">
              <Button variant="contained" component="label">
                <label
                  htmlFor="image"
                  className=" flex justify-center items-center text-gray-700 mb-1"
                >
                  <div className="flex justify-between items-center gap-1 p-0">
                    <FileUploadIcon className=" text-white text-2xl " />
                    <p className="text-white font-bold pt-1">Image</p>
                  </div>
                </label>
              </Button>
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
