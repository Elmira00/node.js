import { getTokenContents } from "../utils/getTokenContents.js";
import { Expense } from "../models/expense.model.js";

export const createExpense = async (req, res) => {
  const { category, amount } = req.body;
  const { accessToken } = req.cookies;
  const { id } = getTokenContents(res, accessToken);

  const expense = new Expense({
    category,
    amount,
    author: id,
  });

  try {
    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllExpenses = async (req, res) => {
  try {
    const { accessToken } = req.cookies;
    const { id, email } = getTokenContents(res, accessToken);
    const expenses = await Expense.find({ author: id }).populate(
      "author",
      "name surname email"
    );

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getExpensesByCategory = async (req, res) => {
  try {
    const { category } = req.query;
    const { accessToken } = req.cookies;
    const { id, email } = getTokenContents(res, accessToken);
    const expenses = await Expense.find({ author: id,category: category}).populate(
      "author",
      "name surname email"
    );

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpense = await Expense.findByIdAndDelete(id);
    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
