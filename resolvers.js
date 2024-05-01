import todoModel from "./models/todo.js";

/**
 *   Resolver definition
 *
 *   Create resolvers to match the
 *   names given to query and mutation objects and
 *   use the todoModel mongoose model to perform simple CRUD
 *   Operations
 *
 *   @author Ifeanyi Anuebunwa
 *
 */

const resolvers = {
  Query: {
    todos: async () => {
      return await todoModel.find();
    },
    todo: async (_, { id }) => {
      return await todoModel.findById(id);
    },
  },
  Mutation: {
    createTodo: async (_, args) => {
      if (!args.title) {
        throw new Error("Title is required");
      }
      return await todoModel.create(args);
    },
    updateTodo: async (_, { id, ...args }) => {
      if (!id) {
        throw new Error("ID is required");
      }
      return await todoModel.findByIdAndUpdate(id, args, { new: true });
    },
    deleteTodo: async (_, { id }) => {
      if (!id) {
        throw new Error("ID is required");
      }
      return await todoModel.findByIdAndDelete(id);
    },
  },
};

export default resolvers;
