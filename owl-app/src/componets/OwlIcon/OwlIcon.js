import * as IconCollection from './icon-collection'
import './OwlIcon.css';

function OwlIcon({name}) {
  console.log("icon",name)
  return IconCollection[name] ? IconCollection[name] : ''
}

export default OwlIcon;
