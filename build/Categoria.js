"use strict";

Liferay.Loader.define("my-project@1.0.0/Categoria", ['module', 'exports', 'require', 'my-project$react'], function (module, exports, require) {
    var define = undefined;
    var global = window;
    {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _react = require("my-project$react");

        var _react2 = _interopRequireDefault(_react);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var Categoria = function Categoria(_ref) {
            var item = _ref.item;

            return _react2.default.createElement("li", { key: item.key, className: "categoria" }, _react2.default.createElement("p", null, item.name));
        };

        exports.default = Categoria;
        //# sourceMappingURL=Categoria.js.map
    }
});
//# sourceMappingURL=Categoria.js.map