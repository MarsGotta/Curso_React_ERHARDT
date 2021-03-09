'use strict';

Liferay.Loader.define('my-project@1.0.0/Categorias', ['module', 'exports', 'require', 'my-project$react', './Categoria'], function (module, exports, require) {
    var define = undefined;
    var global = window;
    {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _react = require('my-project$react');

        var _react2 = _interopRequireDefault(_react);

        var _Categoria = require('./Categoria');

        var _Categoria2 = _interopRequireDefault(_Categoria);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var Categorias = function Categorias(_ref) {
            var categories = _ref.categories,
                onClickCategory = _ref.onClickCategory,
                selectedCategory = _ref.selectedCategory;

            return _react2.default.createElement('ul', null, _react2.default.createElement('li', { key: '0', className: selectedCategory.name == "Todos" ? "selected" : "" }, _react2.default.createElement('p', { onClick: function onClick() {
                    return onClickCategory({ name: "Todos" });
                } }, 'Todos')), categories.items.map(function (item) {
                var selected = selectedCategory.name == item.name;
                return _react2.default.createElement('li', { key: item.key, className: selected ? "selected" : "" }, _react2.default.createElement('p', { onClick: function onClick() {
                        return onClickCategory(item);
                    } }, item.name));
            }));
        };

        exports.default = Categorias;
        //# sourceMappingURL=Categorias.js.map
    }
});
//# sourceMappingURL=Categorias.js.map