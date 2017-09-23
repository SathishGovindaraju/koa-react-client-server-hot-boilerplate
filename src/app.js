import koa from 'koa';
import webpack from 'webpack';
import convert from 'koa-convert';
import webpackDevMiddleware  from './koaWebpackDevMiddleware';
// import webpackDevMiddleware  from 'koa-webpack-dev-middleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import config from '../webpack.config.js';

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