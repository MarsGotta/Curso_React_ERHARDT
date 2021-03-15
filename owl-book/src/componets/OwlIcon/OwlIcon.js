import * as IconCollection from './icon-collection'
import './OwlIcon.css';

function OwlIcon(props) {
  const { className = '', name } = props;
  const styleClasses = `owl-icon ${className}`
  return IconCollection[name] ? IconCollection[name]({ ...props, className: styleClasses }) : ''
}

export default OwlIcon;