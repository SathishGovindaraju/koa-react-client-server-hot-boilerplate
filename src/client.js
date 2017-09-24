require('babel-polyfill');
const React = require('react');
import createHistory from 'history/createBrowserHistory';
const { render } = require('react-dom');
import { BrowserRouter } from 'react-router-dom';
import App from './component/App.jsx';
import { AppContainer } from 'react-hot-loader';

const renderToDOM = Component => render(
  <AppContainer>
    <BrowserRouter >
      <Component />
    </ BrowserRouter>
  </AppContainer>,
  document.getElementById('root')
);

renderToDOM(App);

if (module.hot) {
  module.hot.accept();
  // module.hot.accept('./component/App.jsx', () => { renderToDOM(App) })
}