'use strict';

Liferay.Loader.define("my-project@1.0.0/Libros", ['module', 'exports', 'require', 'my-project$react', './Libro', 'my-project$react-router-dom', './Categorias', './ListLibros'], function (module, exports, require) {
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

        var _Categorias = require("./Categorias");

        var _Categorias2 = _interopRequireDefault(_Categorias);

        var _ListLibros = require("./ListLibros");

        var _ListLibros2 = _interopRequireDefault(_ListLibros);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var Libros = function Libros(_ref) {
            var configuration = _ref.configuration;

            var structureId = configuration.portletInstance.structureId;

            var _useState = (0, _react.useState)(undefined),
                _useState2 = _slicedToArray(_useState, 2),
                articles = _useState2[0],
                setArticles = _useState2[1];

            var vocabularyId = configuration.portletInstance.vocabularyId;

            var _useState3 = (0, _react.useState)(undefined),
                _useState4 = _slicedToArray(_useState3, 2),
                categories = _useState4[0],
                setCategories = _useState4[1];

            var _useState5 = (0, _react.useState)({ name: "Todos" }),
                _useState6 = _slicedToArray(_useState5, 2),
                selectedCategory = _useState6[0],
                setSelectedCategory = _useState6[1];

            (0, _react.useEffect)(function () {
                Liferay.Util.fetch('/o/headless-admin-taxonomy/v1.0/taxonomy-vocabularies/' + vocabularyId + '/taxonomy-categories/', {
                    headers: {
                        'Accept': 'application/json'
                    },
                    method: 'GET'
                }).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    return setCategories(data);
                });
            }, [vocabularyId]);

            (0, _react.useEffect)(function () {
                var url = '/o/headless-delivery/v1.0/content-structures/' + structureId + '/structured-contents';
                if (selectedCategory.name != "Todos") {
                    url = '/o/headless-delivery/v1.0/content-structures/' + structureId + '/structured-contents?search=' + selectedCategory.name;
                }

                Liferay.Util.fetch(url, {
                    headers: {
                        'Accept': 'application/json'
                    },
                    method: 'GET'
                }).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    return setArticles(data);
                });
            }, [structureId, selectedCategory]);

            var handleClick = function handleClick(item) {
                console.log(item);
                setSelectedCategory(item);
            };

            console.log(categories);
            if (articles == undefined || categories == undefined) {
                return _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement(_reactRouterDom.Link, { to: '/' }, 'Volver a home'), _react2.default.createElement('div', null, 'Cargando'));
            } else {
                return _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement(_reactRouterDom.Link, { to: '/' }, 'Volver a home'), _react2.default.createElement(_Categorias2.default, { categories: categories, onClickCategory: handleClick, selectedCategory: selectedCategory }), _react2.default.createElement(_ListLibros2.default, { articles: articles }));
            }
        };

        exports.default = Libros;
        //# sourceMappingURL=Libros.js.map
    }
});
//# sourceMappingURL=Libros.js.map