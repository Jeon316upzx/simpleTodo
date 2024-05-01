import resolvers from "../resolvers.js";
import todoModel from "../models/todo.js";
import connectDB from "../mongodb/connectDB.js";
import mongoose from "mongoose";

const {
  Mutation: { createTodo, updateTodo, deleteTodo },
} = resolvers;


beforeAll(() => {
  // Setup code to run before all test cases
  connectDB
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
});

describe("Resolvers", () => {
  test("createTodo resolver", async () => {
    const todo = await createTodo(null, {
      title: "Test Todo",
      completed: false,
    });
    expect(todo).toHaveProperty("_id");
    expect(todo.title).toBe("Test Todo");
    expect(todo.completed).toBe(false);
  });

  test("updateTodo resolver", async () => {
    const newTodo = await todoModel.create({
      title: "Old Todo",
      completed: false,
    });
    const updatedTodo = await updateTodo(null, {
      id: newTodo._id,
      title: "New Todo",
    });
    expect(updatedTodo.title).toBe("New Todo");
  });

  test("deleteTodo resolver", async () => {
    const todo = await todoModel.create({
      title: "Todo to delete",
      completed: false,
    });
    const deletedTodo = await deleteTodo(null, { id: todo._id });
    expect(deletedTodo.title).toBe("Todo to delete");
    expect(await todoModel.findById(todo._id)).toBeNull();
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
