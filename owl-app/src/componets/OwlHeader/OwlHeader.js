import './OwlHeader.css';
import OwlIcon from '../OwlIcon/OwlIcon'
import OwlLogo from '../OwlLogo/OwlLogo'

function OwlHeader() {
  return (
    <header>
      {/* <OwlIcon name="bar" /> */}
      <h1><OwlLogo /> BuscaGifs</h1>
      
    </header>
  );
}

export default OwlHeader;
