import './OwlHeader.css';
import OwlIcon from '../OwlIcon/OwlIcon'
import OwlLogo from '../OwlLogo/OwlLogo'

function OwlHeader() {
  return (
    <header>
      <OwlIcon name="bar" />
      <OwlLogo />
      <div id="icono-search"><OwlIcon name="search"/></div>
      
    </header>
  );
}

export default OwlHeader;
