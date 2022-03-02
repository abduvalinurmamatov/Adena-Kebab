import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./Styles/index.scss"
import {ContextProvider} from "./context"
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <ContextProvider>
      <Router>
          <App />
      </Router>
  </ContextProvider>,
  document.getElementById('root')
);


