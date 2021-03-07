"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Controller = _interopRequireDefault(require("./Controller"));

var _BooksModel = _interopRequireDefault(require("../models/BooksModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BooksController extends _Controller.default {
  constructor() {
    super();
  }

  async actionBooksList(ctx) {
    const booksModel = new _BooksModel.default();
    const result = await booksModel.getBooksList();
    ctx.body = await ctx.render('books/pages/list', {
      data: [{
        id: 1,
        name: "图书一"
      }, {
        id: 2,
        name: "图书二"
      }]
    });
  }

  async actionBooksCreate(ctx) {
    ctx.body = await ctx.render('books/pages/create');
  }

}

var _default = BooksController;
exports.default = _default;