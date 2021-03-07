"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SafeRequest {
  static fetch(url) {
    let result = {
      code: 0,
      message: '',
      data: null
    };
    return new Promise((resolve, reject) => {
      (0, _axios.default)(url).then(res => {
        result.data = res.data;
        resolve(result);
      }).catch(err => {
        result.message = err.message;
        result.code = -1;
        resolve(result);
      });
    });
  }

}

var _default = SafeRequest;
exports.default = _default;