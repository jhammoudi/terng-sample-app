import { gql } from "apollo-server-express";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export default gql`
  type User {
    id: ID
    login: String
    avatar_url: String
  }

  type Book {
    id: ID
    title: String
    author: String
    year: Int
  }

  type Query {
    users: [User]
    books: [Book]
  }

  # type Mutation {}
`;
