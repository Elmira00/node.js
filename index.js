import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import cookieParser from 'cookie-parser'
import dbMethods from "./connectDB.js"

import authRoutes from './routes/auth.route.js'
import expenseRoutes from './routes/expense.route.js'

dotenv.config()

const app = express();

app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/expense", expenseRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
    dbMethods.connectDB()
});