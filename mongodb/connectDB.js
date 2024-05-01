import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

const URL = process.env.DATABASE_URL || 'mongodb+srv://user1:dada12345@cluster90.xappsrx.mongodb.net/simpletodo?retryWrites=true&w=majority&appName=cluster90'
const connectDB = mongoose.connect(URL)

export default connectDB