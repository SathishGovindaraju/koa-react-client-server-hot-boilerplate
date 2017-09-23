// require('babel-polyfill');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
import App from './component/App.jsx';
import {StaticRouter} from 'react-router-dom';

module.exports = function serverRenderer({ clientStats, serverStats, foo }) {
    return (ctx, next) => {
        ctx.status = 200;
        ctx.body = `
            <!doctype html>
            <html>
            <head>
                <title>${foo}</title>
            </head>
            <body>
                <div id="root">${renderToString(
                  <StaticRouter location={ctx.req.url} context={{}}>
                    <App />
                  </ StaticRouter>
                )}</div>
                <script src="/client.js"></script>
            </body>
            </html>
        `;
    };
}