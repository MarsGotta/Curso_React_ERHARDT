import './OwlHeader.css';
import OwlIcon from '../OwlIcon/OwlIcon'
import OwlLogo from '../OwlLogo/OwlLogo'

function OwlHeader() {
  return (
    <header className="OwlHeader">
      <OwlIcon name="bar" position="left"/>
      <OwlLogo />
      <OwlIcon name="search" position="right"/>
    </header>
  );
}

export default OwlHeader;
