import React from 'react';
import ReactDOM from 'react-dom';

const AppComponent = (props) =>  {
	return (
		<div>
			<div>
				<span className="tag">{Liferay.Language.get('portlet-namespace')}:</span> 
				<span className="value">{this.props.portletNamespace}</span>
			</div>
			<div>
				<span className="tag">{Liferay.Language.get('context-path')}:</span>
				<span className="value">{this.props.contextPath}</span>
			</div>
			<div>
				<span className="tag">{Liferay.Language.get('portlet-element-id')}:</span>
				<span className="value">{this.props.portletElementId}</span>
			</div>
			
			<div>
				<span className="tag">{Liferay.Language.get('configuration')}:</span>
				<span className="value pre">{JSON.stringify(this.props.configuration, null, 2)}</span>
			</div>
			
		</div>
	);

}
export default AppComponent;