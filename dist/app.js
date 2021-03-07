"use strict";

var _koa = _interopRequireDefault(require("koa"));

var _config = _interopRequireDefault(require("./config"));

var _koaSwig = _interopRequireDefault(require("koa-swig"));

var _controllers = _interopRequireDefault(require("./controllers"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _co = _interopRequireDefault(require("co"));

var _koa2ConnectHistoryApiFallback = require("koa2-connect-history-api-fallback");

var _ErrorHandler = _interopRequireDefault(require("./middlewares/ErrorHandler"));

var _log4js = _interopRequireDefault(require("log4js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//commonjs 语法
const app = new _koa.default(); // const logger = log4js.getLogger();

_log4js.default.configure({
  // 日志存放目录
  appenders: {
    globalError: {
      type: "file",
      filename: "./logs/error.log"
    }
  },
  //日志分类
  categories: {
    default: {
      appenders: ["globalError"],
      level: "error"
    }
  }
});

const logger = _log4js.default.getLogger("globalError"); //   logger.trace("Entering cheese testing");
//   logger.debug("Got cheese.");
//   logger.info("Cheese is Comté.");
//   logger.warn("Cheese is quite smelly.");


logger.error("Cheese is too ripe!"); //   logger.fatal("Cheese was breeding ground for listeria.");

app.use((0, _koa2ConnectHistoryApiFallback.historyApiFallback)({
  index: '/',
  whiteList: ['/api', '/books']
}));
app.use((0, _koaStatic.default)(_config.default.staticDir));

_ErrorHandler.default.error(app, logger);

(0, _controllers.default)(app);
app.context.render = _co.default.wrap((0, _koaSwig.default)({
  root: _config.default.viewDir,
  autoescape: true,
  // v-html v-text
  cache: _config.default.cache,
  // disable, set to false
  ext: 'html',
  varControls: ['[[', ']]']
})); // response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

app.listen(_config.default.port, () => {
  console.log(`server is running at ${_config.default.port}`);
});