import express from 'express';
import { createExpense, deleteExpense, getAllExpenses,getExpensesByCategory } from '../controllers/expense.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/',protectRoute, getAllExpenses);

router.get('/expensesByCategory',protectRoute, getExpensesByCategory);

router.post('/add', protectRoute, createExpense);

router.delete('/delete/:id', protectRoute, deleteExpense);

export default router