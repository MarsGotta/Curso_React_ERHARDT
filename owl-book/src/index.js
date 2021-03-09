import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from './layout/Layout'
import OwlHomeView from './views/OwlHomeView/OwlHomeView';
import OwlSearchView from './views/OwlSearchView/OwlSearchView';
import OwlDetailView from './views/OwlDetailView/OwlDetailView';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <OwlHomeView />
          </Route>
          <Route path="/search">
            <OwlSearchView />
          </Route>
          <Route path="/detail">
            <OwlDetailView />
          </Route>
        </Switch>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
