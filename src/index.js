/*!

=========================================================
* Material Kit PRO React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import client from "apollo/client.js"

import App from "./App";




ReactDOM.render(
  <ApolloProvider client={client}>
  <App/>
  </ApolloProvider>

  ,
  document.getElementById("root")
);
