const koa = require('koa');
const express = require('express');
import convert from 'koa-convert';
const webpack = require('webpack');
import webpackDevMiddleware  from './koaWebpackDevMiddleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
const config = require('../webpack.config.js');

const compiler = webpack(config);
const app = new koa();

app.use(convert(
  webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: "/"
})));

app.use(convert(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client'), {
  log: console.log, path: '/__', heartbeat: 10 * 1000
})));

app.use(webpackHotServerMiddleware(compiler, {
	serverRendererOptions: {
		foo: 'Bar'
	}
}));

app.listen(6060, () => {
	console.log('Server started: http://localhost:6060/');
});