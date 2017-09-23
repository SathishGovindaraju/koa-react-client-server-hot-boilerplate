require('babel-polyfill');
const React = require('react');
import createHistory from 'history/createBrowserHistory';
const { render } = require('react-dom');
import { BrowserRouter } from 'react-router-dom'
import App from './component/App.jsx';

render(
  <BrowserRouter >
    <App />
  </ BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}