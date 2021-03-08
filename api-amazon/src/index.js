import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home'
import { Route } from 'wouter';
import reportWebVitals from './reportWebVitals';
import AmazonListaProductos from './componets/AmazonListaProductos/AmazonListaProductos';

ReactDOM.render(
  <React.StrictMode>
    <Route
      path="/"
      component={Home}
    />
    <Route
      path="/search/:keyword"
      component={AmazonListaProductos}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
