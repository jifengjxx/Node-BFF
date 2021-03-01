###### BFF架构

#### nodemon
npm install --save-dev nodemon


### koa
npm install koa

npm install koa-static
app.use(require('koa-static')(root, opts));

npm install koa-swig
app.context.render = render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  locals: locals,
  filters: filters,
  tags: tags,
  extensions: extensions
});

npm install --save 'koa2-connect-history-api-fallback'
koa2的一个中间件，用于处理vue-router使用history模式返回index.html，让koa2支持SPA应用程序。

### @koa/router
npm i @koa/router

### log4js
npm install log4js

### scripty
npm install --save-dev scripty
chmod -R +x scripts

### jscpd
npm install -g jscpd
代码重复率

### webpack
npm install --save-dev webpack
## webpack多入口处理
npm i yargs
npm install --save-dev babel-cli
npm i babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime