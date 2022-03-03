import { ApolloProvider, useQuery, gql } from "@apollo/client";

const getSubscribers = gql`
  query GetAllSubscribers {
    subscribers {
      id
      email
    }
  }
`;
const apis = {
    getSubscribers
};
export default apis;