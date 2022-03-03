import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// const client = ...

// client
//   .query({
//     query: gql`
//      query GetAllSubscribers {
//   subscribers {
//     id
//     email
//   }
// }
//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
