"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = _interopRequireDefault(require("./controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class IndexController extends _controller.default {
  constructor() {
    super();
  }

  async actionIndex(ctx) {
    //  throw new Error('自定义错误');
    ctx.body = "🏮首页";
  }

}

var _default = IndexController;
exports.default = _default;