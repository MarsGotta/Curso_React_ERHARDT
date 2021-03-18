import * as IconCollection from './icon-collection'
import './ShopIcon.css';

function ShopIcon({ name, width, height, color, className, stroke }) {
  return IconCollection[name] ? IconCollection[name]({ width, height, color, className, stroke }) : ''
}

export default ShopIcon;
