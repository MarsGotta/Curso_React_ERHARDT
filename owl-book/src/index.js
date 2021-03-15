import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import store from './redux/configureStore'
import { ThemeContext, themes } from "./core/theme-context"
import Layout from './layout/Layout'
import OwlHomeView from './views/OwlHomeView/OwlHomeView';
import OwlSearchView from './views/OwlSearchView/OwlSearchView';
import OwlDetailView from './views/OwlDetailView/OwlDetailView';
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
      <Provider store={store}>
        <ThemeContext.Provider value={theme}>
          <Layout changeTheme={toggleTheme}>
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
        </ThemeContext.Provider>
      </Provider>
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
