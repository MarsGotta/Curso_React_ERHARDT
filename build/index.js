'use strict';

Liferay.Loader.define('my-project@1.0.0/index', ['module', 'exports', 'require', 'my-project$react', 'my-project$react-dom', './App'], function (module, exports, require) {
    var define = undefined;
    var global = window;
    {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.ConfigurationContext = undefined;
        exports.default = main;

        var _react = require('my-project$react');

        var _react2 = _interopRequireDefault(_react);

        var _reactDom = require('my-project$react-dom');

        var _reactDom2 = _interopRequireDefault(_reactDom);

        var _App = require('./App');

        var _App2 = _interopRequireDefault(_App);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        /**
         * This is the main entry point of the portlet.
         *
         * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent 
         * information on the signature of this function.
         *
         * @param  {Object} params a hash with values of interest to the portlet
         * @return {void}
         */
        var ConfigurationContext = exports.ConfigurationContext = _react2.default.createContext(undefined);

        function main(_ref) {
            var portletNamespace = _ref.portletNamespace,
                contextPath = _ref.contextPath,
                portletElementId = _ref.portletElementId,
                configuration = _ref.configuration;

            _reactDom2.default.render(_react2.default.createElement(ConfigurationContext.Provider, { value: configuration }, _react2.default.createElement(_App2.default, null)), document.getElementById(portletElementId));
        }
        //# sourceMappingURL=index.js.map
    }
});
//# sourceMappingURL=index.js.map