'use strict';

Liferay.Loader.define('my-project@1.0.0/App', ['module', 'exports', 'require', 'my-project$react', 'my-project$react-dom', './Libros', './Perfil', 'my-project$react-router-dom', './DetalleLibro'], function (module, exports, require) {
    var define = undefined;
    var global = window;
    {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });

        var _react = require('my-project$react');

        var _react2 = _interopRequireDefault(_react);

        var _reactDom = require('my-project$react-dom');

        var _reactDom2 = _interopRequireDefault(_reactDom);

        var _Libros = require('./Libros');

        var _Libros2 = _interopRequireDefault(_Libros);

        var _Perfil = require('./Perfil');

        var _Perfil2 = _interopRequireDefault(_Perfil);

        var _reactRouterDom = require('my-project$react-router-dom');

        var _DetalleLibro = require('./DetalleLibro');

        var _DetalleLibro2 = _interopRequireDefault(_DetalleLibro);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        var App = function App(_ref) {
            var configuration = _ref.configuration;

            var signedIn = Liferay.ThemeDisplay.isSignedIn();
            console.log(signedIn);
            return _react2.default.createElement('div', null, signedIn ? _react2.default.createElement(_reactRouterDom.HashRouter, null, _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/' }, _react2.default.createElement(_Perfil2.default, { configuration: configuration })), _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/libros' }, _react2.default.createElement(_Libros2.default, { configuration: configuration })), _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/libro/:contentId' }, _react2.default.createElement(_DetalleLibro2.default, null))) : _react2.default.createElement('div', null, _react2.default.createElement('p', null, 'Tienes que iniciar sesi\xF3n')));
        };
        exports.default = App;
        //# sourceMappingURL=App.js.map
    }
});
//# sourceMappingURL=App.js.map