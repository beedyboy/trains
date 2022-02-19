import { gql } from "apollo-server";
export const typeDefs = gql`
  type Subscriber {
    id: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }
  type Blog {
    id: String!
    title: String!
    slug: String!
    content: String!
    images: String!
    createdAt: String!
    updatedAt: String!
  }
  type User {
    id: ID!
    name: String
    email: String
    password: String
  }
  type Query {
    subscribers: [Subscriber]!
    getSubscriber(id: String): Subscriber
    users: [User!]!
    blogs:[Blog]!
    getBlogBySlug(slug: String): Blog
  }
  type Mutation {
    createSubscriber(email: String!): Subscriber!
    newBlog(title: String!, content: String!, images: [String]): Blog!
  }
`;

// Query for fetching
// Mutation is  for C.U.D

//resolver is for
