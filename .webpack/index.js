var main = require('../src/index.js');

var params = {
	portletElementId: 'the-portlet',
	contextPath: '/',
	portletNamespace: '_the-portlet_',
	configuration: {
		portletPreferences: {},
		system: {}
	}
};

window.Liferay = {
	Language: {
		get: function(key) {
			return key;
		}
	}
};

if (main.default) {
	main = main.default;
}

main(params);