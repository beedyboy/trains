import { gql } from "@apollo/client";

const allBlogs = gql`
  query GetBlogs {
    blogs {
      id
      title
      content
      slug
      images
    }
  }
`;
const GET_BLOG_SLUG = gql`
  query GetBlogBySlug($slug: String!) {
    getBlogBySlug(slug: $slug) {
      id
      title
      content
      slug
      images
      createdAt
      updatedAt
    }
  }
`;
const getSubscribers = gql`
  query GetAllSubscribers {
    subscribers {
      id
      email
    }
  }
`;
const subscribeMe = gql`
  mutation CreateSubscriber($email: String!) {
    createSubscriber(email: $email) {
      id
      email
    }
  }
`;
const CONTACT_US = gql`
   mutation contactUs($values: ContactInput!) {
    contactUs(data: $values) {
     message
    }
  }
`;
const REQUEST_QUOTE = gql`
   mutation serviceQuote($values: QuoteInput!) {
    serviceQuote(data: $values) {
     message
    }
  }
`;
const apis = {
  getSubscribers,
  subscribeMe,
  allBlogs,
  GET_BLOG_SLUG,
  CONTACT_US,
  REQUEST_QUOTE
};
export default apis;
 