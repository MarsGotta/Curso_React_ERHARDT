'use strict';

Liferay.Loader.define('my-project@1.0.0/Libro', ['module', 'exports', 'require', 'my-project$react', 'my-project$react-router-dom'], function (module, exports, require) {
    var define = undefined;
    var global = window;
    {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _react = require('my-project$react');

        var _react2 = _interopRequireDefault(_react);

        var _reactRouterDom = require('my-project$react-router-dom');

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var Libro = function Libro(_ref) {
            var item = _ref.item;

            var libro = {};
            console.log(item);
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = item.contentFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var contentField = _step.value;

                    console.log(contentField);
                    switch (contentField.label) {
                        case "Titulo":
                            libro.titulo = contentField.contentFieldValue.data;
                            break;
                        case "Imagen":
                            libro.imagen = contentField.contentFieldValue.document.contentUrl;
                            break;
                        case "Autor":
                            libro.autor = contentField.contentFieldValue.data;
                            break;
                        default:
                            break;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return _react2.default.createElement('li', { key: item.key, className: 'libro' }, _react2.default.createElement(_reactRouterDom.Link, { to: '/libro/' + item.id }, _react2.default.createElement('h2', null, libro.titulo)), _react2.default.createElement('img', { src: libro.imagen }), _react2.default.createElement('p', null, libro.autor));
        };

        exports.default = Libro;
        //# sourceMappingURL=Libro.js.map
    }
});
//# sourceMappingURL=Libro.js.map