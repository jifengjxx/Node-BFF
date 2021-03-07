"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = _interopRequireDefault(require("./controller"));

var _BooksModel = _interopRequireDefault(require("../models/BooksModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ApiController extends _controller.default {
  constructor() {
    super();
  }

  apiActionDataList(ctx) {
    ctx.body = [{
      id: 1,
      data: '1'
    }, {
      id: 2,
      data: '2'
    }];
  }

  async actionBooksList(ctx) {
    const booksModel = new _BooksModel.default();
    const result = await booksModel.getBooksList();
    ctx.body = result.data;
  }

}

var _default = ApiController;
exports.default = _default;