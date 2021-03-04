import * as IconCollection from './icon-collection'
import './AmazonIcon.css';

function AmazonIcon({ name }) {
  return IconCollection[name] ? IconCollection[name] : ''
}

export default AmazonIcon;
