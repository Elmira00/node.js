import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: [
      "Food",
      "Transportation",
      "Health",
      "Entertainment",
      "Shopping",
      "Education",
      "Travel",
      "Utilities",
      "Insurance",
      "Gifts",
      "Others",
    ],
    required: [true, "Category is required"],
  },
  amount: {
    type: Number,
    required: [true, "Amount is required"],
    min: [0, "Amount must be a positive number"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Author is required"],
  },
});

export const Expense = mongoose.model("Expense", expenseSchema);
