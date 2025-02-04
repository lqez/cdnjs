"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grab = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _GrabLineLinked = require("./GrabLineLinked");

var Grab = /*#__PURE__*/function () {
  (0, _createClass2["default"])(Grab, [{
    key: "line_linked",

    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     */
    get: function get() {
      return this.lineLinked;
    }
    /**
     *
     * @deprecated this property is obsolete, please use the new lineLinked
     * @param value
     */
    ,
    set: function set(value) {
      this.lineLinked = value;
    }
  }]);

  function Grab() {
    (0, _classCallCheck2["default"])(this, Grab);
    this.distance = void 0;
    this.lineLinked = void 0;
    this.distance = 100;
    this.lineLinked = new _GrabLineLinked.GrabLineLinked();
  }

  return Grab;
}();

exports.Grab = Grab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9DbGFzc2VzL09wdGlvbnMvSW50ZXJhY3Rpdml0eS9Nb2Rlcy9HcmFiLnRzIl0sIm5hbWVzIjpbIkdyYWIiLCJsaW5lTGlua2VkIiwidmFsdWUiLCJkaXN0YW5jZSIsIkdyYWJMaW5lTGlua2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7O0lBRWFBLEk7Ozs7QUFDVDs7Ozt3QkFJMEM7QUFDdEMsYUFBTyxLQUFLQyxVQUFaO0FBQ0g7QUFFRDs7Ozs7O3NCQUt1QkMsSyxFQUF3QjtBQUMzQyxXQUFLRCxVQUFMLEdBQWtCQyxLQUFsQjtBQUNIOzs7QUFLRCxrQkFBYztBQUFBO0FBQUEsU0FIUEMsUUFHTztBQUFBLFNBRlBGLFVBRU87QUFDVixTQUFLRSxRQUFMLEdBQWdCLEdBQWhCO0FBQ0EsU0FBS0YsVUFBTCxHQUFrQixJQUFJRyw4QkFBSixFQUFsQjtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJR3JhYn0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lHcmFiXCI7XG5pbXBvcnQge0lHcmFiTGluZUxpbmtlZH0gZnJvbSBcIi4uLy4uLy4uLy4uL0ludGVyZmFjZXMvT3B0aW9ucy9JbnRlcmFjdGl2aXR5L01vZGVzL0lHcmFiTGluZUxpbmtlZFwiO1xuaW1wb3J0IHtHcmFiTGluZUxpbmtlZH0gZnJvbSBcIi4vR3JhYkxpbmVMaW5rZWRcIjtcblxuZXhwb3J0IGNsYXNzIEdyYWIgaW1wbGVtZW50cyBJR3JhYiB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAZGVwcmVjYXRlZCB0aGlzIHByb3BlcnR5IGlzIG9ic29sZXRlLCBwbGVhc2UgdXNlIHRoZSBuZXcgbGluZUxpbmtlZFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQgbGluZV9saW5rZWQoKTogSUdyYWJMaW5lTGlua2VkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGluZUxpbmtlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHRoaXMgcHJvcGVydHkgaXMgb2Jzb2xldGUsIHBsZWFzZSB1c2UgdGhlIG5ldyBsaW5lTGlua2VkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgcHVibGljIHNldCBsaW5lX2xpbmtlZCh2YWx1ZTogSUdyYWJMaW5lTGlua2VkKSB7XG4gICAgICAgIHRoaXMubGluZUxpbmtlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXN0YW5jZTogbnVtYmVyO1xuICAgIHB1YmxpYyBsaW5lTGlua2VkOiBJR3JhYkxpbmVMaW5rZWQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IDEwMDtcbiAgICAgICAgdGhpcy5saW5lTGlua2VkID0gbmV3IEdyYWJMaW5lTGlua2VkKCk7XG4gICAgfVxufVxuIl19