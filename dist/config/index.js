"use strict";

const path = require('path');

let config = {
  viewDir: path.join(__dirname, '../', 'views'),
  staticDir: path.join(__dirname, '../', 'assets')
};
var a = 0;

if (a == 1) {
  console.log(1);
}

if (process.env.NODE_ENV === 'development') {
  const devConfig = {
    port: 3001,
    cache: false
  };
  config = { ...config,
    ...devConfig
  };
}

if (process.env.NODE_ENV === 'production') {
  const prodConfig = {
    port: 80,
    cache: 'memory'
  };
  config = { ...config,
    ...prodConfig
  };
}

module.exports = config;