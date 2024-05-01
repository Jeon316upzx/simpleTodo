
# To-Do List GraphQL API


This project implements a GraphQL API for a to-do list application. The API allows users to perform CRUD (Create, Read, Update, Delete) operations on to-do list items. The data is stored in a MongoDB database, and the API is deployed using AWS Lambda and API Gateway.


# GraphQL Schema
```bash
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
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Authors

- [@jeon316upzx] Ifeanyi Anuebunwa


## Demo

https://2p5v24vjvk.execute-api.us-east-1.amazonaws.com/dev/

