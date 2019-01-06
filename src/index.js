import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ReactDOM from "react-dom";
import {CookiesProvider} from 'react-cookie';
import App from './app';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

ReactDOM.render(
  <Router>
    <CookiesProvider>
      <Route component={ScrollToTop}/>
      <App />
    </CookiesProvider>
  </Router>,
  document.getElementById('root'),
);