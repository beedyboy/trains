import {
    ApolloClient,
    InMemoryCache, 
  } from "@apollo/client";

  const client = new ApolloClient({
  uri: `${process.env.REACT_APP_API_URL2}graphql`,
  cache: new InMemoryCache()
});

// export const client = new ApolloClient({
//   headers: {
//     Authorization: `Bearer ${REACT_APP_STEPZEN_API_KEY}`,
//   },
//   uri: REACT_APP_STEPZEN_ENDPOINT,
// })

export default client;