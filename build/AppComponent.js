'use strict';

Liferay.Loader.define('my-project@1.0.0/AppComponent', ['module', 'exports', 'require', 'my-project$react', 'my-project$react-dom'], function (module, exports, require) {
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

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { default: obj };
		}

		var AppComponent = function AppComponent(props) {
			return _react2.default.createElement('div', null, _react2.default.createElement('div', null, _react2.default.createElement('span', { className: 'tag' }, Liferay.Language.get('portlet-namespace'), ':'), _react2.default.createElement('span', { className: 'value' }, undefined.props.portletNamespace)), _react2.default.createElement('div', null, _react2.default.createElement('span', { className: 'tag' }, Liferay.Language.get('context-path'), ':'), _react2.default.createElement('span', { className: 'value' }, undefined.props.contextPath)), _react2.default.createElement('div', null, _react2.default.createElement('span', { className: 'tag' }, Liferay.Language.get('portlet-element-id'), ':'), _react2.default.createElement('span', { className: 'value' }, undefined.props.portletElementId)), _react2.default.createElement('div', null, _react2.default.createElement('span', { className: 'tag' }, Liferay.Language.get('configuration'), ':'), _react2.default.createElement('span', { className: 'value pre' }, JSON.stringify(undefined.props.configuration, null, 2))));
		};
		exports.default = AppComponent;
		//# sourceMappingURL=AppComponent.js.map
	}
});
//# sourceMappingURL=AppComponent.js.map