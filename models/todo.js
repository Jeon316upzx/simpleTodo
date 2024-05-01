import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
const todoModel = mongoose.model("todo", todoSchema);
export default todoModel;
