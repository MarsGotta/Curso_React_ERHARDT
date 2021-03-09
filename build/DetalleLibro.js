'use strict';

Liferay.Loader.define("my-project@1.0.0/DetalleLibro", ['module', 'exports', 'require', 'my-project$react', 'my-project$react-router-dom'], function (module, exports, require) {
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

        var _reactRouterDom = require("my-project$react-router-dom");

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var DetalleLibro = function DetalleLibro() {
            var _useState = (0, _react.useState)(undefined),
                _useState2 = _slicedToArray(_useState, 2),
                article = _useState2[0],
                setArticle = _useState2[1];

            var _useParams = (0, _reactRouterDom.useParams)(),
                contentId = _useParams.contentId;

            var history = (0, _reactRouterDom.useHistory)();

            (0, _react.useEffect)(function () {
                Liferay.Util.fetch('/o/headless-delivery/v1.0/structured-contents/' + contentId, {
                    headers: {
                        'Accept': 'application/json'
                    },
                    method: 'GET'
                }).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    return setArticle(data);
                });
            }, [contentId]);

            if (article == undefined) {
                return _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { onClick: function onClick() {
                        return history.goBack();
                    } }, 'Volver atr\xE1s'), _react2.default.createElement('div', null, 'Cargando'));
            } else {
                var libro = {};
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = article.contentFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var contentField = _step.value;

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
                            case "Descripcion":
                                libro.descripcion = contentField.contentFieldValue.data;
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

                return _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { onClick: function onClick() {
                        return history.goBack();
                    } }, 'Volver atr\xE1s'), _react2.default.createElement('h2', null, libro.titulo), _react2.default.createElement('img', { src: libro.imagen }), _react2.default.createElement('p', null, libro.autor), article.taxonomyCategoryBriefs.map(function (category) {
                    return _react2.default.createElement('span', null, category.taxonomyCategoryName);
                }), _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: libro.descripcion } }));
            }
        };

        exports.default = DetalleLibro;
        //# sourceMappingURL=DetalleLibro.js.map
    }
});
//# sourceMappingURL=DetalleLibro.js.map