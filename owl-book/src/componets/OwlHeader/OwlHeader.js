import OwlNav from '../OwlNav/OwlNav'
import OwlIcon from '../OwlIcon/OwlIcon'
import OwlLogo from '../OwlLogo/OwlLogo'
import './OwlHeader.css';

function OwlHeader() {
  return (
    <>
      <header>
        <OwlIcon name="bar" />
        <OwlLogo />
        <OwlIcon name="search" />
      </header>
      <OwlNav />
    </>
  );
}

export default OwlHeader;
