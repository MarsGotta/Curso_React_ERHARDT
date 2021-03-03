import './AmazonHeader.css';
import AmazonIcon from '../AmazonIcon/AmazonIcon'
import AmazonLogo from '../AmazonLogo/AmazonLogo'

function AmazonHeader() {
  return (
    <div className="headerBar">
      <header>
        <AmazonIcon name="bar" />
        <AmazonLogo />
        <AmazonIcon name="search" />
      </header>
    </div>
  );
}

export default AmazonHeader;
