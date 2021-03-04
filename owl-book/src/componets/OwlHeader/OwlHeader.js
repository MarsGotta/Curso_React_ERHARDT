import './OwlHeader.css';
import OwlIcon from '../OwlIcon/OwlIcon'
import OwlLogo from '../OwlLogo/OwlLogo'
import OwlCard from '../OwlCard/OwlCard'

function OwlHeader() {
  return (
    <header>
      <OwlIcon name="bar" />
      <OwlLogo />
      <OwlIcon name="search" />
    </header>
  );
}

export default OwlHeader;
