'use strict';

Liferay.Loader.define("my-project@1.0.0/Perfil", ['module', 'exports', 'require', 'my-project$react', './Libro', 'my-project$react-router-dom'], function (module, exports, require) {
    var define = undefined;
    var global = window;
    {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _slicedToArray = function () {
            function sliceIterator(arr, i) {
                var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;_e = err;
                } finally {
                    try {
                        if (!_n && _i["return"]) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }return _arr;
            }return function (arr, i) {
                if (Array.isArray(arr)) {
                    return arr;
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                } else {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
            };
        }();

        var _react = require("my-project$react");

        var _react2 = _interopRequireDefault(_react);

        var _Libro = require("./Libro");

        var _Libro2 = _interopRequireDefault(_Libro);

        var _reactRouterDom = require("my-project$react-router-dom");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var Perfil = function Perfil(_ref) {
            var configuration = _ref.configuration;

            var structureId = configuration.portletInstance.structureId;

            var _useState = (0, _react.useState)(undefined),
                _useState2 = _slicedToArray(_useState, 2),
                articles = _useState2[0],
                setArticles = _useState2[1];

            (0, _react.useEffect)(function () {
                Liferay.Util.fetch('/o/headless-delivery/v1.0/content-structures/' + structureId + '/structured-contents?filter=creatorId%20eq%20' + Liferay.ThemeDisplay.getUserId(), {
                    headers: {
                        'Accept': 'application/json'
                    },
                    method: 'GET'
                }).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    return setArticles(data);
                });
            }, []);

            if (articles == undefined) {
                return _react2.default.createElement('div', null, _react2.default.createElement('h2', null, 'Nombre de perfil: ', Liferay.ThemeDisplay.getUserName()), _react2.default.createElement(_reactRouterDom.Link, { to: '/libros' }, 'Ir a todos los libros'));
            } else {
                return _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('h2', null, 'Nombre de perfil: ', Liferay.ThemeDisplay.getUserName()), articles.totalCount > 0 ? _react2.default.createElement('ul', null, articles.items.map(function (item) {
                    return _react2.default.createElement(_Libro2.default, { item: item });
                })) : _react2.default.createElement('p', null, 'No tienes libros'), _react2.default.createElement(_reactRouterDom.Link, { to: '/libros' }, 'Ir a todos los libros'));
            }
        };

        exports.default = Perfil;
        //# sourceMappingURL=Perfil.js.map
    }
});
//# sourceMappingURL=Perfil.js.map