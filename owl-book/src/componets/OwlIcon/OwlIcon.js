import * as IconCollection from './icon-collection'
import './OwlIcon.css';

function OwlIcon({ name, width, height, color, className, stroke }) {
  return IconCollection[name] ? IconCollection[name]({ width, height, color, className, stroke }) : ''
}

export default OwlIcon;
