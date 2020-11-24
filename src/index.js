import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import App from "./App";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://r8qjn.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then((result) => console.log(result));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
