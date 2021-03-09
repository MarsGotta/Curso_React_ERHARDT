"use strict";

Liferay.Loader.define("my-project@1.0.0/ListLibros", ['module', 'exports', 'require', 'my-project$react', './Libro'], function (module, exports, require) {
    var define = undefined;
    var global = window;
    {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _react = require("my-project$react");

        var _react2 = _interopRequireDefault(_react);

        var _Libro = require("./Libro");

        var _Libro2 = _interopRequireDefault(_Libro);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var ListLibros = function ListLibros(_ref) {
            var articles = _ref.articles;

            return _react2.default.createElement("ul", null, articles.items.map(function (item) {
                return _react2.default.createElement(_Libro2.default, { item: item });
            }));
        };

        exports.default = ListLibros;
        //# sourceMappingURL=ListLibros.js.map
    }
});
//# sourceMappingURL=ListLibros.js.map