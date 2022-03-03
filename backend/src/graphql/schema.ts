import { gql } from "apollo-server";
export const typeDefs = gql`
  scalar Upload
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
  }

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
  type UploadedFileResponse {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
  }
  input BlogInput {
    title: String!
    content: String!
    file: Upload!
  }

  type Query {
    subscribers: [Subscriber]!
    getSubscriber(id: String): Subscriber!
    users: [User!]!
    blogs: [Blog]!
    getBlogBySlug(slug: String!): Blog!
  }

  type Mutation {
    createSubscriber(email: String!): Subscriber!
    # newBlog(title: String!, content: String!, file: Upload!): Blog!
    newBlog(data: BlogInput!): Blog!
    singleUpload(file: Upload!): File!
    fileUpload(file: [Upload]!): [File]!
    multipleUploadFile(files: [Upload]!): [File]!
  }
`;

// Query for fetching
// Mutation is  for C.U.D

//resolver is for

// {"query":"mutation newBlog($title: String!, $content: String!,$file:Upload!)
// {\n  newBlog(title: $title, content:$content,file: $file){content}\n}"}
