


/**
 * Todo Schema definition
 *  
 *  Create Todo type with the following attributes:
 * 
 * - id: ID! (The unique identifier of the todo item.)
 * - title: String! (The title of the todo item.)
 * - description: String (The description of the todo item.)
 * - completed: Boolean! (Indicates whether the todo item is completed.)
 * 
 * 
 * Create the query object with actions 
 * and relevant return types
 * 
 * Create the mutation object with 
 * their relevant input types
 * 
 * @author Ifeanyi Anuebunwa
 */ 

const typeDefs = `#graphql
  type Todo {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
  }

  type Query {
    todos: [Todo]!
    todo(id: ID!): Todo
  }

  type Mutation {
    createTodo(title: String!, description: String, completed: Boolean): Todo
    updateTodo(id: ID!, title: String, description: String, completed: Boolean): Todo
    deleteTodo(id: ID!): Todo
  }
`;

export default typeDefs;