import React from 'react';
import KoaReactRouter from 'koa-react-router';
const renderToString = require('react-dom/server').renderToString;
import App from './component/App.jsx';
import {StaticRouter} from 'react-router-dom';

const Container = props => (
    <html>
    <head>
        <title>Sathish</title>
    </head>
    <body>
        <div id="root">
            {props.children}
        </div>
        <script src="/client.js"></script>
    </body>
    </html>
);

export default () => KoaReactRouter({
    App,
    onError: (ctx, err) => console.log('I Have failed!!!! \n', err),
    onRedirect: (ctx, redirect) => console.log('I have redirected!'),
    onRender: (ctx, next) => ({ Container: Container })
});