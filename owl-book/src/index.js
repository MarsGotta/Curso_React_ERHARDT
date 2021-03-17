import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import store from './redux/configureStore'
import { ThemeContext, themes, client } from "./core"
import Layout from './layout/Layout'
import OwlHomeView from './views/OwlHomeView/OwlHomeView';
import OwlSearchView from './views/OwlSearchView/OwlSearchView';
import OwlDetailView from './views/OwlDetailView/OwlDetailView';
import OwlUserView from './views/OwlUserView/OwlUserView';
import reportWebVitals from './reportWebVitals';
import './index.css';

function App() {
  const [theme, setTheme] = useState(themes.dark)
  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light)
    } else {
      setTheme(themes.dark)
    }
  }
  return (
    <Router>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ThemeContext.Provider value={theme}>
            <Layout changeTheme={toggleTheme} theme={theme}>
              <Switch>
                <Route path="/" exact>
                  <OwlHomeView />
                </Route>
                <Route path="/search/:search?">
                  <OwlSearchView />
                </Route>
                <Route path="/detail/:id">
                  <OwlDetailView />
                </Route>
                <Route path="/user/:id?">
                  <OwlUserView />
                </Route>
              </Switch>
            </Layout>
          </ThemeContext.Provider>
        </Provider>
      </ApolloProvider>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();