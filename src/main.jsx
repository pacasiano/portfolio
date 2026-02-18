
import React from "react";
import * as ReactDOM from "react-dom/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import "./index.css";
import App from "./App";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://cms.pacasiano.space/wp-cms/index.php?graphql" }),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);