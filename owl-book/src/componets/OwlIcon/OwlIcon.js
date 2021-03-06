import * as IconCollection from './icon-collection'
import './OwlIcon.css';

function OwlIcon({name, position}) {
  return (
    <div class={"icon-" + position}>
      {IconCollection[name] ? IconCollection[name] : ''}
    </div>
  )
}

export default OwlIcon;
