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
const apis = {
  getSubscribers,
  subscribeMe,
  allBlogs,
  GET_BLOG_SLUG,
};
export default apis;
 