import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/configureStore'
import { ThemeContext, themes } from "./core/theme-context"
import Layout from './layout/Layout'
import HomeView from './views/HomeView/HomeView';
import SearchView from './views/SearchView/SearchView';
import DetailView from './views/DetailView/DetailView';

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
                <HomeView />
              </Route>
              <Route path="/search">
                <SearchView />
              </Route>
              <Route path="/detail/:id">
                <DetailView />
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
