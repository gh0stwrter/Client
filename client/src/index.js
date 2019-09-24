import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from 'react-apollo';
import client from './apollo/index';



ReactDOM.render(
<ApolloProvider client={client}>
<App /> 
</ApolloProvider>

,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA